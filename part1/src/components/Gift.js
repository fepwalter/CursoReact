import { useEffect, useState } from "react";
import getGifs from "../getGift";
import './Gift.css';

function Gift({ keyword }) {
    const [ gift, setGift ] = useState ([]);

    // Este Hook ejecuta cuando se renderiza el componente, el segundo parametro es una lista de dependencias que tiene este efecto, si no tiene solo se ejecuta una vez:
    useEffect( function() {
        getGifs({ keyword })
            .then(gifs => setGift(gifs))
    }, [keyword]); //le pasamos la keyword para que cada vez que se pase se lance el efecto;

    return ( 
        <div>
            <section>
                {
                    gift.map(singleGif => {
                        return <a href={`#${singleGif.id}`} key={singleGif.id} className="gift">
                            <h4>{singleGif.title}</h4>
                            <small>{singleGif.id}</small><br>
                            </br>
                            <img alt='gifs'src={singleGif.url}/>
                        </a>
                    })
                }
            </section>
        </div>
     );
}

export default Gift;