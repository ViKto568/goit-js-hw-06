const listWithId = document.querySelector("ul#categories");
const categories = listWithId.children;
console.log(`Number of categories: ${categories.length}`);
    for (const categoriesItem of categories) {
        const title = categoriesItem.querySelector("h2");
        const elements = categoriesItem.querySelectorAll("li");
            console.log(`Category: ${title.textContent}`);
            console.log(`Elements: ${elements.length}`);
}
    