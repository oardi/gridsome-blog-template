<template>
	<Layout>
		<div v-html="$page.post.content" />

		<div>
			Author: {{ $page.post.author.name }}
		</div>
	</Layout>
</template>

<script>
export default {
	mounted(){
		console.warn(this.$page);
	},
	metaInfo() {
		return {
			title: this.$page.post.title
		};
	}
};
</script>

<page-query>
	query Post ($path: String!) {
		post: post (path: $path) {
			title
			content
			author {
				name
			}
		}
	}
</page-query>
