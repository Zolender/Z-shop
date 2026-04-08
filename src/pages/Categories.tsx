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
        <div className="flex flex-col  justify-between p-5 ">
            <h1 className="text-center text-4xl font-mono font-bold text-cyan-800 mb-10">Categories</h1>
            <div className="grid grid-cols-4 gap-5">
                {categories?.map((category)=>(
                    <div key={category.id} onClick={()=>navigate(`/categories/${category.id}`)} className=" p-2 flex flex-col items-center border transition-all duration-300 ease-in-out hover:-translate-y-1 hover:cursor-pointer justify-between">
                        <img className="h-5/6 rounded-md" src={category.image} alt={category.name} />
                        <h3 className="text-lg font-mono text-cyan-600">{category.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Categories;