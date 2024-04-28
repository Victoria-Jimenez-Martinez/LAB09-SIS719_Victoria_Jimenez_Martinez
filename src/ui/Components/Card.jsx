import { useEffect, useState } from "react";
import "./Card.css"

export const Card = () => {
    const [product, setProduct] = useState ({});
    const [current, setCurrent] = useState(0);

    useEffect (() => {
        const productId = Math.floor(Math.random() * 100) + 1;
        fetch(`https://dummyjson.com/products/${productId}`)
        .then(res => res.json())
        .then(data => {setProduct(data)})
    }, []);

    const handlePrev = () => {
        setCurrent((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrent((prev) => (prev === product.images.length - 1 ? 0 : prev + 1));
    };


    return (
        <div className="card">
            <h2>{product.title}</h2>
            <div className="img">
                {product.images && product.images.length > 0 && (
                    <>
                        <img src={product.images[current]} alt={`Imagen ${current + 1}`} />
                        <button onClick={handlePrev}>&laquo;</button>
                        <button onClick={handleNext}>&raquo;</button>
                    </>
                )}
            </div>
            <p>{product.description}</p>
            <p>Precio: USD$ {product.price}</p>
            <p>Marca: {product.brand}</p>

        </div>
    )
};