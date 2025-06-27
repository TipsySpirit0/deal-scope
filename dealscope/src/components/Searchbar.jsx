export default function Searchbar(){
    return(
        <div className="p-3 w-full flex justify-center sticky">
            <input className="sm:w-full lg:w-[1000px] px-2 py-3 border border-gray-300 rounded-lg mr-2 bg-gray-50 focus:bg-transparent"/>
            <button type="button" className="text-white text-xl font-bold bg-black py-2 w-36 rounded-lg border border-black transition duration-100 hover:border-black hover:bg-white hover:text-black">Submit</button>
        </div>
    )
}