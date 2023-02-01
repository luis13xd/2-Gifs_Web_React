import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

//hook: funcion que regresa algo
export const useFetchGifs = ( category ) => {
    //usestate para el estado de las imagenes
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState([true]);

    //funcion asinrona para obtener las imags
    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    //useefect nunca se usa con el async
    //usefect es ara efectossecundarios sobre el usestate, en este caso lo usaremos para wue solo se ejecute una vez la api asi el boton ncremente 
    useEffect(() => {
        //al crear el componente inmediatamente lo llamamos aunque esto es una pesima practica
        getImages();
    }, [])//ponemos aca los corchetes vacios para que se ejecte solo 1 vez


    return {//retorna un objeto
        images,
        isLoading

    }
}

