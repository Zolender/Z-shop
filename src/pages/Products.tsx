import { useNavigate, useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"

type Product = {
    id: number
    title: string
    slug: string
    price: number
    description: string
    images: string[]
    category: {
        id: number
        name: string
        slug: string
        image: string
        creationAt: string
        updatedAt: string
    }
    creationAt: string
    updated: string
}

const Products = () => {
    
    const {id} = useParams()
    const navigate = useNavigate()

    const {data: product, isLoading, error}= useFetch<Product>(`https://api.escuelajs.co/api/v1/products/${id}`)

    if(isLoading)return <p className="">Loading product...</p>
    if(error)return <p className="">Error: {error.message}</p>
    if(!product)return <p className="">Product not found</p>
    
    return (
        <div className="">
        
        <button onClick={()=> navigate(-1)}>← Back</button>

        <h1 className="">{product.title}</h1>
        <p className="">{product.price}</p>
        <p className="">{product.description}</p>

        <div className="">
            {product.images.map( (image, index)=>(
                <img key={index} src={image} alt={product.title} className="" />
            ))}
        </div>

        <div className="">
            <p className="">Category: {product.category.name}</p>
        </div>
        
        </div>
    );
}
 
export default Products;