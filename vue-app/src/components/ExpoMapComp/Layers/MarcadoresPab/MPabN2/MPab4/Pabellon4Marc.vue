<template>
	<g id="MP4_2">
		<g :id="MCafep4.id" v-if="false">
			<path v-for="pathCaf in MCafep4.paths" :key="pathCaf.d" :id="pathCaf.id" :data-name="pathCaf.data_name" class="cls_14" :d="pathCaf.d"/>
		</g>
		<g :id="MStandsp4.id">
			<path v-for="pathStds in MStandsp4.paths" :key="pathStds.d" :id="pathStds.id" :data-name="pathStds.data_name" class="cls_14 oculto" :d="pathStds.d"/>
		</g>
	</g>
</template>

<script>


import { mapState } from 'vuex';
import { mapGetters } from 'vuex';

export default {
	name: "Pabellon4Marc",
	data(){
		return {
		}
	},
	computed: {
		...mapState({
			// MCafep4: state => state.MarcP.MP4_2.MCafep4,
			// MStandsp4: state => state.MarcP.MP4_2.MStandsp4,
		}),
		...mapGetters([
			'MCafep4', 
			'MStandsp4'
		])
	},
	components: {
	}
}
</script>

<style>

</style>