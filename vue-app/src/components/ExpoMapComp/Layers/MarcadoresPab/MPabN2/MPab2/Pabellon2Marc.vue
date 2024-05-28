<template>
	<g id="MP2_2">
		<g :id="MCafep2.id" v-if="false">
			<path v-for="pathCaf in MCafep2.paths" :key="pathCaf.d" :id="pathCaf.id" :data-name="pathCaf.data_name" class="cls_14" :d="pathCaf.d"/>
		</g>
		<g :id="MStandsp2.id">
			<path v-for="pathStds in MStandsp2.paths" :key="pathStds.d" :id="pathStds.id" :data-name="pathStds.data_name" class="cls_14 oculto" :d="pathStds.d"/>
		</g>
	</g>
</template>

<script>


import { mapState } from 'vuex';
import { mapGetters } from 'vuex';

export default {
	name: "Pabellon2Marc",
	data(){
		return {
		}
	},
	computed: {
		...mapState({
			// MCafep2: state => state.MarcP.MP2_2.MCafep2,
			// MStandsp2: state => state.MarcP.MP2_2.MStandsp2,
		}),
		...mapGetters([
			'MCafep2',
			'MStandsp2',
		]),
	},
	components: {
	}
}
</script>

<style>

</style>