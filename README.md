# Svelte Unsafe

Manage errors through conditionals.

Use `ok()` to create a successful result

```js
import { ok } from 'sveltekit-unsafe'
/**
 * @returns {import("./types").Unsafe<string>}
 */
function greeting(){
  return ok("hello world")
}
```

Or `error()` to create errors

```js
/**
 * @param {string} name
 * @returns {import("./types").Unsafe<string>}
 */
function greet(name){
  if(name.length < 2){
    return error('Name must be at least 2 characters.')
  }
  return ok('hello world')
}
```

Then manage your errors through conditionals

```js
const greetAttempt = greet('A')
if(greetAttempt.error){
  console.error(greetAttempt.error)
} else {
  console.log(greetAttempt.value)
}
```
