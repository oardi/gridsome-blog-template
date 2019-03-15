<template functional>
	<div class="card shadow-sm">
		<div class="card-body">
			<h1 v-if="props.title" class="card-title">
				{{ props.title }}
			</h1>
			<div class="card-text">
				<slot />
			</div>
		</div>
	</div>
</template>
