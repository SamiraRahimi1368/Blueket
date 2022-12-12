import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

// 1- how to skip many slides per swipe
// 2- how to show half of the next slide, a good UX feedback

const Users = ({ users }) => {

    return <Swiper
        spaceBetween={20}
        slidesPerView={2.6}
        slidesPerGroup={4}
        className="text-white grid mx-auto max-w-screen-md grid-cols-3 gap-x-6 gap-y-20 mt-5 select-none cursor-grab"
    >
        {
            users.map(users => <SwiperSlide
                key={users.id}
                className="border border-orange-300	rounded-lg p-5 	"
            >
                <h3 >Name: {users.firstName} {users.lastName}</h3>
                <h3 >Age : {users.age}</h3>
                <h3 >Email: {users.email}</h3>
                <h3 >Phone: {users.phone}</h3>
            </SwiperSlide>)
        }
    </Swiper>
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
