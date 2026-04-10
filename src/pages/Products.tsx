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
        <div className="flex flex-col justify-center font-mono text-slate-200">
        
            <button className="absolute top-15 rounded-full left-5  hover:cursor-pointer hover:scale-110  transition-all duration-300 ease-in font-bold text-2xl  text-slate-700" onClick={()=> navigate(-1)}>← Back</button>

            <div className="bg-slate-400 iflex flex-col items-center py-10 px-5 w-2/3 mx-auto rounded-md">
                <h1 className="font-semibold capitalize"><span className="font-bold text-2xl text-slate-600">Title:</span>{product.title}</h1>
                <p className="font-semibold capitalize"><span className="font-bold text-2xl text-slate-600">Price:</span>{product.price}</p>
                <p className="font-semibold capitalize"><span className="font-bold text-2xl text-slate-600">Description:</span>{product.description}</p>
                <p className="font-semibold capitalize"><span className="font-bold text-2xl text-slate-600">Category:</span> {product.category.name}</p>
                <p className="font-bold text-2xl text-slate-600">Images</p>
            </div>
            <div className=" flex flex-wrap gap-5 my-5 mx-auto w-10/11 ">
                {product.images.map( (image, index)=>(
                    <img key={index} src={image} alt={product.title} className="rounded-md inline" />
                ))}
            </div>

            
        
        </div>
    );
}

export default Products;