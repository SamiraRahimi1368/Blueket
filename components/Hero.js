const Hero = () => {
    return <div
        className="h-screen bg-indigo-100 absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center gap-10"
    >
        <div>
            <h1 className="text-5xl font-black text-blue-900">Jump ahead</h1>
            <p className="text-sm mt-4 text-slate-500 ">Become the winner</p>
            <a className="bg-blue-600 px-8 py-3 mt-8 inline-block rounded-md text-white uppercase tracking-wider text-sm font-light hover:bg-blue-900  cursor-pointer transition duration-1000 hover:scale-110">Reserve now!</a>
        </div>
        <img
            src="https://picsum.photos/500/500"
            className="w-48 aspect-square"
        />
    </div>
}

export default Hero
