import DefaultLayout from '~/layouts/Default.vue';

import 'prismjs/themes/prism.css';

export default function (Vue, { router, head, isClient }) {
	Vue.component('Layout', DefaultLayout)
}
