export default function Dashboard(){
    return(
        <div className="flex justify-center items-center bg-slate-50 max-h-lvh min-h-screen">
            <div className="text-center">
                <h1 className="text-5xl font-semibold mb-9">DealScope</h1>
                <form action="GET" className="flex flex-col items-center gap-5">
                    <input type="search" name="product" id="product" placeholder="Search for Product" className="w-96 h-16 p-4 rounded-lg text-black bg-gray-100 border border-slate-300"/>
                    <button type="button" className="text-white font-bold bg-black py-4 w-96 rounded-lg border hover:border-black hover:bg-white hover:text-black">Submit</button>
                </form>
            </div>
        </div>
    );
}