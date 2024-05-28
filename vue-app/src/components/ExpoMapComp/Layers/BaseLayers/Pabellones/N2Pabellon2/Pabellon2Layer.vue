<template>
	<g id="Nivel2Pabellon2">
		<g id="capaPabellon2">
			<title>Pabellón 2</title>
			<polygon v-if="EventosActvosPB2" id="bp2" class="cls_8 cbp2" data-vari="desP2" v-on:click="zoomIn($event) , invertirValorVar($event)" points="41.55 440.25 131.2 440.25 220.85 440.25 220.85 609.3 220.85 778.35 131.2 778.35 41.55 778.35 41.55 609.3 41.55 440.25" />
			<polygon v-else id="bp2" class="cls_8" points="41.55 440.25 131.2 440.25 220.85 440.25 220.85 609.3 220.85 778.35 131.2 778.35 41.55 778.35 41.55 609.3 41.55 440.25" />
		</g>
		<transition name="mostP">
			<g id="Pabellon2" v-if="MostrarIntPab2">
				<P2Cafeteria/>
				<P2Stands/>
			</g>
		</transition>
	</g>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import P2Cafeteria from './P2Cafeteria.vue'
import P2Stands from './P2Stands.vue'

export default {
	name: 'Pabellon2Layer',
	components: {
		P2Cafeteria,
		P2Stands
	},
	methods: {
		...mapActions([
			'eventHover',
			'zoomIn',
			'invertirValorVar'
		]),
	},
	computed: {
		...mapGetters([
			'EventosActvosPB2',
			'MostrarIntPab2',
		])
	}
}
</script>

<style lang="scss" scoped>
.cbp2:hover{
	fill: var(--build-color-azul-verdoso);
	box-shadow: var(--build-sombra-base);
	transform: var(--build-escalado-base);
	transform-origin: var(--build-transform-origin-hover);
}


</style>