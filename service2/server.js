/** Marjaana Laine 80337
 *  COMP.SE.140 Continuous Development and Deployment - DevOps
 * 
 *  Docker-Compose Excercise
 *  Service 2
 */

const express = require('express')
const app = express()
const port = 8892

app.get('/', (req, res) => {
  const response = `Hello from ${ req.client.remoteAddress }:${req.client.remotePort} \nto ${req.client.localAddress}:${req.client.localPort}`
  res.send(response)
})

// Listens on a port 8002
app.listen(port, () => {
  console.log(`Service2 is listening on port ${port}`)
})