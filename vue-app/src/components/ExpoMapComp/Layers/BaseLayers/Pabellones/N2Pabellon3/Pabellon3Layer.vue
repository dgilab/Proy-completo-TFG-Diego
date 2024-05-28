<template>
	<g id="Nivel2Pabellon3">
		<g id="capaPabellon3">
			<title>Pabellón 3</title>
			<polygon v-if="EventosActvosPB3" id="bp3" class="cls_8 cbp3" data-vari="desP3" v-on:click="zoomIn($event) , invertirValorVar($event)" points="275.55 53.15 365.1 53.15 454.65 53.15 454.65 222 454.65 390.85 365.1 390.85 275.55 390.85 275.55 222 275.55 53.15" />
			<polygon v-else id="bp3" class="cls_8" points="275.55 53.15 365.1 53.15 454.65 53.15 454.65 222 454.65 390.85 365.1 390.85 275.55 390.85 275.55 222 275.55 53.15" />
		</g>
		<transition name="mostP">
			<g id="Pabellon3" v-if="MostrarIntPab3">
				<path id="activp3_01" data-name="activp3 01" class="cls_9" d="M288.25,57.25h153.8c2,0,3.8.88,5.1,2.29s2.1,3.36,2.1,5.51v311.4c0,2.15-.8,4.1-2.1,5.51s-3.1,2.29-5.1,2.29h-153.8c-2,0-3.8-.88-5.1-2.29s-2.1-3.36-2.1-5.51V65.05c0-2.15.8-4.1,2.1-5.51s3.1-2.29,5.1-2.29h0Z"/>
				<g id="tp3_01" data-name="tp3 01" class="cls_13">
					<text class="cls_13" transform="translate(301.35 214.05)"><tspan x="0" y="0">ATRACCIONES</tspan></text>
					<text class="cls_13" transform="translate(324.95 239.25)"><tspan x="0" y="0">DE FERIA</tspan></text>
				</g>
			</g>
		</transition>
	</g>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'

export default {
	name: 'Pabellon3Layer',
	methods: {
		...mapActions([
			'eventHover',
			'zoomIn',
			'invertirValorVar'
		]),
	},
	computed: {
		...mapGetters([
			'EventosActvosPB3',
			'MostrarIntPab3',
		])
	}
}
</script>

<style lang="scss" scoped>
.cbp3:hover{
	fill: var(--build-color-azul-verdoso);
	box-shadow: var(--build-sombra-base);
	transform: var(--build-escalado-base);
	transform-origin: var(--build-transform-origin-hover);
}

</style>