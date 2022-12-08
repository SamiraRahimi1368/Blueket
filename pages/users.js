const Users = ({ users }) => {

    // const total = props.total
    // const products = props.products

    // const { total, products } = props

    return <div
        className="text-white grid mx-auto max-w-screen-md grid-cols-3 gap-x-6 gap-y-20 mt-5 border-white"
    >
        {
            users.map(users => <div
                key={users.id}
                className="border-solid border-white"
            >
                <h3 className="text-white ">Name: {users.firstName} {users.lastName}</h3>
                <h3 className="text-white ">Age : {users.age}</h3>
                <h3 className="text-white ">Email: {users.email}</h3>
                <h3 className="text-white ">Phone: {users.phone}</h3>
            </div>)
        }
    </div>
}

export default Users

export async function getServerSideProps(context) {

    // data fetching
    var response = await fetch('https://dummyjson.com/users')
    var data = await response.json()

    return {
        props: {
            ...data
        }
    }
}
