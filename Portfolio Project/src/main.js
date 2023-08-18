import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

router.beforeEach((to, from, next) => {
    console.log('beforeEach called:', to.name);
    let bgClass = '';
  
    switch (to.name) {
      case 'home':
        bgClass = 'bg-home';
        break;
      case 'projects':
        bgClass = 'bg-projects';
        break;
      case 'contacts':
        bgClass = 'bg-contacts';
        break;
      case 'about':
        bgClass = 'bg-about';
        break;
    }
  
    // Attach the background class to the root element
    document.documentElement.className = bgClass;
  
    next();
  });

app.use(router)

app.mount('#app')
