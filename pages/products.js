const Products = ({ total, products }) => {

    // const total = props.total
    // const products = props.products

    // const { total, products } = props

    return <div
        className="text-white grid mx-auto max-w-screen-md grid-cols-3 gap-x-4 gap-y-20"
    >
        {
            products.map(product => <div
                key={product.id}
                className="border-1 border-white"
            >
                <h3>{product.title}</h3>
                <img
                    src={product.thumbnail}
                    className="w-32 h-32 object-cover"
                />
            </div>)
        }
    </div>
}

export default Products

export async function getServerSideProps(context) {

    // data fetching
    var response = await fetch('https://dummyjson.com/products')
    var data = await response.json()

    return {
        props: {
            ...data
        }
    }
}
