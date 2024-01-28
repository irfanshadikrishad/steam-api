# steam-api

<img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/irfanshadikrishad/steam-api?style=for-the-badge&color=%23219EBC"> <img alt="GitHub License" src="https://img.shields.io/github/license/irfanshadikrishad/steam-api?style=for-the-badge&color=%23B0C4B1"> <img alt="GitHub issues" src="https://img.shields.io/github/issues-raw/irfanshadikrishad/steam-api?style=for-the-badge&color=%2352B69A">

Open Source unofficial Steam API to get necessary data from Steam to implement them in your own Web or Mobile Apps. Built on NodeJS.

#### Why ?

Ofcourse because there is no official steam api by steam itself.

#### How ?

Base url : `https://steam-api-r45u.onrender.com`

Endpoints:

<table>
  <thead>
    <tr>
      <th>Url</th>
      <th>Description</th>
      <th>Method</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>/api/v1/user/:id</td>
      <td>To get user information</td>
      <td>GET</td>
    </tr>
    <tr>
      <td>/api/v1/recent</td>
      <td>To get recently released games on steam</td>
      <td>GET</td>
    </tr>
    <tr>
      <td>/api/v1/popular</td>
      <td>To get most popular games on steam</td>
      <td>GET</td>
    </tr>
    <tr>
      <td>/api/v1/topseller</td>
      <td>To get top seller games on steam</td>
      <td>GET</td>
    </tr>
  </tbody>
</table>

The base url here is for demo only, Please clone the repo and host yourself or you will probably have slow response time.
