const species = ['wolf', 'human', 'wasp', 'squirrel', 'weasel', 'dinosaur'];
const isMidnight = true;
const isFullmoon = true;

function isTransformable(species) {
  return species[0] === 'w';
}

function transform(species) {
  return `were${species}`;
}

for (let index = 0; index < species.length; index++) {
  const thisSpecies = species[index];
  var newSpecies = undefined;

  if (isMidnight && isFullmoon && isTransformable(thisSpecies)) {
    newSpecies = transform(thisSpecies);
  }

  if (newSpecies) {
    console.log(`Beware of the ${newSpecies}!`);
  }
}

// Each warning was printed twice because `var` is scoped to the function and
// not to the block. This means that when we declared `newSpecies` on `line 15`
// using `var`, the variable was actually created at the top level during the
// creation phase of the whole program. So, when we first set `newSpecies =
// transform(thisSpecies)` the value that we set persists through multiple
// iterations of the loop, even though `line 15` seems like it should have set
// it to `undefined` again.
// So, when we check for truthiness of `newSpecies` in `line 21`, it is always
// truthy since it always contains a non-empty string after the first iteration.
//
// Several ways of fixing this:
// * change the declaration to `let` which will scope the variable to the block
// and reset it `undefined` each time `line 15` is run.
// * change `line 15` to `var newSpecies = undefined;`. Even though the variable
// creation will get hoisted to the function scope, the initialization will
// remain at `line 15` as an assignment.

