
export const GifItem = ({ title, url, id}) => {//recibimos todas las propiedades de la image con image

  return (
    <div className="card">
      <img src={ url } alt={ title } />
      <p>{ title }</p>
    </div>
  )
}

