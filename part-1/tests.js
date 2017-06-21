const expect = require('chai').expect
const { weekday, snippet, numProps, filterBetween } = require('./functions')

describe('Show a weekday', () => {
  it('uses expected/valid inputs', () => {
    let date = new Date(2017, 6, 23)
    expect(weekday(date)).to.deep.equal('Sun')
  })

  it('uses unexpected/invalid inputs', () => {
    let date = new Date(2017, 'June', 19)
    expect(weekday(date)).to.be.undefined
  })
})
