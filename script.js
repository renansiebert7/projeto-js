const list = document.querySelector('ul')
const buttonForEach = document.querySelector('.button-foreach')
const buttonMap = document.querySelector('.button-map')
const buttonReduce = document.querySelector('.button-reduce')
const buttonFilter = document.querySelector('.button-filter')
let myLi = ''

function formatCurrancy(value) {
    const newValue = value.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
    })
    return newValue
}

function showAll(array) {
    myLi = ''

    array.forEach(product => {
        myLi += `
        <li>
            <img src=${product.src}>
            <p>${product.name}</p>
            <p class='item-price'> ${formatCurrancy(product.price)}</p>
        </li>
        `
    });

    list.innerHTML = myLi
}


function descont() {
    const newPrices = menuOptions.map((element) => ({
        ...element,
        price: element.price * 0.9,

    }))

    showAll(newPrices)
}

function soma() {
    const finalValue = menuOptions.reduce((acc, value) => acc + value.price, 0)

    list.innerHTML = `
        <li>
            <p>O valor total dos itens é:  ${formatCurrancy(finalValue)}</p>
        </li>
        `
}

function filter() {
    const vegan = menuOptions.filter(product => product.vegan)
        
    showAll(vegan)    
}

buttonForEach.addEventListener('click', () => showAll(menuOptions))
buttonMap.addEventListener('click', descont)
buttonReduce.addEventListener('click', soma)
buttonFilter.addEventListener('click', filter)