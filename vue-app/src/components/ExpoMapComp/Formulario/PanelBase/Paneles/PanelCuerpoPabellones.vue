<template>
	<div class="Panel_cuerpo_pab">
        <div class="Cont_compo">
            <div class="Ppabellones">
                <div class="cpm TituloPanelPabellones">
                    <h1>Pabellones</h1>
                </div>
                <div class="cpm g_cont_pabe" v-if="!HayZoomActivo || DesplegP1">
                    <SelectPabellones :pabProp="nomP1" :idProp="idP1" :variMost="vM1" :idFlecha="idflecha1" :despleg="DesplegP1"/>
                    <transition name="despleg">
                        <div v-if="DesplegP1">
                            <DesplePabellones :pabNom="nomP1" :idProp="idPabe1" :variMost="vM1" :idRelacMap="idP1" :despleg="DesplegP1"/>
                            <div v-if="HayZoomActivo && DesplegP1" class="desLeyenda" > <!-- Si el zoom está activo y en el caso de que el zoom sea sobre el pabellón 4 se mostrará el componente -->
                                <LeyendaPuestos :leMost="leDataP1"/>
                            </div>
                            <div v-if="HayZoomActivo && DesplegP1" class="desInfoStands" >
                                <InfoStands :selPab="idP1"/>
                            </div>
                        </div>
                    </transition>
                </div>
                <div class="cpm g_cont_pabe" v-if="!HayZoomActivo || DesplegP2">
                    <SelectPabellones :pabProp="nomP2" :idProp="idP2" :variMost="vM2" :idFlecha="idflecha2" :despleg="DesplegP2" />
                    <transition name="despleg">
                        <div v-if="DesplegP2">
                            <DesplePabellones :pabNom="nomP2" :idProp="idPabe2" :variMost="vM2" :idRelacMap="idP2" :despleg="DesplegP2"/>
                            <div v-if="HayZoomActivo && DesplegP2" class="desLeyenda" > <!-- Si el zoom está activo y en el caso de que el zoom sea sobre el pabellón 4 se mostrará el componente -->
                                <LeyendaPuestos :leMost="leDataP2"/>
                            </div>
                            <div v-if="HayZoomActivo && DesplegP2" class="desInfoStands" >
                                <InfoStands :selPab="idP2"/>
                            </div>
                        </div>
                    </transition>
                </div>
                <div class="cpm g_cont_pabe" v-if="!HayZoomActivo || DesplegP3">
                    <SelectPabellones :pabProp="nomP3" :idProp="idP3" :variMost="vM3" :idFlecha="idflecha3" :despleg="DesplegP3" />
                    <transition name="despleg">
                        <div v-if="DesplegP3">
                            <DesplePabellones :pabNom="nomP3" :idProp="idPabe3" :variMost="vM3" :idRelacMap="idP3" :despleg="DesplegP3"/>
                        </div>
                    </transition>
                </div>
                <div class="cpm g_cont_pabe" v-if="!HayZoomActivo || DesplegP4">
                    <SelectPabellones :pabProp="nomP4" :idProp="idP4" :variMost="vM4" :idFlecha="idflecha4" :despleg="DesplegP4" />
                    <transition name="despleg">
                        <div v-if="DesplegP4">
                            <DesplePabellones :pabNom="nomP4" :idProp="idPabe4" :variMost="vM4" :idRelacMap="idP4" :despleg="DesplegP4"/>
                            <div v-if="HayZoomActivo && DesplegP4" class="desLeyenda" > <!-- Si el zoom está activo y en el caso de que el zoom sea sobre el pabellón 4 se mostrará el componente -->
                                <LeyendaPuestos :leMost="leDataP4"/>
                            </div>
                            <div v-if="HayZoomActivo && DesplegP4" class="desInfoStands" >
                                <InfoStands :selPab="idP4"/>
                            </div>
                        </div>
                    </transition>
                </div>
            </div>

        </div>
    </div>
</template>

<script>

import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'

import SelectPabellones from '../Seleccionables/SelectPabellones'
import DesplePabellones from '../Desplegables/DesplePabellones'
import LeyendaPuestos from '../Leyenda/LeyendaPuestos'
import InfoStands from '../Informacion/InfoStands'


export default {
	name: 'PanelCuerpoPabellones',
    data () {
        return {
            nomP1: "Pabellón 1",
            nomP2: "Pabellón 2",
            nomP3: "Pabellón 3",
            nomP4: "Pabellón 4",
            idP1: "bp1",
            idP2: "bp2",
            idP3: "bp3",
            idP4: "bp4",
            vM1: "desP1",
            vM2: "desP2",
            vM3: "desP3",
            vM4: "desP4",

            idPabe1: "idPabe1",
            
            idflecha1: "fleP1",
            idflecha2: "fleP2",
            idflecha3: "fleP3",
            idflecha4: "fleP4",

            leDataP1: [1,2,3],
            leDataP2: [1,2],
            leDataP4: [1,2],

        }
    },
    components: {
        SelectPabellones,
        DesplePabellones,
        LeyendaPuestos,
        InfoStands,
	},
    computed: {
		...mapGetters([
            'DesplegP1',
            'DesplegP2',
            'DesplegP3',
            'DesplegP4',
            'InfoPabesDesp',
            'HayZoomActivo',
		]),
	},
    methods: {
		...mapActions([
        ])
	}

}
</script>

<style lang="scss" scoped>
.Panel_cuerpo_pab{
    padding-block-end: 5%;
    width: 100%;
}
.Cont_compo{
    border-radius: 15px;
    background: var(--build-color-white);
    display: block;
    padding: 2%;
}

.cpm{
    padding: 1% 0% 1% 0%;
}

.Ppabellones{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}

.TituloPanelPabellones{
    h1{
        text-align: center;
        font-size: 2vw;
        font-weight: bold;
    }
}


.g_cont_pabe{
    width:80%;
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.desLeyenda{
    margin-top: 0.5rem;
    display: block;
}
.desInfoStands{
    margin-top: 0.5rem;
    display: block;
}





</style>