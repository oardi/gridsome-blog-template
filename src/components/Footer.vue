<template>
	<footer class="mt-4">
		<div class="text-center p-2">
			<div>
				©{{ new Date().getFullYear() }} -
				{{ $static.metaData.siteName }}
			</div>
		</div>
	</footer>
</template>

<script>
    export default {
    	props: ['post']
    };
</script>

<static-query>
query {
	metaData {
		siteName
	}
}
</static-query>
