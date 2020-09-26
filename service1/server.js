/** Marjaana Laine 80337
 *  COMP.SE.140 Continuous Development and Deployment - DevOps
 * 
 *  Docker-Compose Excercise
 *  Service 1 
 */

const express = require('express')
const app = express()
const axios = require('axios')
const hostname = '0.0.0.0'
const port = 8891

app.get('/', (req, res) => {
  const resService1 = `Hello from ${ req.client.remoteAddress }:${req.client.remotePort} \nto ${req.client.localAddress}:${req.client.localPort}`
  
  axios.get(`http://${ process.env.SERVICE }:8892/`)
  .then(response => {
    res.send(`${ resService1 }\n${response.data}\n`);
  })
  .catch(error => {
    console.log(error);
  });
})

app.listen(port, hostname, () => {
	console.log(`Service1 is running at http://${hostname}:${port}/`)
})