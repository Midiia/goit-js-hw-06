const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector(`#ingredients`);

ingredients.map((ingr) => {
  const item = document.createElement("li");
  item.textContent = ingr
  return list.append(item);
});



// const firstItem = document.createElement("li");
// firstItem.textContent = "Potatoes";
// const secondItem = document.createElement("li");
// secondItem.textContent = "Mushrooms";
// const thirdItem = document.createElement("li");
// thirdItem.textContent = "Garlic";
// const fourthItem = document.createElement("li");
// fourthItem.textContent = "Tomatos";
// const fifthItem = document.createElement("li");
// fifthItem.textContent = "Herbs";
// const sixItem = document.createElement("li");
// sixItem.textContent = "Condiments";


// list.append(firstItem, secondItem, thirdItem, fourthItem, fifthItem, sixItem);