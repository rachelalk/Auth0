import express from "express";
import { requiredScopes}  from 'express-oauth2-jwt-bearer';
import { auth } from "express-oauth2-jwt-bearer";
const checkScopes = requiredScopes('read:messages');
const app = express();
const port = 3000;



const checkJwt = auth({
	audience: "localhost:3000",
	issuerBaseURL: `https://dev-7a80b6dr.us.auth0.com/`,
});

app.get("/authorized", function (req, res) {
	res.send("Secured Resource");
});


app.get('/api/public', function(req, res) {
  res.json({
    message: 'Hello from a public endpoint! You don\'t need to be authenticated to see this.'
  });
});

//This route needs authentication
app.get('/api/private', checkJwt, function(req, res) {
  res.json({
    message: 'Hello from a private endpoint! You need to be authenticated to see this.'
  });
});
//To access private key:
//Go to Auth0 - Select the API you want to access and navigate to test
//Click Node.js - in the code example use the url in postman to get access key (or get from code snippet below)
//Use body from first post snippet and issue post request through postman
//Enter bearer key in authorization to access

app.get('/api/private-scoped', checkJwt, checkScopes, function(req, res) {
  res.json({
    message: 'Hello from a private endpoint! You need to be authenticated and have a scope of read:messages to see this.'
  });
});
//To access private-scoped - same process as private but permissions must be set to ticked in machine to machine tab within dropdown.


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});



