<template>
	<g id="Nivel2Pabellon4">
		<g id="capaPabellon4">
			<title>Pabellón 4</title>
			<polygon v-if="EventosActvosPB4" id="bp4" class="cls_8 cbp4" data-vari="desP4" v-on:click="zoomIn($event) , invertirValorVar($event)" points="41.55 53.15 131.15 53.15 220.75 53.15 220.75 222.05 220.75 390.95 131.15 390.95 41.55 390.95 41.55 222.05 41.55 53.15" />
			<polygon v-else id="bp4" class="cls_8" points="41.55 53.15 131.15 53.15 220.75 53.15 220.75 222.05 220.75 390.95 131.15 390.95 41.55 390.95 41.55 222.05 41.55 53.15" />
		</g>
		<transition name="mostP">
			<g id="Pabellon4" v-if="MostrarIntPab4">
				<P4Cafeteria/>
				<P4Stands/>
			</g>
		</transition>
	</g>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'


import P4Cafeteria from './P4Cafeteria.vue'
import P4Stands from './P4Stands.vue'

export default {
	name: 'Pabellon4Layer',
	components: {
		P4Cafeteria,
		P4Stands
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
			'EventosActvosPB4',
			'MostrarIntPab4',
		])
	}
}
</script>

<style lang="scss" scoped>
.cbp4:hover{
	fill: var(--build-color-azul-verdoso);
	box-shadow: var(--build-sombra-base);
	transform: var(--build-escalado-base);
	transform-origin: var(--build-transform-origin-hover);
}

</style>