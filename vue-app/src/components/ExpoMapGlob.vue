<template>
	<div class="ExpoMapGlob">
		<MapaExpojoveNivel2/>
	</div>
</template>

<script>
import { useStore, mapActions } from 'vuex'

import MapaExpojoveNivel2 from '@/components/ExpoMapComp/MapExpoJoNivel2.vue';


export default {
	name: 'ExpoMapGlob',
	components: {
		MapaExpojoveNivel2
	},
	data(){
		return {
			store: useStore(),
		}
	},
	computed: {
	},
	methods: {
		...mapActions([ 'valorInicial']),
		actuEstadoServicios(){
			this.valorInicial(false)
		}
	},
	mounted(){
		window.addEventListener('beforeunload', this.actuEstadoServicios)
	},
	beforeUnmount() {
		window.removeEventListener('beforeunload', this.actuEstadoServicios);
	},
}
</script>

<style lang="scss" scoped>
.ExpoMapGlob{
	overflow: hidden;
}

</style>