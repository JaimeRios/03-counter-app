
// const getImagenPromesa = () => new Promise(resolve=> resolve('http://sfsfasdfasfbasdad'))
// getImagenPromesa()
// .then(console.log);

export const getImagen = async () =>{

    try{
        const apiKey = 'ADS8t6MG0ayQ6rlVGKeX79JM3leFgOzF';
        const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await respuesta.json();
        const {url} = data.images.original;
        
        return url;

        document.body.append(img);
    }
    catch(error){
        //manejo del error
        //console.error();
        return 'No existe';
    }
    
}


