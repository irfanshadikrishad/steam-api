# steam-api

Open Source unofficial Steam API to get necessary data from Steam to implement them in your own Web or Mobile Apps. Built on NodeJS.

#### Why ?

Ofcourse because there is no official steam api by steam itself.

#### How ?

Base url :

```
https://steam-api-r45u.onrender.com
```

Endpoints:
| Url | Description | Method |
| --- | ----------- | ------- |
| /api/v1/user | To get user information, be sure to pass steam id as `id` in request body | POST |
| /api/v1/recent | To get recently released games on steam | GET |
| /api/v1/popular | To get most popular games on steam | GET |
| /api/v1/topseller | To get top seller games on steam | GET |

The base url here is for demo only, Please clone the repo and host yourself or you will probably have slow response time.
