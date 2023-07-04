const calcCategories = document.querySelectorAll('.item');
console.log('Number of categories: ', calcCategories.length);

calcCategories.forEach((elem, index) => {
    const name = elem.querySelector('h2');
    const item = elem.querySelectorAll('li');
    console.log('Category: ', name.textContent);
    console.log('Elements: ', item.length);
});