<template>
	<g class="Servicios">
		<g v-for="g in this.store.state.Servicios_Retretes" :key="g.id" :id="g.id" :data-name="g.data_name">
			<path v-for="path in g.paths" :key="path.d" :class="path.class" :d="path.d"/>
		</g>
	</g>
</template>

<script>

import { useStore } from 'vuex'

export default {
	name: 'ServicioInterior',
	data(){
		return {
			store: useStore(),
		}
	}
}
</script>

<style>

</style>