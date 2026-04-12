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

const CategoryProducts = () => {
    const {id} = useParams()
    const navigate = useNavigate();
    const {theme} = useTheme()

    const {data: products, isLoading, error} = useFetch<Product[]>(`https://api.escuelajs.co/api/v1/products/?categoryId=${id}`)

    if (isLoading)return <p className="flex items-center justify-center font-bold text-4xl font-mono animate-pulse h-screen">Loading products...</p>
    if (error)return <p className="flex items-center justify-center font-bold text-4xl font-mono h-screen">Error: {error.message}</p>

    if(!isLoading && !error)return (
        <div className="px-5 w-full">
            <button className={`absolute top-15 rounded-full left-5  hover:cursor-pointer hover:scale-110  transition-all duration-300 ease-in font-bold text-2xl  ${theme==="light"? "text-slate-700": "text-slate-200"}`} onClick={()=> navigate(-1)}>← Back</button>
            <h1 className={`text-center text-4xl font-mono font-bold ${theme==="light"? "text-slate-700": "text-slate-200"} mb-10`}>{products?.[0]?.category.name}</h1>
            <div className="grid grid-cols-4 gap-5">
                {products?.length === 0 && (<p className="text-center w-full text-6xl font-mono font-bold text-red-800">No products found in this category.</p>)}

                {products?.map(product=>(
                    <div className=" p-2 flex flex-col overflow-hidden items-center rounded-md  bg-[#00eeff9a] transition-all duration-300 ease-in-out hover:scale-105 hover:cursor-pointer justify-between" key={product.id} onClick={()=> navigate(`/products/${product.id}`)}>
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