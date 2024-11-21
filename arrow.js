// 1. Multiline string
const multilineString = `This is a multiline string.`;

// 2. Function for HTML generation
const createCard = (title, content) => `
    <div class="card">
        <h2>${title}</h2>
        <p>${content}</p>
    </div>
`;

// 3. Convert regular function to arrow function
const add = (a, b) => a + b;

// 4. Use arrow functions with array methods
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num * num);

// Output
console.log(multilineString);
console.log(createCard("My Card", "This is some content."));
console.log(add(5, 3));
console.log(squaredNumbers); 
