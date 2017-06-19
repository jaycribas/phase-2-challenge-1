let date = new Date (2017, 5, 19)
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const weekday = date => days[date.getDay()]

const snippet = (string, maxlength) => (string.length > maxlength) ? string.substring(0, maxlength) + '...' : string

const numProps = obj => Object.keys(obj).length
