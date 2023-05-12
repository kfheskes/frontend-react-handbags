function Tile({ image, imageDescription, titleBrand, children}){


    return(

        <section>
        <img src={ image } alt={imageDescription}/>
            <h2>{ titleBrand }</h2>
            {children}
        </section>

    )
}

export default Tile;