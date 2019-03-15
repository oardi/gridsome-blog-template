<template>
	<button class="btn btn-secondary btn-sm shadow-sm">
		#{{ tag.title }}
	</button>
</template>

<script>
    export default {
    	props: ['tag']
    };
</script>
