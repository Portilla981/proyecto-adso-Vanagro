const btnOpentMsj = document.getElementById('#btn-cancelar');
const btnCancelMsj = document.querySelector('.confirm-msj__btn--cancel');
const dialogMsj = document.querySelector('.confirm-msj__view'); 


btnOpentMsj.addEventListener("click", function() {

    console.log("click en cancela");

    
    // dialogMsj.showModal();
} ) 


function mostrarmsj(){
    alert("¿Estás seguro de cancelar el registro de usuario?");
}