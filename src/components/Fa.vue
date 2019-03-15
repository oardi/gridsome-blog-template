<script>
    import { library } from '@fortawesome/fontawesome-svg-core';
    import {
    	faHome,
    	faBars,
    	faTimes,
		faChevronUp,
		faCalendar
    } from '@fortawesome/free-solid-svg-icons';
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

    library.add(faHome);
    library.add(faBars);
    library.add(faTimes);
    library.add(faChevronUp);
	library.add(faCalendar);

    export default FontAwesomeIcon;
</script>
