function listProducts({ data}) {
    return (
        <ul>
            {
                data.map(product => (
                    <div key={product.id}>
                        <h2>{product.name}</h2>
                        <p>Price: {product.price}</p>
                        <p>Category: {product.category}</p>
                    </div>
                    )
                )
            }

        </ul>
    )
}

export  default listProducts;
