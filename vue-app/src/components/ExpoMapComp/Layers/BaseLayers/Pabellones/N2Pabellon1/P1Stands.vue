<template>
	<g id="standsp1">
		<polygon v-for="pol in stands.polygons" :key="pol.points" :id="pol.id" :data-name="pol.data_name" class="cls_2 spc1" :points="pol.points" @click="selStand($event)"/>
		<path v-for="pat in stands.paths" :key="pat.d" :id="pat.id" :data-name="pat.data_name" class="cls_2 spc1" :d="pat.d" @click="selStand($event)"/>
	</g>
</template>

<script>
import { mapState } from 'vuex';


export default {
	name: 'P1Stands',
	data(){
		return {
		}
	},
	computed: {
		...mapState({
			stands: state => state.Stands.StandsP1
		})
	},
	methods: {
		selStand(e){
			console.log(e.target.id + '_d')
		}
	}
}
</script>

<style lang="scss" scoped>
.spc1:hover{
	fill: var(--build-color-stands-hover);
}

</style>