const chai = require('chai')
const expect = chai.expect
const { weekday, snippet, numProps, filterBetween } = require('./functions')

describe('Input', () => {
  it('should do a thing', () => {
    let date = new Date(2017, 7, 23)
    expect(weekday(date)).to.be.a('string')
  })
})




/* bookstore test

const expect = require ('chai').expect
const index = require ('../routes/index.js')
const db = require('../dbqueries')


describe('listBooks', () => {
  it( 'returns a Promise that resolves with all books in the database', () => {
    return db.listBooks()
      .then( (books) => {
        expect(books).to.be.a('array')
      })
  })
})

*/
