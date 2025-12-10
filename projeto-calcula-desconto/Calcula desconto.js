const cart = [10, 244, 99, 2, 20, 33, 250]
let FinalValueWithDiscount = 0


function calculateDiscount(price, discount) {
    const result = (price * discount) / 100
    return result
}


cart.forEach((value) => {
    
    if (value > 30) {
        const discount = calculateDiscount(value, 10)
        FinalValueWithDiscount += value - discount
    } else {
        FinalValueWithDiscount += value
    }
})


console.log(`Total da compra: R$ ${finalValue.toFixed(2)}, desconto aplicado! O valor final
    da sua compra é de: R$ ${FinalValueWithDiscount.toFixed(2)} Você economizou ${ValueTotal.toFixed(2)}`)