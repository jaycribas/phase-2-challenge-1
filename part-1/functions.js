let date = new Date (2017, 5, 19)
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const weekday = date => days[date.getDay()]
