export default function Dashboard(){
    return(
        <div className="flex align-middle">
            <div className="">
                <form action="GET">
                    <input type="search" name="product" id="product" placeholder="Search for Product" />
                    <button type="button">Submit</button>
                </form>
            </div>
        </div>
    );
}