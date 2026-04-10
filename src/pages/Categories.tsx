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

    if(isLoading)return <p className="flex items-center justify-center font-bold text-4xl font-mono animate-pulse h-screen">Loading categories...</p>
    if(error)return <p className="flex items-center justify-center font-bold text-2xl font-mono h-screen text-red-400">Error: {error.message}</p>
    
    if(!isLoading && !error)return (
        <div className="flex flex-col  justify-between p-5 ">
            <h1 className="text-center text-4xl font-mono font-bold text-cyan-800 mb-10">Categories</h1>
            <div className="grid grid-cols-4 gap-5">
                {categories?.map((category)=>(
                    <div key={category.id} onClick={()=>navigate(`/categories/${category.id}`)} className=" p-2 flex flex-col overflow-hidden items-center rounded-md  bg-gray-200 transition-all duration-300 ease-in-out hover:scale-105 hover:cursor-pointer justify-between">
                        <img className="h-5/6 rounded-md" src={category.image} alt={category.name} />
                        <h3 className="text-2xl font-mono text-slate-600 font-bold ">{category.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Categories;