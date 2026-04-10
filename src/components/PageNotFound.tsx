import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <div className="flex flex-col justify-center h-screen items-center gap-10">
            <div className="font-mono text-3xl text-center"><span className="block text-8xl text-slate-600  font-bold">404</span> The page you are trying to access doesn't exist on this application.</div>
            <Link to={"/"} replace className="px-5 bg-slate-500 text-slate-100 rounded-md hover:bg-slate-600 transition-all duration-300 ease-in-out py-2">← Categories</Link>
        </div>
    );
}

export default PageNotFound;