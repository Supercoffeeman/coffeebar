Bitfinex Exchange API specification V1
======================================

https://www.bitfinex.com/pages/api

Api Documentation
URL:
The URL to use is

https://api.bitfinex.com/v1
Authentication
Authentication is done using an API key and a secret. To generate this pair, go to the API page

Say the client wants to make a request to
POST https://api.bitfinex.com/v1/order/new
With a payload of
{
"request": "/v1/order/new",
"nonce": "1234",
"option1": ...
