const Services = () => {
return <div>
<h1 className="flex mt-8 flex justify-center gap-4 py-4 font-bold uppercase text-lg tracking-widest text-blue-800 z-10 relative"> Our Services </h1>
<div className="flex flex-row mt-8  justify-center justify-center font-light uppercase text-lg tracking-widest decoration-slate-800 z-10 relative">
  <div className="basis-1/4  ">
  <img
            src="https://picsum.photos/500/500"
            className="w-60 aspect-video flex justify-center"
        />
        <br/>
     <p class="normal-case decoration-black bg-orange-600 px-8 py-3 mt-8 inline-block rounded-md text-white uppercase tracking-wider text-sm font-light hover:bg-lime-900  cursor-pointer transition duration-1000 hover:scale-110">The quick brown fox jumps.</p>
  </div>
  <div className="basis-1/4 ">
  <img
            src="https://picsum.photos/500/500"
            className="w-60 aspect-video flex justify-center "
        />
        <br/>
        <p class="normal-case decoration-black bg-orange-600 px-8 py-3 mt-8 inline-block rounded-md text-white uppercase tracking-wider text-sm font-light hover:bg-lime-900  cursor-pointer transition duration-1000 hover:scale-110 ">The quick brown fox jumps </p>
  </div>
  <div className="basis-1/4 ">
  <img 
            src="https://picsum.photos/seed/picsum/500/500"
            className="w-60 aspect-video flex justify-center"
        />
        <br/>
        <p class="normal-case decoration-slate-50 bg-orange-600 px-8 py-3 mt-8 inline-block rounded-md text-white uppercase tracking-wider text-sm font-light hover:bg-lime-900  cursor-pointer transition duration-1000 hover:scale-110">The quick brown fox jumps </p>
  </div>
</div>

    </div>


}

export default Services
