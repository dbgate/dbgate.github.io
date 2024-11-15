---
layout: docs
title: API documentation
order: 21
docs_left: true
hide_hero: true
---

# API Documentation

## Functions

<dl>
<dt><a href="#copyStream">copyStream(input, output, options)</a> ⇒ <code>Promise</code></dt>
<dd><p>Copies reader to writer. Used for import, export tables and transfer data between tables</p>
</dd>
<dt><a href="#jsonLinesReader">jsonLinesReader(options)</a> ⇒ <code><a href="#readerType">Promise.&lt;readerType&gt;</a></code></dt>
<dd><p>Reader function, which reads JSNOL file or URL. JSONL format - text file, every line is JSON encoded row.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#readerType">readerType</a> : <code>Object</code></dt>
<dd><p>Reader (input) object for copyStream function</p>
</dd>
<dt><a href="#writerType">writerType</a> : <code>Object</code></dt>
<dd><p>Wrtiter (output) object for copyStream function</p>
</dd>
</dl>

<a name="copyStream"></a>

## copyStream(input, output, options) ⇒ <code>Promise</code>
Copies reader to writer. Used for import, export tables and transfer data between tables

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| input | [<code>readerType</code>](#readerType) | reader object |
| output | [<code>writerType</code>](#writerType) | writer object |
| options | <code>object</code> | options |

<a name="jsonLinesReader"></a>

## jsonLinesReader(options) ⇒ [<code>Promise.&lt;readerType&gt;</code>](#readerType)
Reader function, which reads JSNOL file or URL. JSONL format - text file, every line is JSON encoded row.

**Kind**: global function  
**Returns**: [<code>Promise.&lt;readerType&gt;</code>](#readerType) - - reader object  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> |  |
| options.fileName | <code>string</code> | file name or URL |
| options.encoding | <code>string</code> | encoding of the file |
| options.limitRows | <code>number</code> | maximum number of rows to read |

<a name="readerType"></a>

## readerType : <code>Object</code>
Reader (input) object for copyStream function

**Kind**: global typedef  
<a name="writerType"></a>

## writerType : <code>Object</code>
Wrtiter (output) object for copyStream function

**Kind**: global typedef  
