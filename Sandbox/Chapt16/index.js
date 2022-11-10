// //fetch

fetch('todos.json').then((response) => {
    console.log('Resolved', response)
    return response.json()
}).then(data => {
    console.log(data)
}).catch((err) => {
    console.log('Rejected', err)
})

//await

const getTodos = async () => { //Always returns a Promise

    const response = await fetch('todos.json')

    if (response.status !== 200) {
        throw new Error('Cannot Fetch Data')
    }

    const data = await response.json();

    return data
}

getTodos()
    .then(data => console.log('resolved', data))
    .catch(err => console.log('rejected', err.message));










