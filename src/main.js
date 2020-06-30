import Vue from 'vue';
import App from './App.vue';
import router from "./router";
import ElementUI  from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

Vue.config.productionTip = false;
// font-aswsome
library.add(fab);
Vue.component("font-awesome-icon", FontAwesomeIcon);
// element-ui
Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
