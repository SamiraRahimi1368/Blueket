import Service from "./Service"

const Services = () => {
    return <div className="relative" id="services">
        <div className="absoulte text-white flex justify-center text-center text-3xl font-bold font-inter">
            Services We Provide
        </div>
        <div className="pr-20 pt-5 absoulte text-white flex justify-center text-center text-1xl  font-inter">
            Blueket overcomes challenges, achieves results, and adds value to our clients and partners.
            Take a look at some of our clients' success stories.
        </div>

        <div class=" text-white grid grid-cols-2  mt-20  ">

            <Service
                image='/images/webdesign.jpg'
                title='Hasan naghi'
                items={[
                    'Item 1',
                    'Item 2',
                    'Item 3'
                ]}
            />

            <Service
                image='/images/android-service.jpg'
                title='Rahim Ali'
                items={[
                    'Another 1',
                    'Another 2',
                    'Another 3'
                ]}
            />
        </div>
        <div class=" text-white grid grid-cols-2  mt-20  ">

            <Service
                image='/images/webdesign.jpg'
                title='Hasan naghi'
                items={[
                    'Item 1',
                    'Item 2',
                    'Item 3'
                ]}
            />

            <Service
                image='/images/android-service.jpg'
                title='Rahim Ali'
                items={[
                    'Another 1',
                    'Another 2',
                    'Another 3'
                ]}
            />
        </div>






    </div>
}

export default Services
