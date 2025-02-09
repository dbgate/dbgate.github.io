---
layout: post
title: Rewrite app from React to Svelte, what you can expect
categories: development
date:   2021-04-08 20:00:00
---

Recently I have rewritten a medium sized app in React (~250 React components) into Svelte. The result of this action is app, which is more efficient, with easier maintenance and much more readable code. But there were some problems, some situations, which are not streightforward to transform into Svelte code. This article describes some of these situations.

<!--more--> 

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
* useReducer - you must create Svelte version, using stores (this could be [very easy](https://github.com/dbgate/dbgate/blob/master/packages/web/src/utility/createReducer.ts))
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

When you want to execute some code on expression change, you could use Svelte [reactive statement](https://svelte.dev/tutorial/reactive-statements).

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

React useEffect can be used also to allocate some resources, which are dependend on property value. In following example, component is showing list of tables in SQL database. It is listening for database structure changes. When property connectionId is changed, it is neccessary to diconnect from old socket and connect to new socket.

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

## Why I miss React props in Svelte

Of course, there are also props in Svelte. They works in similar way as in React. But in React, the only external interface of component are props. In svelte, you have several mechanism, how to manage behaviour of your components:

* [props](https://svelte.dev/tutorial/declaring-props) - works as in React
* [events](https://svelte.dev/tutorial/component-events) - use special syntax, events are not part of $$props object containing all props
* [actions](https://svelte.dev/tutorial/actions) (syntax use:action) - mechanism, how to reuse logic bind to HTML elements
* [slots](https://svelte.dev/tutorial/slots) - purpose is the same as React property children, with some extensions

All of these mechanisms are very useful, but they don't have unified access like props in React. Below are discussed some problems, which I have came across.

### Forwarding events
If you create more complex component hiearchies, some components only forwards data from parent components. 

```js
// React - forwards all events, they are part of props

function Outer(props) {
  return <Inner {...props} />;
}
```

```js
// Svelte - only explicitly named events click and keydown are forwarded

 <Inner {...$$props} on:click on:keydown />;
}
```

In svelte, you cannot forward all events, but you can forward enumerated events. But if you need to forward all events, you can use callback functions (onClick instead of on:click), than onClick will be part of $$props.
### Implementing TabControl
In React is quite easy to implement TabControl component, which will be used as following:
```js
// React

<TabControl>
  <TabPage label='Page 1'>
    Page 1 content
  </TabPage>
  <TabPage label='Page 2'>
    Page 2 content
  </TabPage>
</TabControl>

```

Implementation will enumerate though children array, and could easily extract desired information (page title and content). This approach doesn't work in Svelte, it doesn't have anything like children. You could use svelte fragments, usage will look like following:

```js
// Svelte

<TabControl tabs={[
  { label: 'Page 1', slot: 1},
  { label: 'Page 2', slot: 2},
  ]}>
  <svelte:fragment slot='1'>
    Page 1 content
  </svelte:fragment>
  <svelte:fragment slot='2'>
    Page 2 content
  </svelte:fragment>
</TabControl>

```

Tabs are defined in array, tab layoout (children) are defined in fragments, which are passed as slots to TabControl component. It is not so intuitive as in React, but it works. Only one quite big pitfall, which you can see in [TabControl implementation](https://github.com/dbgate/dbgate/blob/master/packages/web/src/elements/TabControl.svelte):

```vue
// TabControl.svelte

<script>
  export let tabs = []
</script>

<div>
 {#each _.compact(tabs) as tab, index}
   <div class="container" class:isInline class:tabVisible={index == value}>
     {#if tab.slot == 0}<slot name="0" />
     {:else if tab.slot == 1}<slot name="1" />
     {:else if tab.slot == 2}<slot name="2" />
     {:else if tab.slot == 3}<slot name="3" />
     {:else if tab.slot == 4}<slot name="4" />
     {:else if tab.slot == 5}<slot name="5" />
     {:else if tab.slot == 6}<slot name="6" />
     {:else if tab.slot == 7}<slot name="7" />
     {/if}
   </div>
 {/each}
</div>
```

Slot names must be static strings, so you have to do something like this to make it work.

### Using dymamic component
Different approach could be to define component per tab page, but than you will have lot of small files, because every Svelte component must be defined in its own file.

```js
// Svelte

<TabControl tabs={[
  { label: 'Page 1', component: Tab1},
  { label: 'Page 2', component: Tab2},
  ]}/>

// Tab1.svelte
Page 1 content
// Tab2.svelte
Page 2 content

```

Implementation will use [svelte:component](https://svelte.dev/tutorial/svelte-component) to instantiate proper tab.

### Using context
This is the least obvious way. But in fact, you can achieve the same syntax as in React.

```js
// Svelte

<TabControl>
  <TabPage label='Page 1'>
    Page 1 content
  </TabPage>
  <TabPage label='Page 2'>
    Page 2 content
  </TabPage>
</TabControl>

```

In TabControl component must be defined some "collection point", eg. array of child tabs

```vue
<!-- TabControl.svelte -->
<script>
  const tabs = [];
  setContext('tabs', tabs);
</script>

```

And in tab page, we only register tab in parent array:

```vue
<!-- TabPage.svelte -->
<script>
  export let label;
  const tabs = getContext('tabs');
  tabs.push({ label });
</script>

```

Only pitfall of this method is that it doesn' preserve defined order of tab pages, if some of them are rendered conditionaly.

```js
// Svelte

<TabControl>
  {#if condition_will_be_true_later}
    <TabPage label='Page 1'>
      Page 1 content
    </TabPage>
  {/if}
  <TabPage label='Page 2'>
    Page 2 content
  </TabPage>
</TabControl>

```

This will be rendered with first Page 2 and than Page 1, which is probably not desired result.

## Attention when using bind:clientHeight and bind:clientWidth
Binding dimensions ([tutorial](https://svelte.dev/tutorial/dimensions)) is great feature. But be careful when using it. It is implemented with hidden iframe ( you can see it in this [REPL](https://svelte.dev/repl/08da5188783b4837b5663a288f673f68?version=3.37.0) ) . From my experiences, sometimes in more complicated situations it didn't work in FireFox.  Sometimes is safer to use ResizeObserver (see this [implemetation of action](https://github.com/dbgate/dbgate/blob/master/packages/web/src/utility/resizeObserver.ts))


## Error boundary
React has great concept of error boundaries ("try-catch" for components). It is not supported in functional components (in fact, ErrorBoundary was the only class component in my React application), but it was no problem to use this class component in functional React application.

```js
// React
<ErrorBoundary>
  {(null).read()}
</ErrorBoundary>
```

Without error boundary, when you have this code in React application, the whole application will fail. With error boundary, only interior of boundary will fail, other parts of application will render as usual.

Unfortunately, Svelte dosn't have anything like this. It has NPM package named [svelte-error-boundary](https://www.npmjs.com/package/svelte-error-boundary), but in fact, it solves only small part of problems and majority of errors in Svelte app still causes app crash.

Svelte has its own way of crash - Svelte components will stop to be reactive, so app looks like frozen.

Only think, you can do, is detect this situation and let user to reload page. 

```vue
<!-- Svelte -->

<script>
  let counter = 0;
  $: counterCopy = counter;
  const onunhandledrejection = async e => {
    console.log('Unhandler error, checking whether crashed', e);
    const oldCounter = counter;
    counter++;
    window.setTimeout(() => {
      if (counterCopy <= oldCounter) {
        console.log('CRASH DETECTED!!!');
        if (window.confirm('Sorry, App has crashed.\nReload page?')) {
          window.location.reload();
        }
      }
    }, 500);
  };
</script>

<svelte:window on:unhandledrejection={onunhandledrejection} />
```

For detecting, unhandledrejection event is used. This event could be raised in more situations, some of them doesn't cause Svelte crash. This is reason of using variables counter and counterCopy. If reactive statement doesn't work, it means, that the whole Svelte is crashed and the only way to recover is reload page.

You can see full [ErrorHandler](https://github.com/dbgate/dbgate/blob/master/packages/web/src/utility/ErrorHandler.svelte) component.

## Conclusion
Is spite of these problems, Svelte is great framework and I am very happy with the result of converting my app from React to Svelte. Some features, which are now implemented with Svelte, would be nearly impossible to do with React.

Of course, if you use lot of third party libraries, which are available only for React, it could be serious problem. But this was not my case, I had minimal dependencies with React, in this case also rewriting to Svelte could be quite easy and fast.
