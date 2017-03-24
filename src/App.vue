<template>
  <div id="app">
	<div class="container">
		<section class="section">
			<h1 class="title is-1">Mail</h1>
			<div class="columns is-multiline is-mobile">
				<div class="column is-narrow">
					<div class="box sidebar">
						<router-link :to="'/'" class="compose-btn button is-info">
							<strong>Compose</strong>
						</router-link>
						<router-link :to="'/'" class="inbox-btn">
							<strong>Inbox</strong>
						</router-link>
					</div>
				</div>
				<div class="column">
					<router-view></router-view>
				</div>
			</div>
		</section>
	</div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
	.sidebar {
		width: 200px;
	}
	.compose-btn {
	    margin-bottom: 20px;
	    width: 100%;
	}
	.inbox-btn {
		display: block;
	}
</style>
