// Object prototype: Account
// - Anonymizes user objects on init
// - Object should not have access to function that anonymizes a user other than
// through init and reanonymize
// - Anonymize creates a 16 character sequence of letters and numbers
// 
// Methods:
// - init(email, password, firstName, lastName)
//
// - reanonymize
//
// - resetPassword(
//
// - firstName(password)
//
// - lastName(password)
//
// - email(password)
//
// - displayName

let Account = (function() {
  const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const data = [];
  const accounts = [];

  function createDisplayName() {
    let displayName = [];
    for (let i = 0; i < 16; i += 1) {
      let idx = Math.floor(Math.random() * CHARS.length);
      displayName.push(CHARS[idx]);
    }

    return displayName.join('');
  }

  function onValidPassword(account, password, action) {
    if (password === accountData(account).password) {
      return action();
    } else {
      return 'Invalid Password';
    }
  }
  
  function accountData(account) {
    const idx = accounts.indexOf(account);
    return data[idx];
  }

  return {
    init(email, password, firstName, lastName) {
      accounts.push(this);
      data.push({
        email,
        password,
        firstName,
        lastName,
      });

      this.displayName = createDisplayName();
      return this;
    },

    reanonymize() {
      this.displayName = createDisplayName();
    },

    resetPassword(currentPassword, newPassword) {
      return onValidPassword(this, currentPassword, () => {
        accountData(this).password = newPassword;
        return true;
      });
    },

    firstName(password) {
      return onValidPassword(this, password, () => {
        return accountData(this).firstName;
      });
    },

    lastName(password) {
      return onValidPassword(this, password, () => {
        return accountData(this).lastName;
      });
    },

    email(password) {
      return onValidPassword(this, password, () => {
        return accountData(this).email;
      });
    },
  };
}());


let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

let displayName = fooBar.displayName;
fooBar.reanonymize('abc');                         // returns true
console.log(displayName === fooBar.displayName);   // logs false

let bazQux = Object.create(Account).init('baz@qux.com', '123456', 'baz', 'qux');
console.log(bazQux.lastName('123456'));
console.log(bazQux.email('12345'));
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.email('abc'));                  // logs 'Invalid Password'
