const Header = () => {
    return <div
        id="header"
        className="flex justify-between items-center mx-2 mt-4"
    >
        <div>
            <img
                src='/images/logo-white.svg'
            />
        </div>
        <div className="hidden">CTA</div>
        <div
            className="flex flex-col gap-2"
        >
            <div className="w-10 h-0.5 bg-white"></div>
            <div className="w-10 h-0.5 bg-white"></div>
            <div className="w-10 h-0.5 bg-white"></div>
        </div>
    </div>
}

export default Header
