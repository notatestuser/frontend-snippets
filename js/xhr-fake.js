var server = sinon.fakeServer.create();

somethingThatTriggersXHR();

var req = server.requests[0];

req.respond(status, headers, body);
