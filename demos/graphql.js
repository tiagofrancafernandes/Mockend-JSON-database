fetch('https://mockend.com/tiagofrancafernandes/Mockend-JSON-database/graphql', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        query: `
        {
            posts {
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
      `,
        variables: {
            now: new Date().toISOString(),
        },
    }),
})
    .then((res) => res.json())
    .then((result) => console.log(result));
