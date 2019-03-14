<template>
	<Layout>
		<div class="container pt-4 pb-4">
			<div class="card shadow">
				<div class="card-body">
					<h1 class="card-title">{{ $page.post.title }}</h1>
					<div class="card-text" v-html="$page.post.content" />
				</div>
			</div>
			<div class="card shadow mt-4">
				<div class="card-body">
					Author: {{ $page.post.author.name }}
				</div>
			</div>
		</div>
	</Layout>
</template>

<script>
    export default {
    	mounted() {
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
