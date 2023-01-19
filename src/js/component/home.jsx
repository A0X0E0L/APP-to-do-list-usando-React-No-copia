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


	const Borrar = (id)=>{
setlistaTareas(listaTareas.filter((item) => item.id !== id));

	}



	
	return (
		
		<>

		<h1 className="d-flex justify-content-center" >To Do List</h1>
		<form className="container" onSubmit={handleSubmit}>
  <div className="mb-3">
    
    {/*2. definimos el evento ochange en el input */}
	<input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>{setTarea(e.target.value)}}/>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
{/* item sería cualquier dato, puede ser index también */}
<ul>
	
	{listaTareas.map((item) => (<li key={item.id}> {item.name}<button type="button" className="btn btn-outline-light" onClick={(()=>Borrar(item.id))} >X</button></li>))}
	
</ul>



</form>

<div>
	
</div>
</>
	);
};

export default Home;
