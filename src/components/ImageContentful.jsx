import { client } from '../client';

const ImageContentful = () => {

  const res = await client.getEntries({content_type:'Recetas'}) 
  return{
    props:{
      recetas:res.item
    }
  }

console.log(recetas);

  return (
    <>
            <div>ImageContentful</div>

  

    </>
  )
}

export default ImageContentful