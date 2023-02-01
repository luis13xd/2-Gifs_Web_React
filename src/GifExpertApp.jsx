//con rfac creamos todo el componente

import { useState } from "react";
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  {/* use state para categorias y de valor inicial tiene 2 categorias, despues solo dejamos un elemento o una categoria para que no salga tanta c0osa en consola */}
  const [categories, setCategories] = useState([ 'One Punch' ]);

  {/* funcion de flecha para agregar categorias */}
  const onAddCategory = ( newCategory ) => {

    //para validar que no hallan nombres iguales
    if ( categories.includes(newCategory) ) return;

    {/* 1ra forma. para agregar usamos el modificador set, luego creamos un nuevo arreglo y con los ... mas categorias le concatenamos lo que ponemos dentro del parentesis */}
    //setCategories([ ...categories, 'pornhub']); 
    //si queremos es ponerla al inicio solo cambiamos la concatenacion despues del strumg que vamos a agregar y ya 
    setCategories([ newCategory, ...categories]); 
    
    //2da forma. dentro del set creamos una funcion de flecha llamada de cualquier manera que contenga un arreglo que dentro concatene el arreglo del principio mas lo que le vamos a agregar
    //setCategories( cat => [ ...cat, 'reedtyve']);
    
    //categories.push(newCategory);
  }

  console.log(categories)
  
  return (
    <>
        {/* Titulo */}
        <h1 className="title_h1">Gifs Free</h1>

        {/* Input */}
        <AddCategory 
          // setCategories={ setCategories } //FORMA 1*
          onNewCategory={ (value) => onAddCategory( value )}       
        />

        {/* Listados de Gifs */}
        {/*<button onClick={onAddCategory}>Agregar</button> boton para agregar categorias */}

          {/* para poner todas las categorias un lista usamos el map que recorre todo el arreglo  */}
        { 
          categories.map( (category ) =>  (  //{/* despues del map ponemos una funcion de flecha donde le damos un nombre y dentro retornasmos una lista con su key unica y dentro el nombre que le habiamos puesto a la funcion y automaticamente pone todos los nombres del arreglo en lista  */}

                <GifGrid 
                  key={ category }
                  category={ category }
                />
            ))    
        }
       
    </>
  )
}
