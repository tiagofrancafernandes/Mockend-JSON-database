[⬅️ Back to *README.md*](../README.md)

# Schemes

> See [`.mockend.json`](.mockend.json)

## User

```json
{
    "name": { 
        "regexp": "[A-Z][a-z]{5,10} [A-Z][a-z]{5,10}" 
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
    },
    "comments": {
        "hasMany": "Comment"
    }
}
```

## Post

```json
{
    "title": {
        "regexp": "[A-Z][a-z]{5,10} [A-Z][a-z]{5,10}"
    },
    "cover": {
      "regexp": "https://picsum\\.photos/seed/[0-9]{5}/1920/270"
    },
    "body": {
        "loremParagraphs": { "minLength": 200, "maxLength": 500 }
    },
    "tag": {
        "string": [
            "one",
            "two",
            "three"
        ]
    },
    "createdAt": {
        "dateTime": {
            "min": "2010-01-01T00:00:00Z",
            "max": "2022-12-01T23:59:59Z"
        }
    },
    "comments": {
        "hasMany": "Comment"
    },
    "posts": {
        "hasMany": "Post"
    },
    "author": {
        "belongsTo": "Author"
    }
}
```

## Comment

```json
{
    "body": {
        "loremSentences": { "minLength": 5, "maxLength": 50 }
    },
    "post": {
        "belongsTo": "Post"
    },
    "createdAt": {
        "dateTime": {
            "min": "2010-01-01T00:00:00Z",
            "max": "2022-12-01T23:59:59Z"
        }
    },
    "user": {
        "belongsTo": "User"
    }
}
```

## Author

```json
{
    "name": { 
        "regexp": "[A-Z][a-z]{5,10} [A-Z][a-z]{5,10}"
    },
    "avatarUrl": {
        "regexp": "https://i\\.pravatar\\.cc/150\\?u=[0-9]{5}"
    },
    "posts": {
        "hasMany": "Post"
    }
}
```

