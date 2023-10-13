const tableRows = 4

export const header = "Group Generator!"

export const exampleNames = [
                    'Georgina',
                    'Jiwoo',
                    'Rashi', 
                    'Layla',
                    'Samuel',
                    'Joe',
                    'Maisie',
                    'Rob',
                    'Louis',
                    'Emory',
                    'Stefan',
                    'Leigh',
                    'Stanley',
                    'Yulia',
                    'Dan',
                    'Joseph',
                    'Robbie',
                    'Emma',
                    'Andrii',
                    'Anna',
                    'Daniel',
                    'Hanna',
                    'Yusuf',
                    'Jessel',
                    'Jakub',
                    'Sergii',
                    'Matthew',
                    'Nick'
                    ]

export function generateTable(names) {


    if (!names.length) return {0:[]}

    const tabledNames = {}
    let row = 0 
    names.forEach((name, index) => {
        if (index > 0 && index % tableRows === 0) row++
        if (tabledNames[row]) tabledNames[row].push(name)
        else tabledNames[row] = [name]
    })

    return tabledNames
}


export function groupNames(names, groupNumber) {
    const namesCopy = [...names]
    const groupedNames = {}
    const groupSize = Math.floor(namesCopy.length / groupNumber)
    for (let i = 0; i < groupNumber; i++) {
        groupedNames[i] = []
        while (groupedNames[i].length < groupSize) {
            const randomIndex = Math.floor(Math.random() * namesCopy.length)
            const randomName = namesCopy[randomIndex]
            groupedNames[i].push(randomName)
            namesCopy.splice(randomIndex, 1)
        }
    }
    //remaining members

    if (namesCopy.length) namesCopy.forEach((name, index) => groupedNames[index].push(name))
    return groupedNames
}


export function checkName(name) {
    if (/^ +$/g.test(name)) return false
    
}
