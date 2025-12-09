const users = [
            { name: 'Guto', age: 38, number: '(19) 94343-4343' },
            { name: 'Carlinhos', age: 52, number: '(12) 95200-2050' },
            { name: 'Cleidê', age: 34, number: '(13) 94444-4877' },
            { name: 'Dalva', age: 40, number: '(19) 96531-5418' },
        ]

users.forEach(function(item) {
    console.log(`Nome:${item.name}, Idade:${item.age}, Contato:${item.number}`)
});