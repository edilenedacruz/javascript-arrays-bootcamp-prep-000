var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {

  return [element, ...array]
}

function addElementToEndOfArray(array, element) {
  return [...array, element]
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
<<<<<<< HEAD
  var array = array.slice(1)
=======
  array.slice(1)
>>>>>>> 3fec59b0dad2868b8590bdf1d028c4d16b4b5564
  return array
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
<<<<<<< HEAD
  var array = array.slice(0, array.length - 1)
=======
  array.slice(0, array.length - 1)
>>>>>>> 3fec59b0dad2868b8590bdf1d028c4d16b4b5564
  return array
}
