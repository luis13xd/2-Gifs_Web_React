//importamos la funcion que obtiene el gifs de la carpeta helpers 
//import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';
import gifloading from '../img/giphy.gif'

//componente que recibe a la funcion con la que obtuvimos el gif
export const GifGrid = ({ category }) => {
  //creamos nuestro hook que tiene las imagenes y lo del cargando mientras salen as imgs
  const { images, isLoading } = useFetchGifs( category );

//con el codigo anterior optimizamos este codigo por eso se comentario
  // //usestate para el estado de las imagenes
  // const [images, setImages] = useState([]);

  // //funcion asinrona para obtener las imags
  // const getImages = async() => {
  //   const newImages = await getGifs( category );
  //   setImages(newImages);
  // }

  // //useefect nunca se usa con el async
  // //usefect es ara efectossecundarios sobre el usestate, en este caso lo usaremos para wue solo se ejecute una vez la api asi el boton ncremente 
  // useEffect( () => {
  //   //al crear el componente inmediatamente lo llamamos aunque esto es una pesima practica
  //   getImages();
  // },[])//ponemos aca los corchetes vacios para que se ejecte solo 1 vez

  
  return (
    <>
        <h3>{ category }</h3>
        {// 1. como mostrar el cargando con un iff corto
          //isLoading && (<h2>Cargando...</h2>)
          isLoading && (<div className='div_gif'><img className='gif' src={gifloading} /></div>)
        }

        {/* {  // 2. forma de mostrar el cargando con ternario
          isLoading 
          ?  <h2>Cargando...</h2>
          : null
        } */}

        {/* 3. forma de poner el loading con un componente
          <LoadingMessage isLoading={ isLoading } />
        */}
        

        <div className='card-grid'>
          {   //para mostrar el titulo y ponerle la key a la img
            images.map( ( image ) => ( //desestructuramos y ponemos lo que vamos a usar
              <GifItem 
                key={ image.id }
                { ...image }
              />
            ))
          }
        </div>
    </>
  )
}
