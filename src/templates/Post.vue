<template>
	<Layout>
		<div class="container pt-4 pb-4">
			<div class="card shadow-sm">
				<div class="card-body">
					<h1 class="card-title">{{ post.title }}</h1>

					<div class="mb-2">
						<FaIcon icon="calendar" class="mr-2" />
						<small class="text-muted">{{ post.date }}</small>
					</div>

					<div class="alert alert-info">{{ post.excerpt }}</div>
					<div class="card-text" v-html="post.content" />
				</div>
			</div>
			<div class="card shadow-sm mt-4">
				<div class="card-body">Author: {{ post.author.name }}</div>
			</div>
		</div>
	</Layout>
</template>

<script>
    import FaIcon from '../components/Fa';
    export default {
    	components: { FaIcon },
    	computed: {
    		post: function() {
    			return this.$page.post;
    		}
    	},
    	metaInfo() {
    		return {
    			title: this.post.title,
    			meta: [
    				{
    					name: 'description',
    					content: this.post.excerpt
    				}
    			]
    		};
    	}
    };
</script>

<page-query>
	query Post ($path: String!) {
		post: post (path: $path) {
			title
			excerpt
			content
			date (format:"DD.MM.YYYY")
			author {
				name
			}
		}
	}
</page-query>
