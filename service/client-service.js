const listaClientes = () =>
  fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());


const crearCliente =(nombre , email)=>{
  return fetch("http://localhost:3000/perfil",{
    method:"POST",
    headers:{
      "content-type":"application/json"
    },
    body:JSON.stringify({nombre,email,id:uuid.v4()})
  });
}

const eliminarCliente = (id)=>{
  return fetch("http://localhost:3000/perfil/"+id,{
    method:"DELETE"
  });
};

const detalleCliente = (id)=>{
  return fetch("http://localhost:3000/perfil/"+id).then((respuesta)=>{
    return respuesta.json()
  });
}

const actualizarCliente = (nombre,email,id)=>{
  return fetch("http://localhost:3000/perfil/"+id,
  {
    method:"PUT",
    headers:{"content-type":"application/json"},
    body:JSON.stringify({nombre,email})
  } 
  
  ).then((respuesta)=>{
    console.log(respuesta)
  }).catch((error) => alert("error al editar cliente"));;
}

export const clientServices = {
  listaClientes,
  crearCliente,
  eliminarCliente,
  detalleCliente,
  actualizarCliente
};



