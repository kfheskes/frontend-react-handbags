function Tile({ image, imageDescription, paragraph, titleBrand}){


    return(
        <div>
        <section class="fotoTegel">
        <img src={ image } alt={imageDescription}/>

        </section>
        <section class="tekstTegel">
            <p>{ paragraph }</p>
            <h2>{ titleBrand }</h2>
        </section>
        </div>
    )
}

export default Tile;