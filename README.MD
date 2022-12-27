# Step Install
- make sure have db postgres with configuration as referred in config/config.json
- create .env file as referred .env.example 
- run script below

## Script Install
```
$ npm install --dev
$ npx sequelize-cli db:migrate:all
$ npm run serve
```

# Project: Fams Javan
# 📁 Collection: Family 


## End-point: add family
### Method: POST
>```
>http://127.0.0.1:8081/javan/v1/family
>```
### Body (**raw**)

```json
{
    "nik": 123124532123
}
```

### Response: 200
```json
{
    "error": false,
    "code": "00",
    "message": "successfully add family data",
    "data": {
        "id": 3,
        "nik": "190238902139123",
        "updated_at": "2022-12-26T19:18:55.666Z",
        "created_at": "2022-12-26T19:18:55.666Z"
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: update family
### Method: PUT
>```
>http://127.0.0.1:8081/javan/v1/family/1
>```
### Body (**raw**)

```json
{
    "nik": "112376178263"
}
```

### Response: 200
```json
{
    "error": false,
    "code": "00",
    "message": "successfully update family data",
    "data": null
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: get families
### Method: GET
>```
>http://127.0.0.1:8081/javan/v1/family
>```
### Body (**raw**)

```json
{
    "nik": "190238902139123"
}
```

### Query Params

|Param|value|
|---|---|
|id|511|
|nik|1234111|


### Response: 200
```json
{
    "error": false,
    "code": "00",
    "message": "successfully get family data",
    "data": [
        {
            "id": 5,
            "nik": "190238902139123",
            "created_at": "2022-12-26T19:30:49.669Z",
            "updated_at": "2022-12-26T19:30:49.669Z"
        },
        {
            "id": 6,
            "nik": "1234",
            "created_at": "2022-12-26T19:32:03.355Z",
            "updated_at": "2022-12-26T19:32:03.355Z"
        }
    ]
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: remove family
### Method: DELETE
>```
>http://127.0.0.1:8081/javan/v1/family/1
>```
### Response: 200
```json
{
    "error": false,
    "code": "00",
    "message": "successfully remove family data",
    "data": 1
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Person 


## End-point: add person
### Method: POST
>```
>http://127.0.0.1:8081/javan/v1/person
>```
### Body (**raw**)

```json
{
    "family_id": 2,
    "name": "arip",
    "gender": 0,
    "nip": "53612367123"
}
```

### Response: 200
```json
{
    "error": false,
    "code": "00",
    "message": "successfully add person data",
    "data": {
        "id": 3,
        "name": "arip",
        "gender": 0,
        "nip": "53612367123",
        "family_id": 2,
        "updated_at": "2022-12-27T18:48:29.867Z",
        "created_at": "2022-12-27T18:48:29.867Z",
        "familyId": 2
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: put person
### Method: PUT
>```
>http://127.0.0.1:8081/javan/v1/person/1
>```
### Body (**raw**)

```json
{
    "family_id": 1,
    "name": "ghufron",
    "gender": 1,
    "nip": "0061236123"
}
```

### Response: 200
```json
{
    "error": false,
    "code": "00",
    "message": "successfully update person data",
    "data": [
        1
    ]
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: get person
### Method: GET
>```
>http://127.0.0.1:8081/javan/v1/person?id=3&family_id=2&name=ar&gender=1&include_product=true&nip=53612367125371
>```
### Body (**raw**)

```json
{
    "nik": "190238902139123"
}
```

### Query Params

|Param|value|
|---|---|
|id|3|
|family_id|2|
|name|ar|
|gender|1|
|include_product|true|
|nip|53612367125371|


### Response: 200
```json
{
    "error": false,
    "code": "00",
    "message": "successfully get person data",
    "data": [
        {
            "id": 2,
            "nip": "61236123",
            "name": "ghufron",
            "gender": 1,
            "family_id": 1,
            "created_at": "2022-12-27T18:48:25.316Z",
            "updated_at": "2022-12-27T18:57:36.375Z",
            "asset": [
                {
                    "id": 1,
                    "name": "samsung galaxy",
                    "person_id": 2,
                    "created_at": "2022-12-27T19:02:50.911Z",
                    "updated_at": "2022-12-27T19:02:50.911Z",
                    "price": 1499
                }
            ]
        },
        {
            "id": 1,
            "nip": "53612367125371",
            "name": "zaki",
            "gender": 0,
            "family_id": 2,
            "created_at": "2022-12-27T18:48:19.624Z",
            "updated_at": "2022-12-27T18:48:19.624Z",
            "asset": [
                {
                    "id": 2,
                    "name": "apple iphone",
                    "person_id": 1,
                    "created_at": "2022-12-27T19:03:26.259Z",
                    "updated_at": "2022-12-27T19:03:26.259Z",
                    "price": 0
                }
            ]
        },
        {
            "id": 3,
            "nip": "53612367123",
            "name": "arip",
            "gender": 0,
            "family_id": 2,
            "created_at": "2022-12-27T18:48:29.867Z",
            "updated_at": "2022-12-27T18:48:29.867Z",
            "asset": [
                {
                    "id": 3,
                    "name": "macbook",
                    "person_id": 3,
                    "created_at": "2022-12-27T19:03:36.022Z",
                    "updated_at": "2022-12-27T19:03:36.022Z",
                    "price": 1749
                },
                {
                    "id": 6,
                    "name": "samsung",
                    "person_id": 3,
                    "created_at": "2022-12-27T19:34:38.165Z",
                    "updated_at": "2022-12-27T19:34:38.165Z",
                    "price": 2748
                }
            ]
        }
    ]
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: remove person
### Method: DELETE
>```
>http://127.0.0.1:8081/javan/v1/person/1
>```
### Response: 200
```json
{
    "error": false,
    "code": "00",
    "message": "successfully remove person data",
    "data": 1
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Asset 


## End-point: add asset
### Method: POST
>```
>http://127.0.0.1:8081/javan/v1/asset
>```
### Body (**raw**)

```json
{
    "person_id": 3,
    "name": "samsung"
}
```

### Response: 200
```json
{
    "error": false,
    "code": "00",
    "message": "successfully add asset data",
    "data": {
        "id": 1,
        "name": "samsung galaxy",
        "person_id": 2,
        "updated_at": "2022-12-27T19:02:50.911Z",
        "created_at": "2022-12-27T19:02:50.911Z",
        "personId": 2
    }
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: put asset
### Method: PUT
>```
>http://127.0.0.1:8081/javan/v1/asset/1
>```
### Body (**raw**)

```json
{
    "family_id": 1,
    "name": "ghufron",
    "gender": 1,
    "nip": "0061236123"
}
```

### Response: 200
```json
{
    "error": false,
    "code": "00",
    "message": "successfully update person data",
    "data": [
        1
    ]
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: get asset
### Method: GET
>```
>http://127.0.0.1:8081/javan/v1/asset?id=3&name=macbook&person_id=2
>```
### Body (**raw**)

```json
{
    "nik": "190238902139123"
}
```

### Query Params

|Param|value|
|---|---|
|id|3|
|name|macbook|
|person_id|2|


### Response: 200
```json
{
    "error": false,
    "code": "00",
    "message": "successfully get asset data",
    "data": [
        {
            "id": 1,
            "name": "samsung galaxy",
            "person_id": 2,
            "created_at": "2022-12-27T19:02:50.911Z",
            "updated_at": "2022-12-27T19:02:50.911Z",
            "personId": 2
        },
        {
            "id": 3,
            "name": "macbook",
            "person_id": 3,
            "created_at": "2022-12-27T19:03:36.022Z",
            "updated_at": "2022-12-27T19:03:36.022Z",
            "personId": 3
        }
    ]
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: remove asset
### Method: DELETE
>```
>http://127.0.0.1:8081/javan/v1/asset/1
>```
### Response: 200
```json
{
    "error": false,
    "code": "00",
    "message": "successfully remove asset data",
    "data": 1
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
_________________________________________________
Powered By: [postman-to-markdown](https://github.com/bautistaj/postman-to-markdown/)