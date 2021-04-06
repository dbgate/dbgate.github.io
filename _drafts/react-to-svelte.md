---
layout: post
title: Rewrite app from React to Svelte, what you can expect
categories: development
---

Recently I have rewritten a medium sized app in React (~250 React components) into Svelte. The result of this action is app, which is more efficient, with easier maintenance and much more readable code. But there were some problems, some situations, which are not streightforward to transform into Svelte code. This article describes some of these situations.

This is not tutorial of Svelte for React programmers, if you don't know Svelte yet, the best starting point is official [Svelte tutorial](https://svelte.dev/tutorial/). This article contains lot of links to Svelte tutorials, instead of explaining Svelte principles.

## CSS

Svelte supports CSS directly in very nice and clean way. In React app, I have used [styled components](https://styled-components.com/). 
There are many CSS libraries for React, but all of them (as I know) use CSS-in-JS paradigm, whereas in Svelte, you use quite clean CSS.

In following snippet, I will show simplified implementation of toolbar button, in React (with styled components) and with Svelte.

Toolbar button has one property (disabled), which disables hover functionality. Also it uses some variables from theme.

```js
// React component ToolbarButton({disabled, toolBarHeight})

const ToolbarButton = styled.div`
  padding: 5px 15px;
  height: ${props.toolBarHeight}px;

  ${(props) =>
    !props.disabled &&
    `
  &:hover {
    background-color: gray;
  }
  `}
`;
```

```vue
<!-- Svelte component -->

<script>
  export let disabled;
</script>

<div class="button" class:disabled />

<style>
.button {
  padding: 5px 15px;
  height: var(--theme-toolbar-height); /* you cannot use prop directly, CSS variable must be used */
}
.button.disabled {
  background-color: gray;
}
</style>
```

Svelte doesn't support any variables in CSS. So it is not possible to pass property to Svelte component and use it it CSS. Only way to do this is switching CSS class ON/OFF. Selector button.disabled is used, when disabled is set to true.

When you want to use some values (eg. dimensions in CSS), you could use CSS variables.

## React hooks, especially useEffect
React hooks are very powerful feature. In Svelte, you won't find anything similar. But most of React hooks, you will not miss in Svelte.

* useState - state is defined with let commands
* useMemo - you can use reactive commands instead to recompute internal state
* useCallback - function expressions are evaluated only once, so doesn't have sense
* useContext - Svelte has very simple and straighforward context API (getContext(), setContext())
* useReducer - you must create Svelte version, using stores (this could is [very easy](https://github.com/dbgate/dbgate/blob/master/packages/web/src/utility/createReducer.ts))
* useRef - you can use bind:this instead (or let variable for instance variables)
* useEffect - this is more complicated...

### useEffect - simple usage

I use useEffect in React very often, unfortunately you must think about it, how to implement same logic in Svelte.

The simplest usage is executing some code on mount and unmount. 

```js
// React
React.useEffect(() => {
  console.log('MOUNT');
  return () => console.log('UNMOUNT');
}, []);
```

This variant is coverted with svelte methods onMount and onDestroy
```js
// Svelte
onMount(() => {
  console.log('MOUNT');
  return () => console.log('UNMOUNT 1');
});
onDestroy(() => {
  console.log('UNMOUNT 2');
});
```

As you can see, you have two variants, how to execute code on unmount - with onDestroy function and with return value of onMount function.

### useEffect - reactive statement

When you want to execute some code on expression change, you could use Svelte reactive statement.

```js
// React
React.useEffect(() => {
  console.log('HEIGHT changed, new value:', height);
}, [height]);
```

```js
// Svelte
$: console.log('HEIGHT changed, new value:', height); 
```

In Svelte, reactive statement is executed, when any of dependencies of statement was assigned. So if you need to do something only when dependency changes, you must check value on you own.

If you want to explicitly enumerate dependencies (like in second argument in React.useEffect method), you could use this pattern:

```js
// Svelte

$: {
  height;
  width;
  handleChanged(); 
}
```
This will be called after assign of height or width variable. You could use other variables in handleChanged function, but these dependencies will not trigger this reactive statement.

### useEffect - reactive statement with cleanup

React useEffect can be used also do allocate some resources, which are dependend on property value. In following example, component is showling list of tables in SQL database. It is listening for database structure changes. When property connectionId is changed, it is neccessary to diconnect from old socket and connect to new socket.

```js
// React
function SqlTableList({ connectionId }) {
  React.useEffect(() => {
    socket.on(`database-structure-changed-${connectionId}`, handleDatabaseStructureChanged);
    return () => {
      socket.off(`database-structure-changed-${connectionId}`, handleDatabaseStructureChanged);
    };
  }, [connectionId]);
}
```

Svelte doesn't support this scenario in such straightward way as React. But you could use simple trick to accomplish this behaviour.

```js
// Svelte

const useEffect = subscribe => ({ subscribe });

$: effect = useEffect(() => {
  socket.on(`database-structure-changed-${connectionId}`, handleDatabaseStructureChanged);
  return () => {
    socket.off(`database-structure-changed-${connectionId}`, handleDatabaseStructureChanged);
  };
});

$: $effect;

```

How this trick works? You need to know about stores, especially custom stores ([tutorial](https://svelte.dev/tutorial/custom-stores)). 
Function useEffects creates custom stored with subscribing method. Store's subscribe method must return unsubscribe method, which is called, when store subscription is no more needed.

Last line ( $: $effect ) manages automatic store subscription ([tutorial](https://svelte.dev/tutorial/auto-subscriptions)). So it calls correctly socket.on and then socket.off, when value of connectionId is changed (or only assigned in Svelte), in the similar way, as it does React counterpart.
