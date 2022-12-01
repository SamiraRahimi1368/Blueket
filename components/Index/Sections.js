const scopes = [
    {
        id: 1,
        image: '/images/webdesign.jpg',
        title: 'First section'
    },
    {
        id: 2,
        image: '/images/webdesign.jpg',
        title: 'First section'
    },
    {
        id: 3,
        image: '/images/webdesign.jpg',
        title: 'First section'
    },
    {
        id: 4,
        image: '/images/webdesign.jpg',
        title: 'First section'
    },
    {
        id: 5,
        image: '/images/webdesign.jpg',
        title: 'First section'
    },
    {
        id: 6,
        image: '/images/webdesign.jpg',
        title: 'First section'
    },
]

const Sections = () => {
    return <div
        className="text-white grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mx-4 gap-4 sm:mx-16 sm:gap-6 md:mx-8 lg:mx-16"
    >
        {
            scopes.map(i => <div
                key={i.id}
                className=" border border-gray-600 p-1.5 flex rounded-full items-center gap-2 lg:gap-6"
            >
                <img
                    src={i.image}
                    className="w-12 aspect-square rounded-full lg:w-16"
                />
                <span
                    className="mr-3"
                >{i.title}</span>
            </div>)
        }
    </div>
}

export default Sections
