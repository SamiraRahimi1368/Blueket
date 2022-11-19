const Menu = () => {
    return <nav
        className="mt-8 flex justify-center gap-4 py-4 font-light uppercase text-sm tracking-widest text-blue-800 z-10 relative"
    >
        <a className="hover:bg-blue-800 hover:text-white cursor-pointer px-4 py-2 transition duration-500 rounded-lg hover:shadow-lg">Home</a>
        <a className="hover:bg-blue-800 hover:text-white cursor-pointer px-4 py-2 transition duration-500 rounded-lg hover:shadow-lg">About</a>
        <a className="hover:bg-blue-800 hover:text-white cursor-pointer px-4 py-2 transition duration-500 rounded-lg hover:shadow-lg">Contact</a>
    </nav>
}

export default Menu
