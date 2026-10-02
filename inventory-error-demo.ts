
// Error 1: Assigning a string to a number variable
let productPrice: number = "Expensive";

// Error 2: Calling a function with fewer arguments
function displayProduct(name: string, price: number): void {
    console.log(name, price);
}

displayProduct("Laptop");