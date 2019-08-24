import { createObjectFromFields } from '../helpers'

describe('check helpers', () => {
  const testObject = {
    event: {
      home: {
        score: null,
        participant: {
          name: null
        }
      }
    }
  }
  const fields = ['event.home.participant.name', 'event.home.score']

  it(' createObjectFromFields should return correct object form ', async () => {
    expect(createObjectFromFields(fields)).toEqual(testObject)
  })
}
)
