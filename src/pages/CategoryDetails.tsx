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

const CategoryDetails = () => {
    const {id} = useParams()
    const navigate = useNavigate();

    const {data: products, isLoading, error} = useFetch<Product[]>(`https://api.escuelajs.co/api/v1/products/?categoryId=${id}`)

    if (isLoading)return <p className="">Loading products...</p>
    if (error)return <p className="">Error: {error.message}</p>

    return (
        <div className="">
            <h1 className="">{products?.[0]?.category.name?? "Category"}</h1>
            <div className="">
                {products?.length === 0 && (<p className="">No products found in this category.</p>)}

                {products?.map(product=>(
                    <div className="hover:cursor-pointer" key={product.id} onClick={()=> navigate(`/products/${product.id}`)}>
                        <img src={product.images[0]} alt={product.title} />
                        <h3 className="">{product.title}</h3>
                        <p className="">{product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default CategoryDetails;