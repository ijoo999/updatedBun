import { compact, camelcase, isPlainObject } from 'utils-modern';

console.log(compact([null, 0, 'a', '', 'b', undefined])); // ['a', 'b']
console.log(camelcase('hello world example'));            // 'helloWorldExample'
console.log(isPlainObject({}));                           // true
