<template>
	<g id="DPuestosGen">
		<transition name="mostP">
			<ServicioInterior v-if="MostLabavos"/>
		</transition>
		<transition name="mostP">
			<SalidasEmergencia v-if="MostSalidaEmergencia"/>
		</transition>
		<transition name="mostP">
			<FoodTruck v-if="MostFoodTrucks"/>
		</transition>
	</g>
</template>

<script>

import { mapGetters } from 'vuex'

import ServicioInterior from './Puestos/ServiciosInterior.vue'
import SalidasEmergencia from './Puestos/SalidasEmergencia.vue'
import FoodTruck from './Puestos/FoodTruck.vue'

export default {
	name: 'DestallesGeneralLayer',
	components: {
		ServicioInterior,
		SalidasEmergencia,
		FoodTruck,
	},
	computed: {
		...mapGetters([
			'MostLabavos',
			'MostSalidaEmergencia',
			'MostFoodTrucks'
		]),
	}
}
</script>

<style lang="scss" scoped>

</style>