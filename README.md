# Mockend-JSON-database
Mockend JSON database

### Base URL
`https://mockend.com/tiagofrancafernandes/Mockend-JSON-database`

# 1. List of fake [resource] with a GET request
> _See [Resources](#Resources)_

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

# Resources

Name | URI | Acceptable Parameters | Example | Type of Return
--|--|--|--|--
Users | `/users` | - | - | `Array[User]`
