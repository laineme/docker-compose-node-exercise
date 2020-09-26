# docker-compose-node-exercise

Docker Compose exercise

This is a simple system composed of two services, Service1 and Service2. Both services have their own Dockerfiles and thus own containers where they are running. The Docker Compose (docker-compose.yaml) will start both containers and also creates a virtual local private network that allows Service1 and Service2 to communicate with each other. Service1 is exposed to outside world in port number 8001 and Service2 is internal.

When an external Request1 from the outside world comes to HTTP port 8001 to Service1 the program ends up calling internal port number 8891 of Service1. Service1 is then using Service2 by sending Request2 to internal port number 8892 of Service2 in this private network. Service2 will return a response to Service1 and Service1 returns a composed response to the host that sent the Request1.
