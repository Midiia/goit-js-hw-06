const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector(`#ingredients`);

const firstItem = document.createElement("li");
firstItem.textContent = "Potatoes";
const secondItem = document.createElement("li");
secondItem.textContent = "Mushrooms";
const thirdItem = document.createElement("li");
thirdItem.textContent = "Garlic";
const fourthItem = document.createElement("li");
fourthItem.textContent = "Tomatos";
const fifthItem = document.createElement("li");
fifthItem.textContent = "Herbs";
const sixItem = document.createElement("li");
sixItem.textContent = "Condiments";


list.append(firstItem, secondItem, thirdItem, fourthItem, fifthItem, sixItem);