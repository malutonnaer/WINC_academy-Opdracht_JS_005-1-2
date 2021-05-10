let person = {
    name: 'Malu',
    age: 35
};
// console.log(person);
// console.log(person.name);
// console.log(person['age']);

let evaluations = [7, 10, 9];
// console.log(evaluations);

let favouriteColors = ['green', 'blue', 'violet'];
// console.log(favouriteColors)
// console.log(favouriteColors.length)
// console.log(favouriteColors[0]);
// console.log(favouriteColors.length-1);
favouriteColors.push("aquamarine");
// console.log(favouriteColors)
favouriteColors.push(10);
favouriteColors.push({ greeting: "Ik ben jouw favo kleur" });
// console.log(favouriteColors);
// console.log(favouriteColors.length -1 );
console.log(favouriteColors[favouriteColors.length -1 ].greeting );
