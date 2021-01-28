
$(document).ready(function () {

    var boton = $('#boton');
    var nombreUsuario = $('#inputNombre');
    var apellidoUsuario = $('#inputApellido');
    var emailUsuario = $('#inputEmail');
    var telefonoUsuario = $('#inputTelefono');
    


    $(boton).click(function validarYEnviarFormulario() {

        /* Borra los mensajes de errores previos */
        $('.alert').remove();

        /* Valida que campo Nombre no esté vacío y que tenga formato correcto */
        if(nombreUsuario.val() == "" || nombreUsuario.val() == null){

            mostrarAlerta("Nombre es un campo obligatorio");
            return false;
        }
        else{
            var expresion= /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/g;
            if(!expresion.test(nombreUsuario.val())){
                
                mostrarAlerta("El campo 'Nombre' no permite carateres especiales o numeros");
                return false;
            }
        }
        /* Valida que campo Apellido no esté vacío y que tenga formato correcto */
        if(apellidoUsuario.val() == "" || apellidoUsuario.val() == null){

            mostrarAlerta("Apellido es un campo obligatorio");
            return false;
        }
        else{
            var expresion= /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/;
            if(!expresion.test(apellidoUsuario.val())){

                mostrarAlerta("El campo 'Apellido' no permite carateres especiales o numeros");
                return false;
            }
        }
        /* Valida que campo Email no esté vacío y que tenga formato correcto */
        if(emailUsuario.val()=="" || emailUsuario.val()==null){

            mostrarAlerta("Email es un campo obligatorio");
            return false;
        }
        else{
            var expresion= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
            if(!expresion.test(emailUsuario.val())){
                
                mostrarAlerta("Por favor ingrese un correo válido");
                return false;
            }
        }
        /* Valida que campo Telefono no esté vacío y que tenga formato correcto */
        if(telefonoUsuario.val() == "" || telefonoUsuario.val() == null){
            
            mostrarAlerta("Teléfono es un campo obligatorio");
            return false;
        }
        else{
            var expresion= /^[9]\d{8}$/g;
            if(!expresion.test(telefonoUsuario.val())){

                mostrarAlerta("Ingrese su teléfono en el formato solicitado");
                return false;
            }
        }
        /* Indica ejecutar funcion para llenar la tabla */

        llenarTabla();
        
        /* Limpia Formulario */

        $('#inputNombre')[0].value = "";
        $('#inputApellido')[0].value = "";
        $('#inputEmail')[0].value="";
        $('#inputTelefono')[0].value= "";
    })
        
        /* Funcion de mensaje de error */

    function mostrarAlerta(texto){
        $("#labelNombre").before('<div class="alert">Error: '+ texto +' </div>');
    }
        /* Funcion que llena la tabla */

    function llenarTabla() {

        var cuerpoTabla = $('#tabla-datos');
        cuerpoTabla.append("<tr><td>" + nombreUsuario.val() + "</td><td>" + apellidoUsuario.val() + "</td><td>" + emailUsuario.val() + "</td><td>" + telefonoUsuario.val() + "</td></tr>");
    }
})

