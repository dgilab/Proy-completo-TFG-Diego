<template>
	<g id="MPG">
		<g v-for="marcador in MGrandesPuntos" :key="marcador.id" :id="marcador.id" v-show="marcador.mostrado" >
			<path v-for="pat in marcador.paths" :key="pat.d" class="cls_1" :d="pat.d"/>
		</g>
	</g>
</template>

<script>


import { mapState } from 'vuex';
import { mapGetters } from 'vuex';

export default {
	name: "MPGrandes",
	data(){
		return {
		}
	},
	computed: {
		...mapState({
			// MGrandesPuntos: state => state.MarcadoresGlobGrand
		}),
		...mapGetters([
			'MGrandesPuntos', // Lista de Objetos con los datos de los Marcadores grandes
		])
	},
	components: {
	}
}
</script>

<style lang="scss" scoped>


</style>