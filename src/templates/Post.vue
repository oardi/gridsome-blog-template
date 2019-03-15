<template>
	<Layout>
		<div class="container pt-4 pb-4">
			<div
				class="d-flex align-items-center justify-content-center text-center"
				style="height: 300px;"
			>
				<div
					class="d-flex flex-column align-items-center justify-items-center pt-4 pb-4"
				>
					<h1 class="display-4">{{ post.title }}</h1>
					<p class="text-muted">
						<FaIcon icon="calendar" />
						{{ post.date }}
					</p>
				</div>
			</div>

			<div class="card shadow-sm">
				<div class="card-body">
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
