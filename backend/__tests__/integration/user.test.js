const request = require('supertest')
const app = require('../../src/app')

describe('User', () => {
  it('should be able to create a new User', async () => {
    const response = await request(app)
      .post('/user')
      .send({
        email: 'caiohalcsik@teste.com',
        password: 'testeteste',
        name: 'caio felix',
        address: 'campinas são paulo'
      })
    expect(response.body).toHaveProperty('id')
  })
  it('should be able to get all User', async () => {
    const response = await request(app)
      .get('/user')
    expect(Array.isArray(response.body)).toBe(true)
  })
})
