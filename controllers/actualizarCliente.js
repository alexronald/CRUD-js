import { clientServices} from "../service/client-service.js";

const formulario = document.querySelector("[data-form]")

const obtenerInformacio = async()=>{
    const url = new URL(window.location)
    const id = url.searchParams.get("id")

    
    if(id == null){
        window.location.href="/screens/error.html"
    }
    const nombre = document.querySelector("[data-nombre]")
    const email = document .querySelector("[data-email]")

    //++++++++++++++++++++++++++++++++++++++
    try{
        const perfil = await  clientServices.detalleCliente(id);
        if (perfil.nombre && perfil.email){
            nombre.value = perfil.nombre
            email.value = perfil.email
        }else{
            throw new Error()
        }
    }catch(error){
        window.location.href="/screens/error.html"
    }
    


    //CUMPLE LA MISMA FUNCION QUE EL CODIGO DE ARRIVA
    /* clientServices.detalleCliente(id).then((perfil)=>{
        nombre.value = perfil.nombre
        email.value = perfil.email
    }) */
}

obtenerInformacio();

formulario.addEventListener("submit",(evento)=>{
    evento.preventDefault();
    const url = new URL(window.location)
    const id = url.searchParams.get("id")

    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;
    console.log("ESTE ES ID",nombre)

    clientServices.actualizarCliente(nombre,email,id).then((respuesta)=>{
        window.location.href="/screens/edicion_concluida.html"
    })
})