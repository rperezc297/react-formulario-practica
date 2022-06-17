import { useRef } from "react"

const FormNoControlado = () => {

  const formulario = useRef(null)  

  const handleSubmit = (e) => {
    e.preventDefault()

    const datos = new FormData(formulario.current);

    const objetosDatos = Object.fromEntries([...datos.entries()]);
    console.log(objetosDatos);

    const{todoDescripcion,todoName} = objetosDatos;

    //Validaciones de formulario
    if(!todoDescripcion.trim() ||  !todoName.trim()){
        console.log("noooo esta vacio");
        return
    }
    console.log("Paso validaciones");

    

  }

  return (
    <>
        <h2>No controlado</h2>
        <form ref={formulario} onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Ingrese Todo"
                name="todoName"
                className="form-control mb-2"
                defaultValue="Tarea #01"
            />

             <textarea
                name="todoDescripcion"
                className="form-control mb-2"
                placeholder="Ingrese descripcion del todo"
                defaultValue="Descripcion Tarea #01"

             
             /> 
             <select
                 name="todoEstado"
                 className="form-control mb-2"
                 defaultValue="Pendiente"


             >
                <option value="pendiente">pendiente</option>
                <option value="completada">completada</option>

             </select>
             <button  className="btn btn-primary">Agregar</button>

        </form>
    </>
  )
}

export default FormNoControlado