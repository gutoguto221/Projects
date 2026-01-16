const number = [1, 2, 3, 4, 5, 6, 7]

const double = number.map((item) => item * 2)

const list = [

    { name: 'Guto', vip: true },
    { name: 'Carlinhos', vip: true },
    { name: 'Cleidê', vip: false },
    { name: 'Dalva', vip: false },
    { name: 'Leandra', vip: true },
    { name: 'Luana', vip: false },
    { name: 'Chico Trabuco', vip: true },

]

const newList = list.map(user => {
    const newUser = {
        name: user.name,
        braceletColor: user.vip ? 'black' : 'green'
    }

    return newUser
})