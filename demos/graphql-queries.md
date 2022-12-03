# Requests

- [Playground](https://mockend.com/tiagofrancafernandes/Mockend-JSON-database/graphql)
- [Playground with demo](https://mockend.com/tiagofrancafernandes/Mockend-JSON-database/graphql?query=%23%23%23%20Repo%3A%20https%3A%2F%2Fgithub.com%2Ftiagofrancafernandes%2FMockend-JSON-database%0A%0A%23%23%23%23%20-------------------------------------%0A%23%23%23%23%20Posts%0A%7B%0A%20%20posts(limit%3A%202%2C%20offset%3A%200)%20%7B%0A%20%20%20%20id%0A%20%20%20%20title%0A%20%20%20%20author%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20name%0A%20%20%20%20%7D%0A%20%20%20%20body%0A%20%20%20%20comments%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20user%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20body%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A%0A%23%23%23%23%20-------------------------------------%0A%23%23%23%23%20Comments%0A%23%20%7B%0A%23%20%20%20comments(limit%3A%203)%20%7B%0A%23%20%20%20%20%20id%0A%23%20%20%20%20%20post%20%7B%0A%23%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%0A%23%20%20%20%20%20%7D%0A%23%20%20%20%20%20body%0A%23%20%20%20%7D%0A%23%20%7D%0A%0A%23%23%23%23%20-------------------------------------%0A%23%23%23%23%20Single%20comment%0A%23%20%7B%0A%23%20%20%20comment(id%3A%201)%20%7B%0A%23%20%20%20%20%20id%0A%23%20%20%20%20%20body%2C%0A%23%20%20%20%20%20post%20%7B%0A%23%20%20%20%20%20%20%20id%0A%23%20%20%20%20%20%20%20title%0A%23%20%20%20%20%20%7D%0A%23%20%20%20%20%20user%20%7B%0A%23%20%20%20%20%20%20%20id%0A%23%20%20%20%20%20%20%20name%0A%23%20%20%20%20%20%7D%0A%23%20%20%20%7D%0A%23%20%7D%0A)
- [Links](#links)

### Posts
```sh
#### -------------------------------------
#### Posts
{
  posts(limit: 2, offset: 0) {
    id
    title
    author {
      id
      name
    }
    body
    comments {
      id
      user {
        id
        name
      }
      body
    }
  }
}
```

### Comments
```sh
#### -------------------------------------
#### Comments
{
  comments(limit: 3) {
    id
    post {
      id

    }
    body
  }
}
```

### Single comment
```sh
#### -------------------------------------
#### Single comment
{
  comment(id: 1) {
    id
    body,
    post {
      id
      title
    }
    user {
      id
      name
    }
  }
}
```

----

### Links
- https://www.contentful.com/blog/graphql-via-http-in-five-ways/