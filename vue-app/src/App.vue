<template>
	<div class="expoMap">
		<router-view/>
	</div>
</template>

<style lang="scss">
:root{

	--build-color-black: #000000;
	--build-color-white: #ffffff;
	--build-color-light-grey: #ececec;


	// colores detalles pabellones
	--build-color-basePabellones: #ffffff;
	--build-color-baseMapa: #d6d5d1;
	--build-color-marcadores-grandes: #000000;
	--build-color-marcadores-pequenos: #e7e7e7;
	--build-color-escenarios: #fffb00;
	--build-color-cafeteias: #ffb700;
	--build-color-servicios: #6e91f8;
	--build-color-stands: #257c68;
	--build-color-salidasEmergencia: #23a55b;
	--build-color-foodTruck: #f60;


	--build-color-foodTruck-selected: #8d4311;


	--build-color-event-hover: #149f94;
	--build-color-stands-hover: #1e6b59;


	--build-sombra-base: drop-shadow( 1px 0px 10px #000000);
	--build-transicion-principal: 0.4s cubic-bezier(0, 0.02, 1, 1.01);
	--build-escalado-base: scale(1);
	--build-transform-origin-hover: 40% 40%;


	// Paleta de colores Azules/Morados
	--build-color-azul-verdoso: #9AD5CA;
	--build-color-azul-claro: #ACDDE7;
	--build-color-azul-morado: #ADB9E3;
	--build-color-morado-floral: #A379C9;
	--build-color-morado-llamativo: #B744B8;
}

*{
	font-family: 'Avenir Next', Avenir, 'Helvetica Neue', Helvetica, Arial, sans-serif;
}
*,
*::before,
*::after {
	box-sizing: border-box;
}

body {
	margin: 0;
	padding: 0;
	line-height: var(--bs-body-line-height);
}

.cls_1{
	fill: var(--build-color-marcadores-grandes);
	pointer-events: none;
} // Marcadores Grandes
.cls_2{fill: var(--build-color-stands);}
.cls_3{fill: var(--build-color-salidasEmergencia);}
.cls_4{fill: var(--build-color-escenarios);}
.cls_5{fill: var(--build-color-servicios);}
.cls_7{
	fill: var(--build-color-foodTruck);
	transition: all 0.7s;
} // Puestos FoodTruck
.cls_8{
	fill: var(--build-color-basePabellones);
	stroke-width: .3px;
	stroke: var(--build-color-black); 
	transition: var(--build-transicion-principal);
} //Pabellones Base
.cls_9{fill: var(--build-color-cafeteias);stroke-width: .2px;stroke: var(--build-color-black);}
.cls_13{fill: var(--build-color-white);stroke-width: .3px;stroke: var(--build-color-black);} // Color Texto
.cls_14{fill: var(--build-color-marcadores-pequenos);stroke-width: .3px;stroke: var(--build-color-black);}
.cls_17{fill: var(--build-color-baseMapa);stroke-width: .3px;stroke: var(--build-color-black);}
.cls_19{opacity: 1;}


.hover_Base{
	fill: var(--build-color-azul-verdoso);
	box-shadow: var(--build-sombra-base);
	transform: var(--build-escalado-base);
	transform-origin: var(--build-transform-origin-hover);
}
.hover_FoodTruck{
	background: var(--build-color-morado-floral);
	// fill: var(--build-color-azul-verdoso);
	box-shadow: var(--build-sombra-base);
	transform: var(--build-escalado-base);
	transform-origin: var(--build-transform-origin-hover);
}

.click_FoodTruck_map{
	fill: var(--build-color-foodTruck-selected);
}
.clk_FT_form{
	background: var(--build-color-morado-floral);
	color: var(--build-color-azul-claro);
}
.flecha_form{
	fill: var(--build-color-azul-claro);
}

.mostP-enter-active, .mostP-leave-active {
	transition: all .5s;
}
.mostP-enter-from, .mostP-leave-to {
	opacity: 0;
}

.despleg-enter-active, .despleg-leave-active {
	transition: all .1s;
}
.despleg-enter-from, .despleg-leave-to {
	opacity: 0.1;
	height: 0;

}

.rotar{
	transform: rotate(180deg);
}

.animacionCompFT {
	animation: animacionComponente 1s ease;
}

@keyframes animacionComponente {
	0% {
		transform: scale(1);
	}
	50% {
		transform: scale(1.2);
	}
	100% {
		transform: scale(1);
	}
}

p{
    margin: 0;
    padding: 0;
}

.oculto {
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.5s;
}

.visible {
    opacity: 1;
    visibility: visible;
    transition: opacity 0.5s;
}

</style>
