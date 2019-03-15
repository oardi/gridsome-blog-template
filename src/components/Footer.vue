<template>
	<footer class="mt-4">
		<div class="text-center p-2">
			<span>
				©{{ new Date().getFullYear() }} -
				{{ $static.metaData.siteName }}
			</span>
			&nbsp;
			<g-link class="nav-item" to="/datenschutz" exact>
				Datenschutz
			</g-link>
			&nbsp;
			<g-link class="nav-item" to="/impressum" exact>
				Impressum
			</g-link>
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
