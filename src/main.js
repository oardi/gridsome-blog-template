import DefaultLayout from '~/layouts/Default.vue'

import './components/components';

export default function (Vue, { router, head, isClient }) {
	Vue.component('Layout', DefaultLayout)
}
