const franchise = {
  name: 'How to Train Your Dragon',
  allMovies() {
    let that = this;
    return [1, 2, 3].map(function(number) {
      return `${that.name} ${number}`;
    });
  },
};

console.log(franchise.allMovies());

franchise.allMovies = function() {
  return [1, 2, 3].map(number => {
    return `${this.name} ${number}`;
  });
};

console.log(franchise.allMovies());

franchise.allMovies = function() {
  return [1, 2, 3].map(function(number) {
    return `${this.name} ${number}`;
  }.bind(this));
};

console.log(franchise.allMovies());

franchise.allMovies = function() {
  return [1, 2, 3].map(function(number) {
    return `${this.name} ${number}`;
  }, this);
};

console.log(franchise.allMovies());
