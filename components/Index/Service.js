const Service = (props) => {

    return <div className="ml-6  mr-10 flex justify-center rounded-lg bg-zinc-800 	border-gray-300">
        <div>
            {/* <img src={props.image} className=" rounded-md h-50 w-80 p-3 " /> */}
            {/* <div className="text-white flex flex-col text-1xl  font-inter">
                <ul className="p-5 pt-2 text-gray-400  	">
                    {props.title}
                    <svg className="h-8 w-10 text-white-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">  <line x1="5" y1="12" x2="19" y2="12" /></svg>
                    {
                        props.items.map(item => <li className="pt-1 p-5  text-white list-none flex" key={item.id}>
                            <svg className="h-3 w-2 text-white-500 mt-2 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <circle cx="12" cy="12" r="10" /></svg>
                            {item}
                        </li>)
                    }
                </ul>
            </div> */}
        </div>
    </div>
}

export default Service

