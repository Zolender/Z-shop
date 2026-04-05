const Login = () => {
    return (
        <>
        <form className="bg-blue-100 p-12 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-blue-500">Login</h1>
            <div className="mt-8">
                <label className="block text-blue-500 text-lg font-bold mb-2" htmlFor="name">Name</label>
                <input type="text" id="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700" />
            </div>
            <div className="mt-8">
                <label className="block text-blue-500 text-lg font-bold mb-2" htmlFor="email">Email</label>
                <input type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700" />
            </div>
            <div className="mt-8">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button>
            </div>
        </form>
        </>
    );
}

export default Login
