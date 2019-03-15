<template>
	<div class="card shadow-sm mt-4">
		<div class="card-body">
			<h5 class="card-title">
				<div>{{ post.category.title }} - {{ post.title }}</div>
				<small class="text-muted">{{ post.date }}</small>
			</h5>
			<div class="card-text">
				<p>{{ post.excerpt }}</p>
			</div>

			<div class="mt-2">
				<Tag v-for="tag of post.tags" :key="tag.id" :tag="tag" />
			</div>

			<g-link class="post-card__link" :to="post.path">Link</g-link>
		</div>
	</div>
</template>

<script>
	import Tag from './Tag';
    export default {
		props: ['post'],
		components: { Tag }
    };
</script>

<style>
    .posts .card:hover {
    	cursor: pointer;
    	transform: translateY(-2px);
    	box-shadow: 1px 10px 30px 0 rgba(0, 0, 0, 0.1);
    }

    .post-card__link {
    	position: absolute;
    	top: 0;
    	left: 0;
    	width: 100%;
    	height: 100%;
    	opacity: 0;
    	overflow: hidden;
    	text-indent: -9999px;
    	z-index: 0;
    }
</style>
