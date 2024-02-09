import './assets/main.css'

import { createApp } from 'vue'
// importing app component to be mounted
// App.vue is the root component
// every app requires a "root" component that can contain other components as its children
import App from './App.vue'

// this mounts to the div on the index.html file with the id of app i.e #app
createApp(App).mount('#app')
