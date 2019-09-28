import Vue from 'vue';
import App from '../vue/App';
import router from './router';
import '../scss/custom.scss';
import BootstrapVue from 'bootstrap-vue';

Vue.use(BootstrapVue);

new Vue({
	router,
	el: '#app',
	render: h => h(App),
});