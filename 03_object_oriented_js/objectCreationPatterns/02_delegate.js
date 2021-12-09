function delegate(obj, func, ...args) {
  return function() {
    return obj[func].apply(obj, args);
  };
}

const foo = {
  name: 'test',
  bar(greeting) {
    console.log(`${greeting} ${this.name}`);
  },
};

const baz = {
  qux: delegate(foo, 'bar', 'hello'),
};

console.log(baz.qux());   // logs 'hello test';

foo.bar = () => { console.log('changed'); };

console.log(baz.qux());          // logs 'changed'
