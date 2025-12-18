
const students = [
    { name: 'Carlinhos', testGrade: 7},
    { name: 'Guto', testGrade: 10},
    { name: 'Leandra', testGrade: 9},
    { name: 'Luana', testGrade: 2},
    { name: 'Cleidê', testGrade: 6},
    { name: 'Dalva', testGrade: 4},
    { name: 'Chico Trabuco', testGrade: 2}
]

const approved = students.map((student) => {
    return {
        name: student.name,
        StudentSituation: student.testGrade >= 5 ? 'Passou' : 'Reprovou'
    }
})  

console.log(approved)