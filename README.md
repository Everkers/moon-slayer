# Moon slayer league of legends tool
This application shows how data sent to the LCU can be modified or read to change visual stuff like, icon, background, hovercard, or read data such as profile data, friends, and more.
``My discord Everkers#6416``
## Screenshots
![Background changer](https://i.ibb.co/zFG2v0d/Screenshot-2020-10-05-150720.png)
![Rank changer](https://i.ibb.co/nr2htY4/Screenshot-2020-10-05-150849.png)
## Technologies used
<table>
  <thead>
    <tr>
      <th>Project</th>
      <th>Version</th>
      <th>Description</th>
      <th>Reasons behind choosing it</th>
    </tr>
  </thead>
  <tbody>
   <tr>
      <td>
        <a href="https://github.com/vuejs/vue">VueJS</a>
      </td>
      <td>
        @2.6.16
      </td>
      <td>
       Vue.js is an open-source JavaScript framework for building user interfaces
      </td>
       <td>
        The reason why i choose Vuejs it's because of the clean project structure and good performance.
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/axios/axios">axios</a>
      </td>
      <td>
        @0.18.1
      </td>
      <td>
       A based HTTP client for the browser and node.js
      </td>
       <td>
        Dealing with api's is simple with axios!
      </td>
    </tr>
     <tr>
      <td>
        <a href="https://github.com/SimulatedGREG/electron-vue">vue-electron</a>
      </td>
      <td>
        @1.0.6
      </td>
      <td>
        Electon with vue template for easy and clean project setup
      </td>
       <td>
        <ul>
          <li>        Basic project structure with a single package.json setup</li>
          <li>Project scaffolding using vue-cli</li>
                    <li>Ready to use Vue plugins (axios, vue-electron, vue-router, vuex)*
</li>
          <li>Installed vue-devtools and devtron tools for development
</li>
        </ul>
      </td>
    </tr>
        <tr>
      <td>
        <a href="https://github.com/Pupix/lcu-connector">lcu-connector</a>
      </td>
      <td>
        @2.1.3
      </td>
      <td>
This connector automatically retrieves the credentials for the API that starts when the new League of Legends client is launched.      </td>
       <td>
        Easy way to connect and retrieve data from league client
      </td>
    </tr>
  </tbody>
</table>


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:9080
npm run dev

# build electron application for production
npm run build

# run unit & end-to-end tests
npm test


# lint all JS/Vue component files in `src/`
npm run lint

```

---

This project was generated with [electron-vue](https://github.com/SimulatedGREG/electron-vue)@[45a3e22](https://github.com/SimulatedGREG/electron-vue/tree/45a3e224e7bb8fc71909021ccfdcfec0f461f634) using [vue-cli](https://github.com/vuejs/vue-cli). Documentation about the original structure can be found [here](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html).
