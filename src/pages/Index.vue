<template>
  <Layout>
    <div
      class="bg-light mb-0 d-flex align-items-center justify-content-center"
      style="min-height: 380px;"
    >
      <div class="text-center">
        <!-- <img src="./assets/img/logo-metaro-alternative.svg"> -->
        <div class="mt-3">
          <button class="btn btn-primary shadow">Kontaktieren Sie uns</button>
        </div>
      </div>
    </div>

    <div class="container pt-3 pb-4">
      <h2>Einträge</h2>
      <div class="card shadow-sm mb-3" v-for="post of posts" :key="post.id">
        <div class="card-body">
          <div class="card-title">{{ post.title }}</div>
          <div class="card-text">{{ post.excerpt }}</div>
          <div class="mt-2">
            <!-- <g-link class="btn btn-primary btn-sm shadow-sm" :to="post.path" exact>mehr</g-link> -->
            <g-link
              v-for="tag of post.tags"
              :key="tag.id"
              class="btn btn-secondary btn-sm shadow-sm"
              :to="post.path"
              exact
            >
				#{{ tag.title }}
			</g-link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

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
			date (format: "D. MMMM YYYY")
			excerpt
			tags {
				id
				title
				slug
				path
			}
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "Home"
  },
  mounted() {},
  computed: {
    posts: function() {
      console.warn(this.$page.allPost.edges);
      return this.$page
        ? this.$page.allPost.edges.map(e => ({
            id: e.node.id,
            title: e.node.title,
            path: e.node.path,
            date: e.node.date,
            excerpt: e.node.excerpt,
            tags: e.node.tags
          }))
        : [];
    }
  }
};
</script>
