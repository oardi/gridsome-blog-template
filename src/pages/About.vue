<template>
	<Layout>
		<div class="container pt-3 pb-4">
			<div
				class="d-flex align-items-center justify-content-center text-center"
				style="height: 300px;"
			>
				<h1 class="display-3">About</h1>
			</div>

			<Card title="Some Title">
				<p>
					lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
				</p>
			</Card>

		</div>
	</Layout>
</template>

<script>
    import Card from '../components/Card';
    export default {
    	components: { Card },
    	metaInfo: {
    		title: 'Datenschutz'
    	}
    };
</script>
