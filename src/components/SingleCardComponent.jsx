
function SingleCardComponent( 
    { el, index } 
) {
  return (

    <div>
        <img 
        src={el.thumbnail} 
        alt={el.title} 
        className='w-[250px] object-cover min-h-[200px] rounded-lg'
        />
        
        <div className="p-[20px]">
          <h3 className='dark:text-white text-orange-400'>
            {el.title}
          </h3>

          <p className="dark:text-white">${el.price}</p>
          <p className="dark:text-white">{el.description}</p>
          
        </div>
    </div>


  )
}

export default SingleCardComponent