<template>
	<g id="SalidasEmergencia">
		<g id="se_Exterior" data-name="se Exterior">
			<g v-for="g in this.store.state.salidaEm_Exterior" :key="g.id" :id="g.id" :data-name="g.data_name">
				<path v-for="path in g.paths" :key="path.d" :class="path.class" :d="path.d"/>
				<polygon v-for="polygon in g.polygons" :key="polygon.points" :class="polygon.class" :points="polygon.points"/>
			</g>
		</g>
		<g id="se_Interior" data-name="se Interior">
			<g v-for="g in this.store.state.salidaEm_Interior" :key="g.id" :id="g.id" :data-name="g.data_name">
				<path v-for="path in g.paths" :key="path.d" :class="path.class" :d="path.d"/>
				<polygon v-for="polygon in g.polygons" :key="polygon.points" :class="polygon.class" :points="polygon.points"/>
			</g>
		</g>
	</g>
</template>

<script>

import { useStore } from 'vuex'

export default {
	name: 'SalidasEmergencia',
	data(){
		return {
			store: useStore(),
		}
	}
}
</script>

<style>

</style>