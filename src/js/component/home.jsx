import React, {useState} from "react";



const Home = () => {




	const[tarea,setTarea]=useState("")//1.Aquí declaro, lo consumo.
	//  setTarea es la funcion que lo va a modificar
	const[listaTareas,setlistaTareas]=useState([])

	

	const handleSubmit	= (e) => {
	
	
	
	
		e.preventDefault()// detenemos el comportamiento predeterminado para procesar nuestro codigo ,siempre va en un formulario
		setTarea("")

		setlistaTareas([...listaTareas, { id: listaTareas.length, name: tarea }]);

		// setListaTareas(listaTareas.concat(tarea))
	}
	console.log(listaTareas);



	
	return (
		
		<>
		<form className="container" onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    {/*2. definimos el evento ochange en el input */}
	<input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>{setTarea(e.target.value)}}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
{/* item sería cualquier dato, puede ser index también */}
<ul>
	
	{listaTareas.map((item) => (<li key={item.id}> {item.name}</li>))}
	
</ul>

{/* <button onClick={clickBorrar}
                    className="btn-group btn-group-lg"
                    type="button"
                    id="button-addon1">Eliminar</button> */}
</form>

<div>
	
</div>
</>
	);
};

export default Home;
