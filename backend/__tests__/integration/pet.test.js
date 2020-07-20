const request = require('supertest')
const app = require('../../src/app')

describe('User', () => {
  it('should be able to create a new Pet', async () => {
    const response = await request(app)
      .post('/pets')
      .send({
        name: 'Rex',
        city: 'Campinas',
        breed: 'Pitbull',
        age: 10,
        weight: 12,
        user_id: 1
      })
    expect(response.body).toHaveProperty('id')
  })
  it('should be able to get all Pets', async () => {
    const response = await request(app)
      .get('/pets')
    expect(Array.isArray(response.body)).toBe(true)
  })
  it('should be able to Update a pet', async () => {
    const response = await request(app)
      .put('/pets/1')
      .send({
        name: 'Teste2'
      })
    expect(response.status === 200).toBe(true)
  })
  it('should be able to Delete a pet', async () => {
    const response = await request(app)
      .delete('/pets/1')

    expect(response.status === 200).toBe(true)
  })
})
