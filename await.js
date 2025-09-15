async function loadData() {
    console.log('one');
    console.log('two');

    // fetch('https://jsonplaceholder.typicode.com/users')

    // .then(res => res.json())
    // .then(data => console.log('data got'))
    
const res =await fetch('https://jsonplaceholder.typicode.com/users');
const data =await res.json();
console.log('data got await',data.slice(0,1))
    

    console.log('four');
    console.log('five');
}

loadData();