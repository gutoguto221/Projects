const list = document.querySelectorAll('ul')
const buttonShowAll = document.querySelector('.show-all')
let myLi = ''

function showAll() {
    menuOptions.forEach((product) => {
        myLi += `
            <li>
                <img src="${product.image}" alt="${product.title}">
                <p>${product.title}</p>
                <p class="item-price">R$ ${product.price}</p>
            </li>
        `
    })
    list.innerHTML = myLi
}
buttonShowAll.addEventListener('click', showAll)