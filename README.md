# Mockend-JSON-database
Mockend JSON database

### Base URL
`https://mockend.com/tiagofrancafernandes/Mockend-JSON-database`

# 1. List your fake users with a GET request

```sh
curl https://mockend.com/tiagofrancafernandes/Mockend-JSON-database/users
```

# 2. Fake a creation with a POST
> _*(don't worry changes aren't persisted)*_

```sh
curl https://mockend.com/tiagofrancafernandes/Mockend-JSON-database/users \
  -X POST \
  -H "Content-Type: application/json" \
  --data '{"name": "alice"}'
```

# 3. Access your GraphQL endpoint
> `https://mockend.com/org/repo/graphql`
> 
> [Open Graphql URL](https://mockend.com/tiagofrancafernandes/Mockend-JSON-database/graphql)
```
https://mockend.com/tiagofrancafernandes/Mockend-JSON-database/graphql
```
