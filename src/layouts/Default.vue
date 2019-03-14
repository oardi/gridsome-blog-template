<template>
	<div class="layout d-flex flex-column h-100">
		<header class="header">
			<nav
				class="navbar fixed-top navbar-expand-md navbar-light bg-light shadow"
			>
				<div class="container">
					<g-link class="navbar-brand text-primary" to="/" exact>{{
						$static.metaData.siteName
					}}</g-link>

					<button
						class="navbar-toggler btn btn-sm"
						type="button"
						@click="toggleCollapse()"
					>
						<app-fa v-if="!this.isMenuCollapsed" icon="bars" />
						<app-fa v-if="this.isMenuCollapsed" icon="times" />
					</button>
					<div
						:class="{ show: isMenuCollapsed }"
						class="collapse navbar-collapse mt-2 mt-md-0 justify-content-end"
					>
						<ul class="navbar-nav">
							<li class="nav-item">
								<g-link class="nav-link" to="/" exact>
									Home
								</g-link>
							</li>
							<li class="nav-item">
								<g-link
									class="nav-link"
									to="/datenschutz"
									exact
								>
									Datenschutz
								</g-link>
							</li>
							<li class="nav-item">
								<g-link class="nav-link" to="/impressum" exact>
									Impressum
								</g-link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>

		<transition name="expand" appear>
			<main>
				<slot />
			</main>
		</transition>

		<footer class="mt-4">
			<div class="text-center p-2">
				<span>
					©{{ new Date().getFullYear() }} -
					{{ $static.metaData.siteName }}
				</span>
				&nbsp;
				<g-link class="nav-item" to="/datenschutz" exact>
					Datenschutz
				</g-link>
				&nbsp;
				<g-link class="nav-item" to="/impressum" exact>
					Impressum
				</g-link>
			</div>
		</footer>
	</div>
</template>

<static-query>
query {
	metaData {
		siteName
	}
}
</static-query>

<script>
    export default {
    	data: () => {
    		return {
    			isMenuCollapsed: false
    		};
    	},
    	methods: {
    		toggleCollapse() {
    			this.isMenuCollapsed = !this.isMenuCollapsed;
    		}
    	}
    };
</script>

<style lang="scss">
    $enable-shadows: true;
    @import '~bootstrap/scss/bootstrap';

    body {
    	padding-top: 58px;
    	background-color: theme-color('light');
    }

    #banner {
    	background: url(../../static/banner.jpg) center center;
    	background-size: cover;
    }

    .expand-enter-active,
    .expand-leave-active {
    	transition: opacity 1s;
    }

    .expand-enter,
    .expand-leave-to {
    	opacity: 0;
    }

	.card {
		border-color: white;
	}
</style>
