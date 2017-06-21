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
const numProps = obj => Object.keys(obj).length

// filter() method creates a new array with all elements that pass the test implemented by the provided function
const filterBetween = (array, min, max) => array.filter(num => num >= min && num <= max)

module.exports = { weekday, snippet, numProps, filterBetween }
