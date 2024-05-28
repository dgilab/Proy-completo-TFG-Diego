<template>
	<div class="Panel_cuerpo_int">
        <div class="Cont_compo">
            <div class="PInteres">
                <div class="TituloPanelInteres">
                    <h1>Puntos de Interés</h1>
                </div>
                <div class="g_cont_switch">
                    <SwitchersFormulario :idProp="idLavabos"/>
                    <SwitchersTexto :textProp="textSwitcherLabavos"/>
                </div>
                <div class="g_cont_switch">
                    <SwitchersFormulario :idProp="idEmergencia"/>
                    <SwitchersTexto :textProp="textSwitcherEmergencia"/>
                </div>
                <div class="g_cont_switch">
                    <SwitchersFormulario :idProp="idFoodTrucks"/>
                    <SwitchersTexto :textProp="textSwitcherFoodTrucks"/>
                </div>
                <transition name="mostP">
                    <div class="cont_inFoodTrucks" v-if="MostFoodTrucks">
                        <InfoFoodTruck/>
                    </div>
                </transition>
            </div>

        </div>
    </div>
</template>

<script>

import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'

import SwitchersFormulario from '../Switchers/SwitchersFormulario.vue'
import SwitchersTexto from '../Switchers/SwitchersTexto.vue'
import InfoFoodTruck from '../Informacion/InfoFoodTruck.vue'

export default {
	name: 'PanelCuerpoInteres',
    data () {
        return {
            idLavabos: "lavPubli",
            textSwitcherLabavos: "Mostrar Lavabos Públicos",
            idEmergencia: "salEmergen",
            textSwitcherEmergencia: "Mostrar Salidas de emergencia",
            idFoodTrucks: "foodTruck",
            textSwitcherFoodTrucks: "Mostrar FoodTrucks",
        }
    },
    components: {
		SwitchersFormulario,
        SwitchersTexto,
        InfoFoodTruck,
	},
    computed: {
		...mapGetters([
			'MostFoodTrucks'
		]),
	},
    methods: {
		...mapActions(['mostrarInteres'])
	}

}
</script>

<style lang="scss" scoped>
.Panel_cuerpo_int{
    padding-block-end: 5%;
    width: 100%;
}
.Cont_compo{
    border-radius: 15px;
    background: var(--build-color-white);
    display: block;
    padding: 2%;
}

.PInteres{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.TituloPanelInteres{
    h1{
        text-align: center;
        font-size: 2vw;
        font-weight: bold;
    }
}

.g_cont_switch{
    width:80%;
    display: flex;
    justify-content: flex-start;
}


.cont_inFoodTrucks{
    width:80%;
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>