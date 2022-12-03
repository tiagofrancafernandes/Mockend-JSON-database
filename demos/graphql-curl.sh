# https://github.com/tiagofrancafernandes/Mockend-JSON-database/

curl -g \
-X POST \
-H "Content-Type: application/json" \
-H "Authorization: Bearer 8c7dbd270cb98e83f9d8d57fb8a2ab7bac9d7501905fb013c69995ebf1b2a719" \
-d '{"query":"{ posts(limit: 2, offset: 0) { id title createdAt cover body author { id name } comments { id createdAt user { id name } body } } }"}' \
https://mockend.com/tiagofrancafernandes/Mockend-JSON-database/graphql
