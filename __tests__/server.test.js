const request = require('supertest');
const app = require('../server/server.js');

describe('Route integration', () => {
    describe('/visit', () => {
      describe('POST', () => {
        it('Accepts POST requests with ‘application/json’ types & responds with a status code of 200', async () => {
          const response = await request(app)
          .post('/visit')
          .send(JSON.stringify({"userId":"1"}))
          .expect('Content-Type', /json/)
          .expect(200);
        });
        it('Should return an visitId if userId exists in db', async () => {
          const mockUser = { userId: 1, location: 'New York City'}
          const visitId = 1
          const response = await request(app)
          .post('/visit')
          .send(mockUser)
          .expect(response.body).toBe(visitId)
        });
      });
      describe('GET', () => {
        it('Should accept a visitId and responds with a status code 200', async () => {
          const visitId = 1
          const response = await request(app)
          .get('/visit')
          .send(visitId)
          .expect(200)
        });
        it('Should accept a visitId and returns an array of matched locations', async () => {
          const visitId = 1
          const response = await request(app)
          .get('/visit')
          .send(visitId)
          .expect(response.body).toBe(['New York City'])
        });
      });
    });

});