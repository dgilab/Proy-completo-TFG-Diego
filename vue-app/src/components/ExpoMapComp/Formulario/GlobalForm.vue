<template>
	<div class="GlobalForm">
		<div class="FromPanel">
			<div class="Panel_titulo">
				<h1>Feria ExpoJove</h1>
			</div>
			<div class="Panel_cuerpo">
				<ContenedorPaneles/>
			</div>
			<div class="babrirF_g">
				<div class="babrirF_b">
					<div class="but_abrir_form" title="Notificar Error" @click="abrirFormInci">
						<i class="fa-solid fa-bug" style="color: #000000;"></i>
					</div>
				</div>
				<div class="babrirF_b">
					<div class="but_abrir_form" title="Ver log de Errores" @click="verLogErrores">
						<i class="fa-solid fa-eye" style="color: #000000;"></i>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

import { mapActions } from 'vuex'

import ContenedorPaneles from './PanelBase/ContenedorPaneles.vue'
import Swal from 'sweetalert2'

export default {
	name: 'GlobalForm',
	data () {
        return {
			nombre: ' ',
			descripcion: ' ',
        }
    },
	components: {
		ContenedorPaneles
	},
	computed: {

	},
	methods: {
		...mapActions(['mostrarInteres']),
		abrirFormInci(){
			console.log()
			Swal.fire({
				title: 'Formulario de incidencia',
				html:
					`<select id="swal-selector" class="swal2-select">
						<option disabled selected value>Selecciona</option>
						<option value="estructura">Error de estructura</option>
						<option value="colores">Error de colores</option>
						<option value="dimensiones">Error de dimensiones</option>
						<option value="Terminal">Error del Terminal</option>
					</select>`,
				showCancelButton: true,
				confirmButtonText: 'Enviar',
				cancelButtonText: 'Cancelar',
				showLoaderOnConfirm: true,
				preConfirm: () => {
					return new Promise((resolve, reject) => {
						const seleccion = document.getElementById('swal-selector').value
						this.$http.post('/bugs', { bug: seleccion })
							.then(() => {
								resolve()
							})
							.catch(error => {
								console.error('Error al enviar la incidencia:', error)
								reject()
							})
						})
					}
				}).then((result) => {
					Swal.hideLoading();
					if (result.isConfirmed) {
						Swal.fire({
							title: 'Notificado correctamente',
							icon: 'success',
							showConfirmButton: false,
							timer: 1500
						});
					} else if (result.dismiss === Swal.DismissReason.cancel) {
						Swal.fire({
							title: 'Cancelado',
							icon: 'error',
							showConfirmButton: false,
							timer: 1500
						});
					}
				}
			)
		},
		verLogErrores() {
			this.$http.get('/bugs')
				.then(response => {
					const incidencias = response.data.reverse()
					let htmlContent = '<div style="height: 300px; overflow-y: scroll;">'
					incidencias.forEach(incidencia => {
						const backgroundColor = 'var(--build-color-light-grey)'
						const colorShadow = incidencia.estado ? 'rgba(0, 255, 0, 0.5)' : 'rgba(255, 0, 0, 0.5)'
						const fechaFormateada = new Date(incidencia.fecha).toLocaleString();
						const estadoText = incidencia.estado ? 'Solucionado' : 'Pendiente'
						htmlContent += `<div style="background-color: ${backgroundColor}; padding: 10px; margin: 10px; border-radius: 5px; box-shadow: 0px 0px 5px 0px ${colorShadow};">
							<div>Bug: ${incidencia.bug}</div>
							<div>Fecha: ${fechaFormateada}</div>
							<div>Estado: ${estadoText}</div>
						</div>`
					})
					htmlContent += '</div>'
					Swal.fire({
						title: 'Log de Errores',
						html: htmlContent,
						showConfirmButton: false
					})
				})
				.catch(error => {
					console.error('Error al obtener las incidencias:', error)
					Swal.fire({
						title: 'Error',
						text: 'No se pudieron obtener las incidencias',
						icon: 'error'
					})
				})
		}
	}
}
</script>

<style lang="scss" scoped>
.GlobalForm{
	width: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 999;
}
.FromPanel{
	width: 80%;
	height: 97vh;
	box-shadow: 0px 0px 20px 0px black;
	border-radius: 15px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: var(--build-color-white);
}
.Panel_titulo{
	height: 10vh;
	width: 80%;
	border-radius: 20px;
	box-shadow: 0px 2px 0px 0px black;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: default;
}
h1{
	text-align: center;
	font-size: 3vw;
	letter-spacing: 3px;
	font-weight: bold;
}
.Panel_cuerpo{
	height: 71vh;
	width: 80%;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	
}
.babrirF_g{
	display: flex;
	justify-content: flex-start;
	width: 70%;
	
	// bottom: 0;
}
.babrirF_b{
	margin-inline: 5px;
}

.but_abrir_form{
	border: 1px solid black;
	width: 60px;
	align-items: center;
	justify-content: center;
	text-align: center;
	background: #F0F0F0;
	cursor: pointer;
	border-radius: 0px 0px 15px 15px;
	
}
.but_abrir_form:hover{
	box-shadow: inset 0px 0px 10px -2px rgba(102,102,102,1);
}

.swal2-container {
	z-index: 9999 !important;
}


</style>