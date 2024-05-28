<template>
	<div>
		<h1>Bugs Reportados</h1>
		<ul>
			<li v-for="bug in bugs" :key="bug.id">{{ bug.bug }}</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'bugs-view',
	data() {
		return {
			bugs: []
		};
	},
	created() {
		this.fetchBugs();
	},
	methods: {
		fetchBugs() {
			this.$http.get('/bugs')
			.then(response => {
				this.bugs = response.data;
			})
			.catch(error => {
				console.error('Error obteniendo bugs:', error);
				alert('Obtencion de bugs fallido');
			});
		}
	}
};
</script>