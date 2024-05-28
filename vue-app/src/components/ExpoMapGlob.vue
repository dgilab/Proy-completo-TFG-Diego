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
		actuEstadoServicios(){ // Prepara los servicios antes de cerrar la página para evitar pérdida de datos
			this.valorInicial(false)
		}
	},
	mounted(){ // Al cargar el componente, registra un evento para preparar los servicios antes de cerrar la página
		window.addEventListener('beforeunload', this.actuEstadoServicios)
	},
	beforeUnmount() {// Antes de desmontar el componente, elimina el registro del evento para evitar problemas de memoria
		window.removeEventListener('beforeunload', this.actuEstadoServicios);
	},
}
</script>

<style lang="scss" scoped>
.ExpoMapGlob{
	overflow: hidden;
}

</style>