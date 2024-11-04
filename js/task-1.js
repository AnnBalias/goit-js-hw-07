const categories = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${categories.length}`);

// Number of categories: 3

categories.forEach((item) => {
  console.log(`Category: ${item.querySelector("h2").textContent}`);
  console.log(`Elements: ${item.querySelectorAll("li").length}`);
});

// Category: Animals
// Elements: 4
// Category: Products
// Elements: 3
// Category: Technologies
// Elements: 5
