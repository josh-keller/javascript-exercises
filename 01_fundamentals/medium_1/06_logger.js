function debugIt() {
  const status = 'debugging';
  function logger() {
    console.log(status);
  }

  logger();
}

debugIt();

// Here we have an example of a closure and lexical scope. The code consists of
// two main parts: a function definition on `lines 1-8` and an invocation of
// that function on `line 10`. When the function `debugIt` is invoked, we first
// have a constant declaration on `line 2`, setting the value to `'debugging'`.
// We then have another, nested, function declaration.
//
// Within the declaration of the `logger()` function, we log `status` to the
// console. Here `status` is referring to the local constant created on `line
// 2`. `status` is in scope because functions and blocks have access to
// variables from their containing scope(s). This is because a closure is
// created. When a function is defined it has access to the variable in the
// lexical environment in which it is defined.
//
// So, on `line 7`, when we then invoke the `logger()` function that we just
// created, we see the output `debugging` since that is the value assigned to
// the `status` constant.
