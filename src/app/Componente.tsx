import {objetoDePrueba} from "./prueba"

export default function Estudiante(){
  const {nombre, edad} = objetoDePrueba;
	const carrera = "licenciatura en sistemas"

  return (
		<>	
    	<p className="text-black text-2xl"> Estudiante: {nombre}, {edad} </p>
			<p className="text-black text-2xl"> Carrera: {carrera}, años: 5 </p>
		</>
  )
}