# Dockerised Node Server with MongoDB

## Quick Start

```bash
# Run in Docker
docker-compose up
# use -d flag to run in background

# Tear down
docker-compose down

# To re-build
docker-compose build

# To run by docker composer
docker-compose -f ./docker-compose.yml up --build

```

## Unit Test

Now I just covered the routes because there’s not much of a logic. In real application I would also consider covering the controllers, especially if the logic gets more complex. Also I would add integration tests with database. And lastly, for front end application I may write some end-to-end tests.

## Request Example

### Create a New Card

```
curl --location --request POST 'http://localhost:3005/card' \
--header 'Content-Type: application/json' \
--data-raw '{
    "cardNumber": "4111 1111 1111 1111",
    "cardHolderName": "",
    "expirationDate": "12/22",
    "limit": 100
}'
```

### Get Cards List

```
curl --location --request GET 'http://localhost:3005/card'
```

### [Or You Can Run Postman Colletion](./cardService.postman_collection.json)


