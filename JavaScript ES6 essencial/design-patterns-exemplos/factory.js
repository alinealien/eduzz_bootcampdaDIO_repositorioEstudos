function Pessoa(customProperties) {
    return {
        name: 'Aline',
        lastName: 'Antunes',
        ...customProperties
    }
}

const p = Pessoa({name: 'Custom Name', age: 27});
console.log(p);