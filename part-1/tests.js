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

describe('Get a snippet from text', () => {
  it('uses expected/valid inputs', () => {
    expect(snippet('For the following exercises,', 10)).to.deep.equal('For the fo…')
  })

  it('uses unexpected/invalid inputs', () => {
    expect(snippet('What the what?', 'meow')).to.deep.equal('error')
  })
})
