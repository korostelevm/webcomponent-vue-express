// // import Vue from 'vue'
// // import App from './App.vue'

// // Vue.config.productionTip = false

// // new Vue({
// //   render: h => h(App),
// // }).$mount('#app')



// // import { defineCustomElement } from 'vue'

// import Vue from 'vue';
// import wrap from '@vue/web-component-wrapper';
// import App from './App.ce.vue'

// // let a = new Vue({
// //     render: h => h(App),
// //   })
// const CustomElement = wrap(Vue, App);
// console.log(App.styles) // ["/* inlined css */"]

// window.customElements.define('vue-wc', CustomElement);
// // customElements.define('my-vue-element', MyVueElement)



import Vue from 'vue'
import App from './App.vue'

import vueCustomElement from 'vue-custom-element'


Vue.use(vueCustomElement);


Vue.customElement('vue-wc', App);