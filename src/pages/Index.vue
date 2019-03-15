<template>
	<Layout>
		<div class="container pt-4 pb-4">
			<div
				class="d-flex align-items-center justify-content-center"
				style="height: 380px;"
			>
				<div
					class="d-flex flex-column align-items-center justify-items-center pt-4 pb-4"
				>
					<div>
						<g-image
							width="180"
							src="~/assets/images/author.png"
							class="rounded-circle"
						/>
					</div>
					<h1 class="display-4">{{ $page.metaData.siteName }}</h1>
					<p>{{ $page.metaData.siteDescription }}</p>
					<div class="text-center">
						<button class="btn btn-primary shadow">
							Custom Action
						</button>
					</div>
				</div>
			</div>

			<div class="posts">
				<div
					class="card shadow-sm mt-4"
					v-for="post of posts"
					:key="post.id"
				>
					<div class="card-body">
						<h5 class="card-title">
							<div>
								{{ post.category.title }} - {{ post.title }}
							</div>
							<small class="text-muted">{{ post.date }}</small>
						</h5>
						<div class="card-text">
							<p>{{ post.excerpt }}</p>
						</div>

						<div class="mt-2">
							<g-link
								v-for="tag of post.tags"
								:key="tag.id"
								class="btn btn-secondary btn-sm shadow-sm"
								:to="tag.path"
								exact
							>
								#{{ tag.title }}
							</g-link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</Layout>
</template>

<script>
    export default {
    	computed: {
    		posts: function() {
    			return this.$page
    				? this.$page.allPost.edges.map(e => new PostModel(e.node))
    				: [];
    		}
    	}
    };

    class PostModel {
    	constructor(dto) {
    		return { ...dto };
    	}

    	id;
    	title;
    	path;
    }

    class TagModel {
    	constructor(dto) {
    		return { ...dto };
    	}
    }

    class CategoryModel {
    	constructor(dto) {
    		return { ...dto };
    	}
    }
</script>

<style>
    /* .posts .card:hover {
                    	cursor: pointer;
                    } */
</style>

<page-query>
{
  	allPost {
		totalCount
		pageInfo {
			totalPages
			currentPage
		}
		edges {
			node {
				id
				title
				path
				excerpt
				date (format:"DD.MM.YYYY")
				tags {
					title
					path
				}
				author {
					name
				}
				category {
					title
				}
			}
		}
  	}

	metaData {
		siteName
		siteDescription
	}
}


</page-query>
