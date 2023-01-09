import React, { useState } from "react";
import ProjectNavbar from "./Navbar";

function RandomDog() {
    const [dogPictureUrl, setDogPictureUrl] = useState("");
    const [loading, setLoading] = useState(false);

    const handleDogPicture = () => {
        fetch("https://random.dog/woof.json")
        .then(response => response.json())
        .then(data => {
            if (data.url.includes(".jpg" || ".png" || ".jpeg")) {
                setDogPictureUrl(data.url);
                setLoading(false);
            } else {
                setLoading(true);
                handleDogPicture();
            }
        })
    };

    return (
        <div className="container">
            
            <ProjectNavbar/>
        
            <div className="container"
            style={{
                marginTop: 30
            }}  
            >

                <p>Gerador de imagens caninas a partir da API <a href="https://random.dog/">Random Dog</a>.</p>

                <div className="d-flex justify-content-center" style={{ marginTop: 50}}>
                    <button className="btn btn-primary" onClick={handleDogPicture}>Gerar imagem</button>
                </div>

                <div className="d-flex justify-content-center" style={{ marginTop: 50}}>

                    {
                        loading ? 
                        (
                            <div className="spinner-border" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        ) 
                        : 
                        dogPictureUrl ? <img className="img-fluid" src={dogPictureUrl} alt="List cap" style={{ width: '20rem'}}/> : null
                    }

                </div>  
            </div>
        </div>
    );
}

export default RandomDog;