<template>
	<Layout>
		<div
			id="banner"
			class="bg-light mb-0 d-flex align-items-center justify-content-center"
			style="min-height: 380px;"
		>
			<div class="text-center">
				<div class="mt-3">
					<button class="btn btn-primary shadow">
						Custom Action
					</button>
				</div>
			</div>
		</div>

		<div class="container pt-4 pb-4">
			<div class="card shadow-sm">
				<div class="card-body">
					<div class="card-title">
						Willkommen auf {{ $page.metaData.siteName }}
					</div>
					{{ $page.metaData.siteDescription }}
				</div>
			</div>

			<h2 class="mt-4">Einträge</h2>
			<div
				class="card shadow-sm mt-4"
				v-for="post of posts"
				:key="post.id"
			>
				<div class="card-body">
					<div class="card-title">
						<div>{{ post.category.title }} - {{ post.title }}</div>
						<small class="text-muted">{{ post.date }}</small>
					</div>
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

			<div class="card mt-4">
				<div class="card-body">
					<div class="card-title">Categories</div>
					<button
						class="btn btn-sm btn-secondary mr-2"
						v-for="category of categories"
						:key="category.id"
					>
						{{ category.title }}
					</button>
				</div>
			</div>

			<div class="card mt-4">
				<div class="card-body">
					<div class="card-title">Tags</div>
					<button
						class="btn btn-sm btn-secondary mr-2"
						v-for="tag of tags"
						:key="tag.id"
					>
						#{{ tag.title }}
					</button>
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
    		},
    		tags: function() {
    			return this.$page
    				? this.$page.allTag.edges.map(e => new TagModel(e.node))
    				: [];
    		},
    		categories: function() {
    			return this.$page
    				? this.$page.allCategory.edges.map(
    						e => new CategoryModel(e.node)
    				  )
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

	allTag{
		edges {
			node {
				title
				path
			}
		}
	}
	allCategory {
		edges{
			node {
				title
				path
			}
		}
	}
}


</page-query>
