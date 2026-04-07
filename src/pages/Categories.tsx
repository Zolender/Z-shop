import { useNavigate } from "react-router-dom"
import useFetch from "../hooks/useFetch"

type Category = {
    id: number
    name: string
    slug: string
    image: string
    creationAt: string
    updatedAt: string
}

const Categories = () => {

    const navigate = useNavigate()

    const {data: categories, isLoading, error} = useFetch<Category[]>("https://api.escuelajs.co/api/v1/categories")

    if(isLoading)return <p className="">Loading categories...</p>
    if(error)return <p className="">Error: {error.message}</p>
    
    return (
        <div className="">
            <h1 className="">Categories</h1>
            <div>
                {categories?.map((category)=>(
                    <div key={category.id} onClick={()=>navigate(`/categories/${category.id}`)} className="hover:cursor-pointer">
                        <img src={category.image} alt={category.name} />
                        <h3 className="">{category.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Categories;