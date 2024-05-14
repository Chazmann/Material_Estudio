let listaAut = [
  "Oncología Clínica",
  "Cardiología",
  "Psiquiatría",
  "Medicina Legal",
  "Nefrología",
  "Clínica Pediátrica",
  "Anemia",
  "Medicina del Deporte",
  "Medicina del Trabajo",
  "Cirugía Plástica y Reparadora",
  "Ortopedia y Traumatología",
  "Ortodoncia y Ortopedia Maxilar",
  "Implantología Oral",
  "Odontopediatría",
  "Terapia Intensiva",
  "Cirugía y Traumatología Bucomáxilofacial",
  "Microbiología Clínica",
  "Infectología",
  "Oftalmología Infantil",
  "Kinesiología Cardio-Respiratoria",
];
//INYECCION DE DATOS MEDIANTE LECTURA DE ARRAY
 listaAut.forEach((elem) => {
   let dataList = document.querySelector("#especialidades");
   option = document.createElement("option");
   option.value = elem;
  dataList.append(option);
 });


 //INYECCION DE DATOS MEDIANTE JQUERY
$( function() {
    $( "#especi" ).autocomplete({
    source: listaAut
  });
} );

// MODIFICACION DE MENSAJES TRAS EL RESULTADO DE BUSQUEDA

$.widget( "ui.autocomplete", $.ui.autocomplete, {
	options: {
		messages: {
			noResults: "No se encontraron resultados.",
			results: function( amount ) {
				return amount + ( amount > 1 ? " resultados encontrados" : " resultado encontrado" ) +
					", usar las flechas hacia arriba y abajo para navegar.";
			}
		}
	},

	__response: function( content ) {
		var message;
		this._superApply( arguments );
		if ( this.options.disabled || this.cancelSearch ) {
			return;
		}
		if ( content && content.length ) {
			message = this.options.messages.results( content.length );
		} else {
			message = this.options.messages.noResults;
		}
		clearTimeout( this.liveRegionTimer );
		this.liveRegionTimer = this._delay( function() {
			this.liveRegion.html( $( "" ).text( message ) );
		}, 1000 );
	}
} );
