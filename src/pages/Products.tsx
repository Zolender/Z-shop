import { useNavigate, useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useTheme } from "../hooks/useTheme"

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
    const {theme} = useTheme()

    const {data: product, isLoading, error}= useFetch<Product>(`https://api.escuelajs.co/api/v1/products/${id}`)

    if(isLoading)return <p className="">Loading product...</p>
    if(error)return <p className="">Error: {error.message}</p>
    if(!product)return <p className="">Product not found</p>
    
    return (
        <div className="flex flex-col justify-center font-mono text-slate-500">
        
            <button className={`absolute top-15 rounded-full left-5  hover:cursor-pointer hover:scale-110  transition-all duration-300 ease-in font-bold text-2xl  ${theme==="light"? "text-slate-700": "text-slate-200"}`} onClick={()=> navigate(-1)}>← Back</button>

            <div className={`${theme==="light"? "bg-slate-300" : "bg-slate-700"} font-semibold capitalize flex flex-col justify-between py-10 px-5 w-[80%] mx-auto rounded-md text-lg gap-5 `}>
                <h1 ><span className={`font-bold text-2xl ${theme==="light"? "text-slate-600" : "text-slate-100"}`}>Title:</span>{product.title}</h1>
                <p ><span className={`font-bold text-2xl ${theme==="light"? "text-slate-600" : "text-slate-100"}`}>Price:</span>{product.price}</p>
                <p ><span className={`font-bold text-2xl ${theme==="light"? "text-slate-600" : "text-slate-100"}`}>Description:</span>{product.description}</p>
                <p ><span className={`font-bold text-2xl ${theme==="light"? "text-slate-600" : "text-slate-100"}`}>Category:</span> {product.category.name}</p>
                <p className="font-bold text-2xl self-center">Images</p>
                <div className=" flex flex-wrap gap-5 my-5 mx-auto w-10/11 ">
                    {product.images.map( (image, index)=>(
                        <img key={index} src={image} alt={product.title} className="rounded-md hover:scale-105 transition-all duration-300 ease-in-out w-100" />
                    ))}
            </div>
            </div>
            
        </div>
    );
}

export default Products;
