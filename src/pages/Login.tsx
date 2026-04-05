const Login = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="bg-white p-12 rounded-lg shadow-md max-w-md">
                <h1 className="text-3xl font-bold text-blue-500">Login</h1>
                <form className="mt-8">
                    <div className="mb-6">
                        <label className="block text-blue-500 text-lg font-bold mb-2" htmlFor="name">Name</label>
                        <input type="text" id="name" className="border border-blue-300 rounded w-full py-2 px-3 text-blue-700" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-blue-500 text-lg font-bold mb-2" htmlFor="email">Email</label>
                        <input type="email" id="email" className="border border-blue-300 rounded w-full py-2 px-3 text-blue-700" />
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;

