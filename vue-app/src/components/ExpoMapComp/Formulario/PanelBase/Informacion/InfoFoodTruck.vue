<template>
	<div class="InfoFoodTruck">
        <div class="Contenido_ft">
            <div v-for="ift in DatosFoodTrucks" :key="ift.id" :id="ift.id" :data-id="ift.data_id" class="foodtruck" @click="verFTenelMapa(ift)"> <!-- El Tag data-id hace referencia al id de los puntos del marca de los FoodTrucks -->
                <IconFlechaIzq class="flecha"/>
                <p class="textoFT">{{ ift.nombre_ft }}</p>
            </div>
        </div>
	</div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'
import IconFlechaIzq from '../Iconos/IconFlechaIzq.vue'

export default {
	name: 'InfoFoodTruck',
    props: {
        textProp: String,
    },
    methods: {
		...mapActions([
            'verFTenelMapa',
        ])
	},
    computed: {
        ...mapGetters([
            'DatosFoodTrucks',
        ])
    },
    components: {
        IconFlechaIzq
    },

}
</script>

<style lang="scss" scoped>

.InfoFoodTruck{
    width: 90%;
    padding: 1vh;
    border-radius: 30px 0px;
    background: var(--build-color-light-grey);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.Contenido_ft{
    width: 90%;
    display: block;
    justify-content: space-around;
    align-items: center;
}

.foodtruck{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 1vh;
    cursor: pointer;
    transition: all 0.5s;
    border-radius: 15px;
    .flecha{
        transition: all 0.5s;
    }
}
.foodtruck:hover{
    background: var(--build-color-morado-floral);
    color: var(--build-color-azul-claro);
    .flecha{
        fill: var(--build-color-azul-claro);
    }
}
.flecha{
    width: 10%;
    height: 10%;
    
}

.textoFT{
    text-align: left;
    width: 80%;
    margin: 0;
}

</style>