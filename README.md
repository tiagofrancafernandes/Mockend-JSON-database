# Mockend-JSON-database
> Mockend JSON database

---

### Base URL
`https://mockend.com/tiagofrancafernandes/Mockend-JSON-database`

# 1. List of fake [resource] with a GET request
> _See [Resources](#Resources)_

```sh
# curl https://mockend.com/tiagofrancafernandes/Mockend-JSON-database/[resource]
curl https://mockend.com/tiagofrancafernandes/Mockend-JSON-database/users

# curl https://mockend.com/tiagofrancafernandes/Mockend-JSON-database/[resource]/[params]
curl https://mockend.com/tiagofrancafernandes/Mockend-JSON-database/users/1
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
>

## Demo GraphQL requests:
  - [Using Javascript](./demos/graphql.js)
  - [Using CURL](./demos/graphql-curl.sh)
  - [Pure GraphQL](./demos/graphql-queries.md)
```
https://mockend.com/tiagofrancafernandes/Mockend-JSON-database/graphql
```

# Resources

<!--
`[a-zA-Z0-9]*`
-->

Name | URI | Type | Type of Return | Demo
--|--|--|--|--
Users | `/users` | `String` | `Array[User]` | [Demo](https://mockend.com/tiagofrancafernandes/Mockend-JSON-database/users)
[User](#user) | `/users/{id}` | `Integer` | `User` | [Demo](https://mockend.com/tiagofrancafernandes/Mockend-JSON-database/users/1)
Posts | `/posts` | `String` | `Array[Post]` | [Demo](https://mockend.com/tiagofrancafernandes/Mockend-JSON-database/posts)
[Post](#post) | `/posts/{id}` | `Integer` | `Post` | [Demo](https://mockend.com/tiagofrancafernandes/Mockend-JSON-database/posts/1)
Comments | `/comments` | `String` | `Array[Comment]` | [Demo](https://mockend.com/tiagofrancafernandes/Mockend-JSON-database/comments)
[Comment](#comment) | `/comments/{id}` | `Integer` | `Comment` | [Demo](https://mockend.com/tiagofrancafernandes/Mockend-JSON-database/comments/1)

# Schemes

> See [`.mockend.json`](.mockend.json)

## User

```json
{
    "name": {
        "string": {}
    },
    "avatarUrl": {
        "regexp": "https://i\\.pravatar\\.cc/150\\?u=[0-9]{5}"
    },
    "statusMessage": {
        "string": [
            "working from home",
            "watching Netflix"
        ]
    },
    "email": {
        "regexp": "#[a-z]{5,10}@[a-z]{5}\\.[a-z]{2,3}"
    },
    "color": {
        "regexp": "#[0-9A-F]{6}"
    },
    "age": {
        "int": {
            "min": 21,
            "max": 100
        }
    },
    "isPublic": {
        "boolean": {}
    }
}
```

## Post

```json
{
    "title": {
        "string": {}
    },
    "comments": {
        "hasMany": "Comment"
    }
}
```

## Comment

```json
{
    "body": {
        "string": {}
    },
    "post": {
        "belongsTo": "Post"
    }
}
```

----

# Links

  - [Full docs](https://docs.mockend.com/)
  - [mockend/demo](https://github.com/mockend/demo)
  - [http-in-five-ways](https://www.contentful.com/blog/graphql-via-http-in-five-ways/)


----

### Thanks
- [Mockend](https://docs.mockend.com/)
- [Contentful](https://www.contentful.com/)
- [Netlify](https://www.netlify.com/)