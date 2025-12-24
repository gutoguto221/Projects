const companies = [
    { name: 'Capcom', marketValue: 50, CEO: 'Keiji Inafune', foundedOn: 2002 },
    { name: 'SNK', marketValue: 30, CEO: 'Shinkiro Hattori', foundedOn: 1995 },
    { name: 'Bandai Namco', marketValue: 40, CEO: 'Tetsuro Watanabe', foundedOn: 2005 },
    { name: 'Konami', marketValue: 56, CEO: 'Hideo Kojima', foundedOn: 1980 },
    { name: 'Taito Company', marketValue: 20, CEO: 'Takashi Tezuka', foundedOn: 1968 },
    { name: 'Nintendo', marketValue: 80, CEO: 'Shigeru Miyamoto', foundedOn: 1889 },
];

const marketValueOldCompanies = companies.map((company) => {
    company.marketValue = company.marketValue + (company.marketValue / 10)

    return company
})
.filter((company) => company.foundedOn < 1990)
.reduce((acc,company) => acc + company.marketValue, 0)

console.log(marketValueOldCompanies)