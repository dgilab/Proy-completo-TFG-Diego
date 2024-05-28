<template>
	<g id="FoodTruck">
		<polygon v-for="ft in this.store.state.FoodTrucks" :key="ft.points" class="cls_7" :id="ft.id" :data-name="ft.data_name" :points="ft.points"/>
	</g>
</template>

<script>

import { useStore } from 'vuex'

export default {
	name: 'FoodTruck',
	data(){
		return {
			store: useStore(),
		}
	}
}
</script>

<style>

</style>