const countCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${countCategories.length}\n `);

const categoriesEL = document.querySelectorAll("#categories .item");
categoriesEL.forEach((categoryEL) => {
  const countAnimals = categoryEL.lastElementChild;
  const categoriesTitle = categoryEL.firstElementChild;
  console.log(`Category: ${categoriesTitle.textContent}`);
  console.log(`Elements: ${countAnimals.children.length}\n `);
});
