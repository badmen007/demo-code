const arr = [
  { id: 1, name: 'apple' },
  { id: 2, name: 'banana' },
  { id: 3, name: 'orange' }
];

const index = arr.findIndex(item => item.id === 2)

if (index) {
  arr.splice(index, 1, { id: 2, name: 'pear'})
}

console.log(arr)
