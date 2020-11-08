# CAPS w Api

Phase 3, we’ll be changing the underlying networking implementation of our CAPS system from using raw TCP to using a library called socket.io. Socket.io manages the connection pool for us, makes broadcasting much easier to operate, and works well both on the terminal (between servers) and with web clients.

### TEST

  Test our vendor generated payload
-    ✓ Our payload is being passed correctly (2 ms)

### Lab 19 update:

Just cloned my last repo to another one so as to not mess with past submition grading. Evrything is setup and all files are in tehr own folders:

- caps.js is the only one connected to socket.io and on port 4001 witht the namespace of caps.

- vendor.js is using socket-io and listening to /caps namespace.

- driver.js is sending a superagent call on delivery and connected via socket io-client to caps.js

- api.js is just listening to the delivey while on socket.io-client and sending to the API in try catch blocks to allow the program to run.

![uml](https://github.com/401Repo/CAPS-REFACTOR/blob/main/Image%20from%20iOS%20(6).jpg)

### Lab 18 update:

Everything is in its own folder. Testing the payload as it is the one thing we are creating outside of our logger. Updating UML.

![uml](https://github.com/401Repo/CAPS-REFACTOR/blob/main/Image%20from%20iOS%20(6).jpg)

### Lab 17 update:

replaced for a socket connection to meet every file in a common port for instant communication. 

![uml](https://github.com/401Repo/CAPS/blob/main/Image%20from%20iOS%20(5).jpg)

### Lab 16: 

### UML

![uml](https://github.com/401Repo/CAPS/blob/main/Image%20from%20iOS%20(4).jpg?raw=true)
