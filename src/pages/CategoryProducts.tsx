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

const CategoryProducts = () => {
    const {id} = useParams()
    const navigate = useNavigate();

    const {data: products, isLoading, error} = useFetch<Product[]>(`https://api.escuelajs.co/api/v1/products/?categoryId=${id}`)

    if (isLoading)return <p className="">Loading products...</p>
    if (error)return <p className="">Error: {error.message}</p>

    return (
        <div className="px-5">
            <h1 className="text-center text-4xl font-mono font-bold text-cyan-800 mb-10">{products?.[0]?.category.name?? "Category"}</h1>
            <div className="grid grid-cols-4 gap-5">
                {products?.length === 0 && (<p className="text-center text-6xl font-mono font-bold text-red-800">No products found in this category.</p>)}

                {products?.map(product=>(
                    <div className="p-2 rounded-md hover:shadow-md hover:shadow-black flex flex-col items-center border transition-all duration-300 ease-in-out hover:-translate-y-1 hover:cursor-pointer justify-between" key={product.id} onClick={()=> navigate(`/products/${product.id}`)}>
                        <img className="h-5/6 rounded-md" src={product.images[0]} alt={product.title} />
                        <h3 className="text-lg font-mono text-cyan-600">{product.title}</h3>
                        <p className="text-md font-mono text-cyan-500">{product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CategoryProducts;