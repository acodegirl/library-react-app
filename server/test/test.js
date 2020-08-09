const supertest = require('supertest');
const should = require('should');

const server = supertest.agent('http://localhost:5000');

describe('Server unit tests', function() {
  it('Ensure server is running', function(done) {
    server
      .get('/')
      .expect('Content-type', /json/)
      .expect(200) // HTTP response
      .end(function(err, res) {
        res.status.should.equal(200);
        done();
      });
  });

  it('test get users request (without auth token it should fail)', function(done) {
    //calling GET api
    server
      .get('/api/users')
      .expect('Content-type', /json/)
      .expect(401)
      .end(function(err, res) {
        res.status.should.equal(401);
        done();
      });
  });

  it('test user post request', function(done) {
    //calling POST api
    server
      .post('/api/users')
      .send({
        name: 'user53',
        email: 'user53@email.com',
        password: 'user1234'
      })
      .expect('Content-type', /json/)
      .expect(200)
      .end(function(err, res) {
        res.status.should.equal(200);
        done();
      });
  });

  it('test user post request without mandatory field ', function(done) {
    //calling POST api
    server
      .post('/api/users')
      .send({
        name: 'user13',
        email: 'user13@email.com'
      })
      .expect('Content-type', /json/)
      .expect(400)
      .end(function(err, res) {
        res.status.should.equal(400);
        done();
      });
  });

  it('test get books request (without auth token it should fail)', function(done) {
    //calling GET api
    server
      .get('/api/books')
      .expect('Content-type', /json/)
      .expect(401)
      .end(function(err, res) {
        res.status.should.equal(401);
        done();
      });
  });

  it('test book post request', function(done) {
    //calling POST api
    server
      .post('/api/books')
      .send({
        name: '4.50 from Paddington',
        author: 'Agatha christie',
        genre: 'Mystery'
      })
      .expect('Content-type', /json/)
      .expect(200)
      .end(function(err, res) {
        res.status.should.equal(401);
        done();
      });
  });

  it('test random url, it should return 404', function(done) {
    server
      .get('/random')
      .expect(404)
      .end(function(err, res) {
        res.status.should.equal(404);
        done();
      });
  });
});
