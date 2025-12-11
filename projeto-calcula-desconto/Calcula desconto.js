const cart = [10, 244, 99, 2, 20, 33, 250]

let finalValue = 0
let finalValueWithDiscount = 0
let totalDiscount = 0

function calculateDiscount(price, percent) {
    return (price * percent) / 100
}

cart.forEach((value) => {

    if (value > 30) {
        const discountValue = calculateDiscount(value, 10)
        totalDiscount += discountValue
        finalValueWithDiscount += value - discountValue
        finalValue += value
    } else {
        finalValue += value
        finalValueWithDiscount += value
    }
})

console.log(`Total da compra: R$ ${finalValue.toFixed(2)}`)
console.log(`Total com desconto: R$ ${finalValueWithDiscount.toFixed(2)}`)
console.log(`Você economizou: R$ ${totalDiscount.toFixed(2)}`)