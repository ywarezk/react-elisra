const app = require('../app');
const axios = require('axios');
const chai = require('chai');
const Task = require('../models').Task;

describe('testing the login register', function() {
    let server;

    /**
     * run the server
     */
    before(function(done) {
        server = app.listen(3000, function() {
            console.log('now listening on port 3000');
            done();
        })
    });

    it('register with yariv@nerdeez.com', async function() {
        const email = 'yariv@nerdeez.com';
        const password = '12345678';
        try {
            const response = await axios.post('http://localhost:3000/api/users/register', {
                email, password
            });
        } catch(err) {
            chai.expect(err.response.status).to.equal(500);
            chai.expect(err.response.data['error']).to.equal('email must be unique');
        }
    });

    it('register and login', async function() {
        const email = `yariv_${Math.random()}@nerdeez.com`;
        const password = '12345678';
        const firstName = 'yariv';
        const lastName = 'katz';
        let response = await axios.post('http://localhost:3000/api/users/register', {
            email, password, firstName, lastName
        });
        chai.expect(response.status).to.equal(201);
        const token = response.data.token;

        try {
          response = await axios.post('http://localhost:3000/api/users/login', {
            email: 'ywarezk@gmail.com', password
          });
        } catch(err) {
          chai.expect(err.response.status).to.equal(401);
        }

        response = await axios.post('http://localhost:3000/api/users/login', {
            email, password
        });
        chai.expect(response.status).to.equal(202);
        const token2 = response.data.token;
        // chai.expect(response.data.token).to.equal(token);

        // now try and query the tasks with and without a token
        try {
            response = await axios.get('http://localhost:3000/api/tasks');
        } catch(err) {
            chai.expect(err.response.status).to.equal(401);
        }

        response = await axios.get('http://localhost:3000/api/tasks', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        chai.expect(response.status).to.equal(200);
        chai.expect(response.data.length > 0).to.equal(true);

        response = await axios.get('http://localhost:3000/api/tasks', {
            headers: {
                'Authorization': `Bearer ${token2}`
            }
        });
        chai.expect(response.status).to.equal(200);
        chai.expect(response.data.length > 0).to.equal(true);
    })

    /**
     * close the server
     */
    after(function() {
        server.close();
    })
})
