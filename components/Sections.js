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
    return <div className="text-white">
        {
            scopes.map(i => <div key={i.id}>
                <img src={i.image} />
                <span>{i.title}</span>
            </div>)
        }
    </div>
}

export default Sections
