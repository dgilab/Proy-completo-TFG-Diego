<template>
	<div class="InfoStands">
        <div class="InTit">
            <p>Info Stands</p>
        </div>
        <div class="cueInfoStand">
            <template v-if="selPab === 'bp1'">
                <div v-for="ift in DStandsPabellones.pab1" :key="ift.id" :id="ift.id" class="standsPab1Class" @click="mostrarMarcStands(ift.id)">
                    <IconFlechaIzq class="flecha"/>
                    <p class="textoFT">{{ ift.nombre }}</p>
                </div>
            </template>
            <template v-if="selPab === 'bp2'">
                <div v-for="ift in DStandsPabellones.pab2" :key="ift.id" :id="ift.id" class="standsPab1Class" @click="mostrarMarcStands(ift.id)">
                    <IconFlechaIzq class="flecha"/>
                    <p class="textoFT">{{ ift.nombre }}</p>
                </div>
            </template>
            <template v-if="selPab === 'bp4'">
                <div v-for="ift in DStandsPabellones.pab4" :key="ift.id" :id="ift.id" class="standsPab1Class" @click="mostrarMarcStands(ift.id)">
                    <IconFlechaIzq class="flecha"/>
                    <p class="textoFT">{{ ift.nombre }}</p>
                </div>
            </template>
        </div>
	</div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'
import IconFlechaIzq from '../Iconos/IconFlechaIzq.vue'

export default {
	name: 'InfoStands',
    props: {
        selPab: String,
    },
    methods: {
		...mapActions([
            'mostrarMarcStands',
        ]),
	},
    computed: {
        ...mapGetters([
            'DStandsPabellones',
        ])
    },
    components: {
        IconFlechaIzq,
    },

}
</script>

<style lang="scss" scoped>

.InfoStands{
    border-radius: 15px;
    background: var(--build-color-light-grey);
    // padding-block: 2%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
}

.InTit{
    width: 100%;
    font-size: 1.25vw;
    padding-block: 2%;
}
.cueInfoStand{
    border-radius: 0px 0px 15px 15px;
    background: var(--bs-gray-400);
    width: 100%;
    display: block;
    justify-content: space-around;
    align-items: center;
}

.standsPab1Class{
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: left;
    margin: 1vh;
    margin-left: 3rem;
    cursor: pointer;
    transition: all 0.5s;
    border-radius: 15px;
    .flecha{
        transition: all 0.5s;
        width: 10%;
        height: 10%;
        margin-right: 10px;
    }
}

.standsPab1Class:hover{
    background: var(--build-color-morado-floral);
    color: var(--build-color-azul-claro);
    .flecha{
        fill: var(--build-color-azul-claro);
    }
}

</style>