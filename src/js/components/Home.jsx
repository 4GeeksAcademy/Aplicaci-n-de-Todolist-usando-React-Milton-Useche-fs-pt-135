import React from "react";
import { useState } from "react";
import { Card } from "./Card";



//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const[inputV,setInputV] = useState("")
	const[list , setList] = useState([])
	const[error , setError] = useState("")


	//Escuchar input
	const listenletter =(event)=>{
		const newListen = (event.target.value);
		setInputV(newListen)
		console.log(newListen)
	}

	//Agregar elementos del input
	const addList = (event)=>{
		if (event.key === "Enter"){

			if(inputV.length === 0){
				setError("No puede enviar el campo vacio")
			return
			}

			if(inputV.length <= 3 ){
				setError("Debe de ingresar mas de 3 caracteres")
			return
			}

			setError("")
			const newList =[...list,inputV]
			setList(newList)
			setInputV("")
			console.log(newList)
		}
	}

	//Elimar
	const eliminar = (index)=>{
		console.log(`Tarjeta n° ` + index)
		const newList =[...list]
		newList.splice(index,1)
		setList(newList)
	}

	//Contar tarjetas
	const contar = list.length === 0 
      ? "No tienes ningun item"
      : list.length === 1 
        ? "Tienes 1 item"
        : `Tienes ${list.length} items`


	//Pasar props y renderizar tarjeta	
	const cards = list.map((elemento,index)=>{
		return (
			<Card 
			key={index} content={elemento}
			eliminar ={() => eliminar(index)}
			 />
		)
	})

	


	return (
		<div className="text-center">
            <div className="container">
				<div className="row justify-content-center mt-4">
					<div className="col-12 col-lg-6">
						<div className="card bgcolor">
							<img src={rigoImage} className="w-50 mx-auto d-block mt-4" />
							<input type="text" onChange={listenletter} onKeyDown={addList} value={inputV} className="w-50 mt-4 fs-4  mx-auto" placeholder="Ingrese el texto" />
							<p className="text-danger bentham-regular">{error}</p>
							{cards}
							<p className="text-start m-3">{contar}</p>
						</div>
					</div>

				</div>

			</div>
		</div>
	);
};

export default Home;