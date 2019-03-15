<template>
	<Layout>
		<div class="container pt-4 pb-4">
			<div class="card shadow-sm">
				<div class="card-body">
					<h1 class="card-title">{{ $page.tag.title }}</h1>
					<ul>
						<li
							v-for="edge in $page.tag.belongsTo.edges"
							:key="edge.node.id"
						>
							<g-link :to="edge.node.path">{{
								edge.node.title
							}}</g-link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</Layout>
</template>

<page-query>
query Tag ($id: String!) {
  tag (id: $id) {
    title
    belongsTo {
      edges {
        node {
          ...on Post {
            id
            title
            path
          }
        }
      }
    }
  }
}
</page-query>
