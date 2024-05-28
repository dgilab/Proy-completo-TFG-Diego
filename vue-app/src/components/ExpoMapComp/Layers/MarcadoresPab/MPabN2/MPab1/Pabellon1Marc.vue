<template>
	<g id="MP1_2">
		<g :id="MCafep1.id" v-if="false">
			<path v-for="pathCaf in MCafep1.paths" :key="pathCaf.d" :id="pathCaf.id" :data-name="pathCaf.data_name" class="cls_14" :d="pathCaf.d"/>
		</g>
		<g :id="MEscenp1.id" v-if="false">
			<path v-for="pathMEs in MEscenp1.paths" :key="pathMEs.d" :id="pathMEs.id" :data-name="pathMEs.data_name" class="cls_14" :d="pathMEs.d"/>
			</g>
		<g :id="MStandsp1.id">
			<path v-for="pathStds in MStandsp1.paths" :key="pathStds.d" :id="pathStds.id" :data-name="pathStds.data_name" class="cls_14 oculto" :d="pathStds.d"/>
		</g>
	</g>
</template>

<script>


import { mapState } from 'vuex';
import { mapGetters } from 'vuex';

export default {
	name: "Pabellon1Marc",
	data(){
		return {
		}
	},
	computed: {
		...mapState({
		}),
		...mapGetters([
			'MCafep1',
			'MEscenp1',
			'MStandsp1',
		]),
	},
	components: {
	}
}
</script>

<style>

</style>