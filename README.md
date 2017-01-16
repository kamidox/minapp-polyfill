## 微信小程序的兼容性问题

除了微信本身的 Bug 之外，微信小程序的兼容性问题主要体现在不同平台的 JavaScript 引擎对标准 API 的支持程度不同造成的。比如 `Array.find` 在 Android 7.0 上是支持的，但在 Android 6.0.1 上却不支持。如果你的小程序里使用了这个 API 就引发兼容性问题。

## 不同平台 API 支持情况列表

下面是几个典型的平台的 API 支持情况列表：

Component.apiName                   | iOS_10.2(iPhone7) | Android_6.0.1(mi4) | Android_7.0(mate8) | devtool_0.12.130400(mac)
-------------------------------------|------------|------------|------------|------------
Array.toString                      | YES        | YES        | YES        | YES       
Array.values                        | YES        | N/A        | YES        | N/A       
Array.toLocaleString                | YES        | YES        | YES        | YES       
Array.concat                        | YES        | YES        | YES        | YES       
Array.fill                          | YES        | N/A        | YES        | YES       
Array.join                          | YES        | YES        | YES        | YES       
Array.pop                           | YES        | YES        | YES        | YES       
Array.push                          | YES        | YES        | YES        | YES       
Array.reverse                       | YES        | YES        | YES        | YES       
Array.shift                         | YES        | YES        | YES        | YES       
Array.slice                         | YES        | YES        | YES        | YES       
Array.sort                          | YES        | YES        | YES        | YES       
Array.splice                        | YES        | YES        | YES        | YES       
Array.unshift                       | YES        | YES        | YES        | YES       
Array.every                         | YES        | YES        | YES        | YES       
Array.forEach                       | YES        | YES        | YES        | YES       
Array.some                          | YES        | YES        | YES        | YES       
Array.indexOf                       | YES        | YES        | YES        | YES       
Array.lastIndexOf                   | YES        | YES        | YES        | YES       
Array.filter                        | YES        | YES        | YES        | YES       
Array.reduce                        | YES        | YES        | YES        | YES       
Array.reduceRight                   | YES        | YES        | YES        | YES       
Array.map                           | YES        | YES        | YES        | YES       
Array.entries                       | YES        | N/A        | YES        | YES       
Array.keys                          | YES        | N/A        | YES        | YES       
Array.find                          | YES        | N/A        | YES        | YES       
Array.findIndex                     | YES        | N/A        | YES        | YES       
Array.includes                      | YES        | N/A        | N/A        | YES       
Array.copyWithin                    | YES        | N/A        | YES        | YES       
Array.constructor                   | YES        | YES        | YES        | YES       
Buffer                              | N/A        | N/A        | N/A        | N/A       
DataView.getInt8                    | YES        | YES        | YES        | YES       
DataView.getUint8                   | YES        | YES        | YES        | YES       
DataView.getInt16                   | YES        | YES        | YES        | YES       
DataView.getUint16                  | YES        | YES        | YES        | YES       
DataView.getInt32                   | YES        | YES        | YES        | YES       
DataView.getUint32                  | YES        | YES        | YES        | YES       
DataView.getFloat32                 | YES        | YES        | YES        | YES       
DataView.getFloat64                 | YES        | YES        | YES        | YES       
DataView.setInt8                    | YES        | YES        | YES        | YES       
DataView.setUint8                   | YES        | YES        | YES        | YES       
DataView.setInt16                   | YES        | YES        | YES        | YES       
DataView.setUint16                  | YES        | YES        | YES        | YES       
DataView.setInt32                   | YES        | YES        | YES        | YES       
DataView.setUint32                  | YES        | YES        | YES        | YES       
DataView.setFloat32                 | YES        | YES        | YES        | YES       
DataView.setFloat64                 | YES        | YES        | YES        | YES       
DataView.constructor                | YES        | YES        | YES        | YES       
Date.toString                       | YES        | YES        | YES        | YES       
Date.toISOString                    | YES        | YES        | YES        | YES       
Date.toDateString                   | YES        | YES        | YES        | YES       
Date.toTimeString                   | YES        | YES        | YES        | YES       
Date.toLocaleString                 | YES        | YES        | YES        | YES       
Date.toLocaleDateString             | YES        | YES        | YES        | YES       
Date.toLocaleTimeString             | YES        | YES        | YES        | YES       
Date.valueOf                        | YES        | YES        | YES        | YES       
Date.getTime                        | YES        | YES        | YES        | YES       
Date.getFullYear                    | YES        | YES        | YES        | YES       
Date.getUTCFullYear                 | YES        | YES        | YES        | YES       
Date.getMonth                       | YES        | YES        | YES        | YES       
Date.getUTCMonth                    | YES        | YES        | YES        | YES       
Date.getDate                        | YES        | YES        | YES        | YES       
Date.getUTCDate                     | YES        | YES        | YES        | YES       
Date.getDay                         | YES        | YES        | YES        | YES       
Date.getUTCDay                      | YES        | YES        | YES        | YES       
Date.getHours                       | YES        | YES        | YES        | YES       
Date.getUTCHours                    | YES        | YES        | YES        | YES       
Date.getMinutes                     | YES        | YES        | YES        | YES       
Date.getUTCMinutes                  | YES        | YES        | YES        | YES       
Date.getSeconds                     | YES        | YES        | YES        | YES       
Date.getUTCSeconds                  | YES        | YES        | YES        | YES       
Date.getMilliseconds                | YES        | YES        | YES        | YES       
Date.getUTCMilliseconds             | YES        | YES        | YES        | YES       
Date.getTimezoneOffset              | YES        | YES        | YES        | YES       
Date.setTime                        | YES        | YES        | YES        | YES       
Date.setMilliseconds                | YES        | YES        | YES        | YES       
Date.setUTCMilliseconds             | YES        | YES        | YES        | YES       
Date.setSeconds                     | YES        | YES        | YES        | YES       
Date.setUTCSeconds                  | YES        | YES        | YES        | YES       
Date.setMinutes                     | YES        | YES        | YES        | YES       
Date.setUTCMinutes                  | YES        | YES        | YES        | YES       
Date.setHours                       | YES        | YES        | YES        | YES       
Date.setUTCHours                    | YES        | YES        | YES        | YES       
Date.setDate                        | YES        | YES        | YES        | YES       
Date.setUTCDate                     | YES        | YES        | YES        | YES       
Date.setMonth                       | YES        | YES        | YES        | YES       
Date.setUTCMonth                    | YES        | YES        | YES        | YES       
Date.setFullYear                    | YES        | YES        | YES        | YES       
Date.setUTCFullYear                 | YES        | YES        | YES        | YES       
Date.setYear                        | YES        | YES        | YES        | YES       
Date.getYear                        | YES        | YES        | YES        | YES       
Date.toJSON                         | YES        | YES        | YES        | YES       
Date.toUTCString                    | YES        | YES        | YES        | YES       
Date.toGMTString                    | YES        | YES        | YES        | YES       
Date.constructor                    | YES        | YES        | YES        | YES       
Error.toString                      | YES        | YES        | YES        | YES       
Error.constructor                   | YES        | YES        | YES        | YES       
Float32Array.constructor            | YES        | YES        | YES        | YES       
Float64Array.constructor            | YES        | YES        | YES        | YES       
Function.constructor                | YES        | YES        | YES        | YES       
Int16Array.constructor              | YES        | YES        | YES        | YES       
Int32Array.constructor              | YES        | YES        | YES        | YES       
Int8Array.constructor               | YES        | YES        | YES        | YES       
Map.forEach                         | YES        | N/A        | YES        | YES       
Map.clear                           | YES        | N/A        | YES        | YES       
Map.delete                          | YES        | N/A        | YES        | YES       
Map.get                             | YES        | N/A        | YES        | YES       
Map.has                             | YES        | N/A        | YES        | YES       
Map.set                             | YES        | N/A        | YES        | YES       
Map.keys                            | YES        | N/A        | YES        | YES       
Map.values                          | YES        | N/A        | YES        | YES       
Map.entries                         | YES        | N/A        | YES        | YES       
Map.constructor                     | YES        | N/A        | YES        | YES       
Math.abs                            | YES        | YES        | YES        | YES       
Math.acos                           | YES        | YES        | YES        | YES       
Math.asin                           | YES        | YES        | YES        | YES       
Math.atan                           | YES        | YES        | YES        | YES       
Math.acosh                          | YES        | N/A        | YES        | YES       
Math.asinh                          | YES        | N/A        | YES        | YES       
Math.atanh                          | YES        | N/A        | YES        | YES       
Math.atan2                          | YES        | YES        | YES        | YES       
Math.cbrt                           | YES        | N/A        | YES        | YES       
Math.ceil                           | YES        | YES        | YES        | YES       
Math.clz32                          | YES        | N/A        | YES        | YES       
Math.cos                            | YES        | YES        | YES        | YES       
Math.cosh                           | YES        | N/A        | YES        | YES       
Math.exp                            | YES        | YES        | YES        | YES       
Math.expm1                          | YES        | N/A        | YES        | YES       
Math.floor                          | YES        | YES        | YES        | YES       
Math.fround                         | YES        | N/A        | YES        | YES       
Math.hypot                          | YES        | N/A        | YES        | YES       
Math.log                            | YES        | YES        | YES        | YES       
Math.log10                          | YES        | N/A        | YES        | YES       
Math.log1p                          | YES        | N/A        | YES        | YES       
Math.log2                           | YES        | N/A        | YES        | YES       
Math.max                            | YES        | YES        | YES        | YES       
Math.min                            | YES        | YES        | YES        | YES       
Math.pow                            | YES        | YES        | YES        | YES       
Math.random                         | YES        | YES        | YES        | YES       
Math.round                          | YES        | YES        | YES        | YES       
Math.sign                           | YES        | N/A        | YES        | YES       
Math.sin                            | YES        | YES        | YES        | YES       
Math.sinh                           | YES        | N/A        | YES        | YES       
Math.sqrt                           | YES        | YES        | YES        | YES       
Math.tan                            | YES        | YES        | YES        | YES       
Math.tanh                           | YES        | N/A        | YES        | YES       
Math.trunc                          | YES        | N/A        | YES        | YES       
Math.imul                           | YES        | YES        | YES        | YES       
Object.toString                     | YES        | YES        | YES        | YES       
Object.toLocaleString               | YES        | YES        | YES        | YES       
Object.valueOf                      | YES        | YES        | YES        | YES       
Object.hasOwnProperty               | YES        | YES        | YES        | YES       
Object.propertyIsEnumerable         | YES        | YES        | YES        | YES       
Object.isPrototypeOf                | YES        | YES        | YES        | YES       
Object.__defineGetter__             | YES        | YES        | YES        | YES       
Object.__defineSetter__             | YES        | YES        | YES        | YES       
Object.__lookupGetter__             | YES        | YES        | YES        | YES       
Object.__lookupSetter__             | YES        | YES        | YES        | YES       
Object.constructor                  | YES        | YES        | YES        | YES       
Promise.then                        | YES        | YES        | YES        | YES       
Promise.catch                       | YES        | YES        | YES        | YES       
Promise.constructor                 | YES        | YES        | YES        | YES       
RegExp.compile                      | YES        | YES        | YES        | YES       
RegExp.exec                         | YES        | YES        | YES        | YES       
RegExp.toString                     | YES        | YES        | YES        | YES       
RegExp.test                         | YES        | YES        | YES        | YES       
RegExp.constructor                  | YES        | YES        | YES        | YES       
Set.forEach                         | YES        | N/A        | YES        | YES       
Set.add                             | YES        | N/A        | YES        | YES       
Set.clear                           | YES        | N/A        | YES        | YES       
Set.delete                          | YES        | N/A        | YES        | YES       
Set.has                             | YES        | N/A        | YES        | YES       
Set.entries                         | YES        | N/A        | YES        | YES       
Set.values                          | YES        | N/A        | YES        | YES       
Set.keys                            | YES        | N/A        | YES        | YES       
Set.constructor                     | YES        | N/A        | YES        | YES       
String.match                        | YES        | YES        | YES        | YES       
String.padStart                     | YES        | N/A        | N/A        | N/A       
String.padEnd                       | YES        | N/A        | N/A        | N/A       
String.repeat                       | YES        | N/A        | YES        | YES       
String.replace                      | YES        | YES        | YES        | YES       
String.search                       | YES        | YES        | YES        | YES       
String.split                        | YES        | YES        | YES        | YES       
String.toString                     | YES        | YES        | YES        | YES       
String.valueOf                      | YES        | YES        | YES        | YES       
String.charAt                       | YES        | YES        | YES        | YES       
String.charCodeAt                   | YES        | YES        | YES        | YES       
String.codePointAt                  | YES        | N/A        | YES        | YES       
String.concat                       | YES        | YES        | YES        | YES       
String.indexOf                      | YES        | YES        | YES        | YES       
String.lastIndexOf                  | YES        | YES        | YES        | YES       
String.slice                        | YES        | YES        | YES        | YES       
String.substr                       | YES        | YES        | YES        | YES       
String.substring                    | YES        | YES        | YES        | YES       
String.toLowerCase                  | YES        | YES        | YES        | YES       
String.toUpperCase                  | YES        | YES        | YES        | YES       
String.localeCompare                | YES        | YES        | YES        | YES       
String.toLocaleLowerCase            | YES        | YES        | YES        | YES       
String.toLocaleUpperCase            | YES        | YES        | YES        | YES       
String.big                          | YES        | YES        | YES        | YES       
String.small                        | YES        | YES        | YES        | YES       
String.blink                        | YES        | YES        | YES        | YES       
String.bold                         | YES        | YES        | YES        | YES       
String.fixed                        | YES        | YES        | YES        | YES       
String.italics                      | YES        | YES        | YES        | YES       
String.strike                       | YES        | YES        | YES        | YES       
String.sub                          | YES        | YES        | YES        | YES       
String.sup                          | YES        | YES        | YES        | YES       
String.fontcolor                    | YES        | YES        | YES        | YES       
String.fontsize                     | YES        | YES        | YES        | YES       
String.anchor                       | YES        | YES        | YES        | YES       
String.link                         | YES        | YES        | YES        | YES       
String.trim                         | YES        | YES        | YES        | YES       
String.trimLeft                     | YES        | YES        | YES        | YES       
String.trimRight                    | YES        | YES        | YES        | YES       
String.startsWith                   | YES        | N/A        | YES        | YES       
String.endsWith                     | YES        | N/A        | YES        | YES       
String.includes                     | YES        | N/A        | YES        | YES       
String.normalize                    | YES        | YES        | YES        | YES       
String.constructor                  | YES        | YES        | YES        | YES       
Symbol.toString                     | YES        | N/A        | YES        | YES       
Symbol.valueOf                      | YES        | N/A        | N/A        | YES       
Symbol.constructor                  | YES        | N/A        | YES        | YES       
TypeError.toString                  | YES        | N/A        | N/A        | YES       
TypeError.constructor               | YES        | YES        | YES        | YES       
Uint16Array.constructor             | YES        | YES        | YES        | YES       
Uint32Array.constructor             | YES        | YES        | YES        | YES       
Uint8Array.constructor              | YES        | YES        | YES        | YES       
Uint8ClampedArray.constructor       | YES        | YES        | YES        | YES       
WeakMap.delete                      | YES        | YES        | YES        | YES       
WeakMap.get                         | YES        | YES        | YES        | YES       
WeakMap.has                         | YES        | YES        | YES        | YES       
WeakMap.set                         | YES        | YES        | YES        | YES       
WeakMap.constructor                 | YES        | YES        | YES        | YES       

目前平台数据还不全，比如 Android 5.0 就没有相应的数据。有使用特定平台手机的同学想贡献数据请发信给我，我告诉你怎么配合我获取 API 支持情况的数据。

## 解决方案

在特定平台上，对不支持的 API 使用 polyfill 来实现。

典型地，比如 `Array.fill()` 函数可以使用 [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill) 上的 polyfill 来实现。

作为一次性的解决方案，你可以把 `polyfill.js` 下载到本机，放在微信小程序指定目录下。在需要使用标准 API 的 JavaScript 文件头部插入如下代码：

```Javascript
import 'path/to/polyfill.js'
```

这样就会自动给不支持特定 API 的平台打上补丁。

## TODO

* 添加所有不支持 API 的 polyfill 实现
* 完善其他平台的 API 支持情况
* 编写单元测试代码

欢迎砸 PR 过来。

## LICENSE

MIT
