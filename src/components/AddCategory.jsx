import { useState } from "react";

// export const AddCategory = ({ setCategories }) => {//el setcateg para la forma 1
export const AddCategory = ({ onNewCategory }) => {//forma 2
    //usestate para el valor inicial del buscador
    const [inputValue, setInputValue] = useState('')

    //para que sirva el input cuando tenga un value y queramos escribir cualquier cosa
    //creamos la funcion de flecha y dentro del argumento desestructuramos target
    const onInputChange = ({ target }) => {
        setInputValue(target.value);//aca solo usamos el mofificador set y dentro ponemos el argumento target despues . y value para poder escribir e el inpuut
    }

    //funcion para evitar el refresc de navegador al hacer enter en el input
    const onSubmit = ( event ) => {
        event.preventDefault();
      
        //con este if hacemos que siempre se admitan mas de 1 carater a la hora de hacer ente ry lo guarde en la lista
        if( inputValue.trim().length <= 1 ) return;
        
        //para agregar a la lista lo que pongamos y le damos enter en el input
        //FORMA 1*
        //setCategories( categories => [ inputValue, ...categories ]);
        
        setInputValue('');//limpiamos el input despues de hacer enter 
  
        //FORMA 2*
        onNewCategory(inputValue.trim());
    }

  return (//input component
  //cuando ponemos el form sin nada dentro de la etiqueta es para cuando demos enter denteo del input se refresque este mismo y elimine tdo de consola, aunque con el onsubmit vamos a evitar esto
    <form onSubmit={ onSubmit }>
        <input 
            type="text"
            placeholder="Buscar Gifs"
            value={ inputValue }//valor inicial en el buscador
            onChange={onInputChange}//llamamos la funcion para poder escribir en el imput a traves de event + target + value
        />
    </form>
  )
}
