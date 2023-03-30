/* LLamada al servidor */
function llamada(request){
  return new Promise( (res,rej) => {
    fetch(request)
    .then((response) => {
      res(response)
      console.log(response)
      console.log("Si se puedo conectar")
    })
    .catch(error => {
      rej({message: error})
    })
  })
}
 
async function cargarImagenGatoAleatoria() {
  try {
    const conexion = await llamada('https://cataas.com/cat/says/hello')
    .then((data) => {
      const imagenURL = document.getElementById('dog-image');
      imagenURL.src = data.url;
    })
  } catch (error) {
    imagenURL.src("No-Image-Placeholder.png")
    console.error(error);
  }
}



    
   /*  const imagen = new Image();
    imagen.src = imagenURL;
    document.body.appendChild(imagen);
  } catch (error) {
    console.error(error);
  }
}

cargarImagenPerroAleatoria();
 */












/* 
const apiKey = 'TU_API_KEY'; // Reemplaza TU_API_KEY por tu propia API key
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error)); */

