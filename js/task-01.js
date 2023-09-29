const arrOfItem = document.querySelectorAll('.item');

console.log(`Number of categories: ${arrOfItem.length}`);


arrOfItem.forEach((it, idx) => {
    const titles = it.firstElementChild.textContent;
    console.log(`Category: ${titles}`);
    const elements = it.lastElementChild.children.length;
    console.log(`Elements: ${elements}`)
});
