function Product({ label, image, imageDescription, paragraph, price}){


    return(
        <article className="article">
            <span>{ label }</span>
            <img src={ image } alt={imageDescription}/>
            <p>{ paragraph }</p>
            <h4>{ price }</h4>
        </article>
    )
}

export default Product;