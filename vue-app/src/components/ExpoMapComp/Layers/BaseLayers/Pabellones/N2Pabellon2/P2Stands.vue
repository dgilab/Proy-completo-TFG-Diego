<template>
	<g id="standsp2">
		<polygon v-for="p in stands.polygons" :key="p.points" :id="p.id" :data-name="p.data_name" class="cls_2 spc2" :points="p.points"/>
	</g>
</template>

<script>
import { mapState } from 'vuex';


export default {
	name: 'P2Stands',
	data(){
		return {
		}
	},
	computed: {
		...mapState({
			stands: state => state.Stands.StandsP2
		})
	}
}
</script>

<style lang="scss" scoped>
.spc2:hover{
	fill: var(--build-color-stands-hover);
}

</style>