const Hero = () => {
    return <div
        className="relative mx-4"
    >
        <div className="relative h-screen">
            <div className="bg-[#ff9900] w-[300px] h-[300px] opacity-70 rounded-full blur-[100px]"></div>

        </div>
        <div className="absolute top-32 text-white font-inter">
            <div className="text-4xl font-extrabold flex flex-col gap-3">
                <div>Big Ideas.</div>
                <div>Creative People.</div>
                <div>New Technology.</div>
            </div>
            <div className="text-lg my-6 leading-8 ">A full-service digital marketing firm that specialises in human-centered experiences. We bring companies and people together.</div>
            <div
                className=""
            >Get Started</div>
            <div>Boasting</div>
            {/* <img src="/images/hero.png" /> */}
        </div>
    </div>
}

export default Hero
