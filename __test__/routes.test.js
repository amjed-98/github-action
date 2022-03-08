const request = require('supertest');
const app = require('../server/app');

test('What your tests is testing', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        expect(res.body.msg).toBe('welcome to github actions')
        return done();
      })
    })