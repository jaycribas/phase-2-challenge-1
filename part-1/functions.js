const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const weekday = date => days[date.getDay()]

// substring() method returns a subset of a string between one index and another, or through the end of the string
const snippet = (string, maxlength) => {
  if (typeof string === 'string' && Number.isInteger(maxlength)) {
    return (string.length > maxlength) ? string.substring(0, maxlength) + '…' : string
  }
  return 'error'
}

// Object.keys() method returns an array of an object's properties
const numProps = obj => typeof obj === 'object' ? Object.keys(obj).length : 'error'

// filter() method creates a new array with all elements that pass the test implemented by the provided function
const filterBetween = (array, min, max) => {
  if (Array.isArray(array) && Number.isInteger(min) && Number.isInteger(max)) {
    return array.filter(num => num >= min && num <= max)
  }
  return 'error'
}

module.exports = { weekday, snippet, numProps, filterBetween }
