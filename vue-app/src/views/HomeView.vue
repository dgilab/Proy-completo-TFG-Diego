<template>
	<div class="expoMap-home">
		<div v-if="$route.name === 'global-map'" class="global">
			<ExpoMapGlob/>
		</div>
	</div>
</template>

<script>

import ExpoMapGlob from '@/components/ExpoMapGlob.vue';

export default {
	name: 'HomeView',
		components: {
			ExpoMapGlob,
		}
	}
</script>
