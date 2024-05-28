<template>
	<g id="Nivel2Pabellon1">
		<g id="capaPabellon1">
			<title>Pabellón 1</title>
			<polygon v-if="EventosActvosPB1" id="bp1" class="cls_8 cbp1" data-name="cerrado" data-vari="desP1" v-on:click="zoomIn($event), invertirValorVar($event)" points="275.45 440.25 365.1 440.25 454.75 440.25 454.75 609.3 454.75 778.35 365.1 778.35 275.45 778.35 275.45 609.3 275.45 440.25" />
			<polygon v-else id="bp1" class="cls_8" data-name="abierto" points="275.45 440.25 365.1 440.25 454.75 440.25 454.75 609.3 454.75 778.35 365.1 778.35 275.45 778.35 275.45 609.3 275.45 440.25" />
		</g>
		<transition name="mostP">
			<g id="Pabellon1" v-if="MostrarIntPab1">
				<P1Cafeteria/>
				<P1Escenario/>
				<P1Stands/>
			</g>
		</transition>
	</g>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'

import P1Cafeteria from './P1Cafeteria.vue'
import P1Escenario from './P1Escenario.vue'
import P1Stands from './P1Stands.vue'

export default {
	name: 'Pabellon1Layer',
	components: {
		P1Cafeteria,
		P1Escenario,
		P1Stands
	},
	data(){
		return {
			activo: false
		}
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
			'EventosActvosPB1',
			'MostrarIntPab1',
		])
	}
}
</script>

<style lang="scss" scoped>

.cbp1:hover{
	fill: var(--build-color-azul-verdoso);
	box-shadow: var(--build-sombra-base);
	transform: var(--build-escalado-base);
	transform-origin: var(--build-transform-origin-hover);
}

</style>