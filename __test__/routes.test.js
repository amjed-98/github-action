const request = require('supertest');
const app = require('../server/app');
const dbBuild = require('../server/Database/config/build');
const connection = require('../server/Database/config/connection');

beforeAll(()=>{
  return dbBuild()
})

afterAll(()=> {
  return connection.end();
})

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

test("test route get books", (done) => {
    request(app)
      .get('/books')
      .expect(200)
      .end(function(err, res){
        if (err) return done(err);
        console.log(res.body)
        expect(res.body.length).toBe(3)
        return done();
      })
})