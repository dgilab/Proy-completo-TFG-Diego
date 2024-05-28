<template>
	<div class="MEJN2-GlobalLayer">
		<div class="GlobalLayer">
			<svg ref="MapaSVG" class="MapaExpojoveNivel2" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:svg="http://www.w3.org/2000/svg" viewBox="0 0 499.9 828">
				<MEN2/>
				<MarcadoresPabellones/>
			</svg>
		</div>
	</div>
</template>

<script>

import { mapActions } from 'vuex'

import MEN2 from './BaseLayers/MEN2.vue'
import MarcadoresPabellones from './MarcadoresPab/MarcadoresPabellones.vue'

export default {
	name: 'GlobalLayer',
	components: {
		MEN2,
		MarcadoresPabellones
	},
	methods: {
		...mapActions([
			'referenciarSVG',
		]),
	},
	mounted(){
		this.referenciarSVG(this.$refs.MapaSVG)
	}
}
</script>

<style lang="scss" scoped>
.MEJN2-GlobalLayer{
	display: flex;
	align-items: center;
	justify-content: center;
	width: 50%;
}

.GlobalLayer{
	width: 60%;
}
.MapaExpojoveNivel2{
	filter: var(--build-sombra-base);
	transition: all .3s;
	
}
</style>