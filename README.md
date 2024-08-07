## DOM Manipulation

### ```Adding Element to the page```
- Adding Element to the page have 2 different ways
    - `append()` - We can append strings and Nodes
    - `appendChild()` - Only we can append nodes not strings.
```js
  const body = document.body
  body.append("Hello World"); // We can append strings/ Nodes
```
```js
  body.appendChild(`Node`); // We can only append Nodes
```
- We have to create Nodes/ Elements using `createElement()`
```js
  body.append("Hellow", "World"); // We can append multiple strings/ Nodes
```

### ```Creating Element```
```js
  const body = document.body
  const div = document.createElement('div')
  body.append(div)
```

### ```Modifying Element Text```
- Using `innerText`
```js
  const body = document.body
  const div = document.createElement('div')
  div.innerText = 'Hello World'
  body.append(div)
```
- Using `textContent`
```js
  const body = document.body
  const div = document.createElement('div')
  div.textContent = "Hello World2"
  body.append(div)
```
- `textContent` - returns the concatenation of the textContent of every child node, excluding comments and processing instructions. Returns every element in the node.
- `innerText` - innerText is aware of styling and won't return the text of 'hidden' elements.
```html
  <span>Hello</span>
  <span style="display:none">Bye</span>
```
```js
  const div = document.querySelector('div')
  console.log(div.textContent)
  console.log(div.innerText)
```

### ```Modifying Element HTML```
```js
  const body = document.body
  const div = document.createElement('div')
  div.innerHTML = "<strong>Hello World</strong>"
  body.append(div)
```
or we can do like this
```js
  const body = document.body
  const div = document.createElement('div')
  const strong = document.createElement('strong')
  string.innerHTML = "Hello World"
  div.append(strong)
  body.append(div)
```

### ```Removing Elements```
```html
  <div>
    <span id = "hi">Hello</span>
    <span id = "bye">Bye</span>
  </div>
```
```js
  const body = document.body
  const div = document.querySelector('div')
  const spanHi = document.querySelector('#hi')
  const spanBye = document.querySelector('#bye')
  
  spanBye.remove() // Completely removes from DOM
  div.removeChild(spanHi)
```

### ```Modifying Element Attributes```
```html
  <span id = "span1" title = "hi">Hello</span>
```
```js
  const spanHi = document.querySelector('#span1')
  console.log(spanHi.getAttribute("title")) // hi
  console.log(spanHi.setAttribute("title", "Greetings"))
```
(or)
```js
  spanHi.title = 'Greet'
  console.log(spanHi.getAttribute('title'))
  spanHi.removeAttribute('title')
```

### ```Modifying Data Attribute```
```html
  <span data-test = "this is a test data" id ="hi">Hello</span>
```
```js
  const spanHi = document.querySelector('#hi')
  console.log(spanHi.dataset)
```
console
```console
  > DOMStringMap{test:"this is a test data"}
```
```html
  <span data-loger-name = "admin" data-test = "this is a test data" id = "hi">Hello</span>
```
```js
  const spanHi = document.querySelector('#hi')
  console.log(spanHi.dataset)
```
console
```console
  > DOMStringMap{logerName:"admin",test:"this is a test data"}
```

> [!NOTE]
> `loger-name` can be converted into camelcase `logerName`.

```js
  console.log(spanHi.dataset.test)
```
console
```console
  > this is a test data
```
```js
  spanHi.dataset.newName = "hi"
```

> [!NOTE]
> dataset with name `data-new-name` attribute will be created at DOM.

### ```Modifying Element Classes```
```html
  <span id = "hi" class = "hi1 hi2">Hello</span>
```
```js
  const spanHi = document.querySelector('#hi')
  console.log(spanHi.classList)
```
console
```console
  DOMTokenList{0:"hi1",1:"hi2"}
```
```js
  spanHi.classList.add("Hello") // can add a class `Hello` to the span element
```
```js
  spanHi.classList.remove("hi1") // removes class named `hi1` from the span element
```
```js
  spanHi.classList.toggle("hi3") 
  // adds the class to the element if it is not a class of the element already (or)
  // removes the class form the element if it is a class of that element
```
```js
  spanHi.classList.toggle("hi3", false) 
  // set to `false` then token will only be removed, but not added.
  // if set to `true` then token will only be added, but not removed.
```

### ```Modifying Element Style```
```js
  spanHi.style.color = 'red'
  spanHi.style.backgroundColor = "blue"
```