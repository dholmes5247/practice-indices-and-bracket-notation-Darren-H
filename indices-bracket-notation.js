// Creating the array of movies Task 1
let library = [
    ['Alive', 'Unbroken', 'Roadhouse'],
    ['Footloose', 'The Outsiders', 'The Breakfast Club'],
    ['Savanna Smiles', 'The Goonies', 'The Sandlot'],
    ];
// Task 2 access and log all the elements in the library array using bracket notation
console.log(library[0][0]); // Alive
console.log(library[0][1]); // Unbroken
console.log(library[0][2]); // Roadhouse
console.log(library[1][0]); // Footloose
console.log(library[1][1]); // The Outsiders    
console.log(library[1][2]); // The Breakfast Club
console.log(library[2][0]); // Savanna Smiles
console.log(library[2][1]); // The Goonies
console.log(library[2][2]); // The Sandlot
 // logs all the elements in the created movies array

 /* Task 3 Access and log all the elements in the array using bracket notation with 
variables as indices. Use the variables row and item. */
let row, item;
row = 0; item = 0;
console.log(library[row][item]); // logs Alive
row = 0; item = 1;
console.log(library[row][item]); // logs Unbroken
row = 0; item = 2;
console.log(library[row][item]); // logs Roadhouse
row = 1; item = 0;
console.log(library[row][item]); // logs Footloose
row = 1; item = 1;
console.log(library[row][item]); // logs The Outsiders
row = 1; item = 2;
console.log(library[row][item]); // logs The Breakfast Club
row = 2; item = 0;
console.log(library[row][item]); // logs Savanna Smiles
row = 2; item = 1;
console.log(library[row][item]); // logs The Goonies
row = 2; item = 2;
console.log(library[row][item]); // logs The Sandlot

// Task 4 write a loop that prints all items on the second shelf

for (let i = 0; i < library[1].length; i++){
    console.log(library[1][i])
}  // prints the movies on the second shelf}



