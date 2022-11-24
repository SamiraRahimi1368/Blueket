const About = () => {
    return <div><head>
        <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    </head>

        <div className=
            'bg-indigo-100'>
            <h1 className="flex mt-8 flex justify-center gap-4 py-4 font-bold  text-sm tracking-widest text-blue-800 z-10 relative"> About Us </h1>
            <div className="flex flex-row mt-8  justify-center justify-center font-light  text-sm tracking-widest decoration-slate-800 z-10 relative">
                <div className="basis-1/4  ">

                    <ul class="list-none hover:list-disc text-sm ">

                        <li className="list-none h-8"> <a className="hover:bg-blue-500 hover:text-white cursor-pointer px-4 py-2 transition duration-500 rounded-lg hover:shadow-sm">Home</a> </li>

                        <li className="list-none h-8"> <a className="hover:bg-blue-500 hover:text-white cursor-pointer px-4 py-2 transition duration-500 rounded-lg hover:shadow-sm">About</a> </li>
                        <li className="list-none h-8"> <a className="hover:bg-blue-500 hover:text-white cursor-pointer px-4 py-2 transition duration-500 rounded-lg hover:shadow-sm">Contact</a> </li>
                        <li className="list-none h-8"> <a className="hover:bg-blue-500 hover:text-white cursor-pointer px-4 py-2 transition duration-500 rounded-lg hover:shadow-sm">Services</a> </li>
                    </ul>

                    <br />

                </div>
                <div className="basis-1/4 ">
                    <ul class="list-none hover:list-disc text-sm ">
                        <li className="list-none h-12"><button class="bg-blue-500 text-white active:bg-blue-600 font-bold  text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
                        >



                            <i className="fa-sharp fa-solid fa-camera w-5"></i>Instagram</button></li>
                        <li className="list-none h-12"><button class="bg-blue-500 text-white active:bg-blue-600 font-bold  text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
                        >

                            <i className="fa-sharp fa-solid fa-camera w-5"></i>Telegram</button></li>
                        <li className="list-none h-12"><button class="bg-blue-500 text-white active:bg-blue-600 font-bold  text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
                        >

                            <i className="fa-sharp fa-solid fa-camera w-5"></i>Facebook</button></li>
                        
                    </ul>

                </div>
                <div className="basis-1/4 ">
            <ul class="list-none hover:list-disc text-sm ">
            <li className="list-none h-12">
            <i class="fa-solid fa-phone"> +91 98252 42434</i>
</li>
<li className="list-none h-12">
            <i class="fa-solid fa-phone">  +91 94261 48553
</i>
</li>
<li className="list-none h-12">
<i class="fa-solid fa-envelope ">info@itcodes.com</i>
</li>
</ul>
            </div>
            

            </div>
            
        </div>
    </div>



}

export default About