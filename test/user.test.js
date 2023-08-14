require('dotenv').config()
const request = require('supertest')
const app = require('../app')

/*FOR DB CONNECTION */
const { dbConnect, dbDisconnect } = require('../config/mongo')
/*FOR DB CONNECTION */

describe('GET /user/login', () => {
  beforeAll(async () => {
    await dbConnect()
  })
  afterAll(async () => {
    await dbDisconnect()
  })

  it('should return status 400 bad request (email, password)', async () => {
    const res = await request(app)
      .post('/api/user/login')
      .send()
      .expect('Content-Type', /json/)
      .expect(400)
    expect(res.body).toEqual({
      status: 400,
      error: 'Error bad request - email,password',
    })
  })
  it('should return status 200 login', async () => {
    const res = await request(app)
      .post('/api/user/login')
      .send({
        email: process.env.EMAIL_TEST,
        password: process.env.PASSWORD_TEST,
      })
      .expect('Content-Type', /json/)
      .expect(200)
  })
})
