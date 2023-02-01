
 //punemos en nuestra funcion de flecha e async ya que para la peticion vamos a usar el await
 export const getGifs = async(category) => {
    //url sacada de la api de gifs y probada en postman con su key y la q y al final le concatenamos la bsqueda la cual va a ser category y el limit es para decir cuantas imgs muestre por cada peticion
    const url = `https://api.giphy.com/v1/gifs/search?api_key=2h1LigTJ2y4sfsMUNy60fwZGmCGPxX2y&q=${ category }&limit=12`;
    //peticion http con await fetch
    const resp = await fetch( url );
    //para acceder a la data de la api vamos a desestructurar
    const { data } = await resp.json();
  
    //para extraer informacion de cada gifs con .maps que recorre el arreglo
    //aca va a regresar un objeto qeu va contener la info que vamos a utilizar, en vez de img puede ir cualquier cosa, ya despues sacamos lo que queremos con el .title ejemplo para el titulo...
    const gifs = data.map( img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }));
  
    return gifs;
  }