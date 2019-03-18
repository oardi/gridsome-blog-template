<template functional>
	<div class="card shadow-sm">
		<div class="card-body">
			<div v-if="props.title" class="card-title">
				<div class="display-4">
					{{ props.title }}
				</div>
			</div>
			<div class="card-text">
				<slot />
			</div>
		</div>
	</div>
</template>
