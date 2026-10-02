// =====================================
// 1. BASIC TYPES AND VARIABLES
// =====================================
let productName = "Laptop";
let price = 55000;
let inStock = true;
let tags = ["Electronics", "Computer", "Laptop"];
let productId = 101;
// Display inventory details
console.log("Product Name:", productName);
console.log("Price:", price);
console.log("In Stock:", inStock);
console.log("Tags:", tags);
console.log("Product ID:", productId);
// =====================================
// 2. FUNCTION TO PRINT PRODUCT INFO
// =====================================
function printProductInfo() {
    console.log(`Product ID: ${productId}, Price: ₹${price}, In Stock: ${inStock}, Tags: ${tags.join(", ")}`);
}
printProductInfo();
// =====================================
// 3. USING ANY AND REFACTORING
// =====================================
// Using any
let productInfo = "Laptop";
// Refactored to a specific type
let productInfoRefactored = "Laptop";
console.log(productInfoRefactored);
// =====================================
// 4. FUNCTIONS AND SCOPE
// =====================================
// Function with default parameter
function calculateDiscount(price, discountPercent = 10) {
    return price - (price * discountPercent / 100);
}
console.log(calculateDiscount(1000));
console.log(calculateDiscount(1000, 20));
// Applying bulk discount using map()
function applyBulkDiscount(prices, discountRate) {
    return prices.map((price) => {
        return price - (price * discountRate / 100);
    });
}
let prices = [1000, 2000, 3000];
let discountedPrices = applyBulkDiscount(prices, 10);
console.log("Discounted Prices:", discountedPrices);
// =====================================
// 5. BLOCK SCOPE AND FUNCTION SCOPE
// =====================================
function scopeExample() {
    // Function-scoped variable
    let functionVariable = "I am inside the function";
    for (let i = 0; i < 3; i++) {
        // Block-scoped variable
        let blockVariable = "I am inside the loop";
        console.log(blockVariable);
    }
    console.log(functionVariable);
    // Error: blockVariable cannot be accessed here
    // console.log(blockVariable);
}
scopeExample();
// 6.2 Create an array of Product objects
let products = [
    {
        id: 1,
        name: "Laptop",
        price: 55000,
        inStock: true,
        tags: ["Electronics", "Computer"]
    },
    {
        id: 2,
        name: "Mobile Phone",
        price: 25000,
        inStock: true,
        tags: ["Electronics", "Mobile"]
    },
    {
        id: 3,
        name: "Headphones",
        price: 2000,
        inStock: false,
        tags: ["Audio", "Accessories"]
    },
    {
        id: 4,
        name: "Keyboard",
        price: 1500,
        inStock: true
    }
];
// 6.3 Function to get available products
function getAvailableProducts(products) {
    return products.filter((product) => product.inStock);
}
// Calling the function
let availableProducts = getAvailableProducts(products);
console.log("Available Products:");
console.log(availableProducts);
// Apply discount to products
function applyDiscountToProducts(products) {
    const discountPercent = 10;
    return products.map((product) => ({
        ...product,
        price: product.price -
            (product.price * discountPercent / 100),
        discountPercent: discountPercent
    }));
}
// Calling the function
let discountedProducts = applyDiscountToProducts(products);
console.log("Discounted Products:");
console.log(discountedProducts);
export {};
