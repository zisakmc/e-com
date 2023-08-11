import './assets/style.css'

// Import icon libraries
/* import quasarIconSet from 'quasar/icon-set/fontawesome-v6'
 */
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/material-icons-round/material-icons-round.css'
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Quasar } from 'quasar'

const app = createApp(App)

app.use(router)
/* app.use(Quasar,{
  iconSet:quasarIconSet,  
})
 */
app.mount('#app')
