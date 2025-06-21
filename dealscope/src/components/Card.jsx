export default function Card(props) {
    return(
        <a href={props.url} target="_blank" rel="noopener noreferrer" className="text-black flex border-slate-300 translate hover:scale-105 border rounded-xl w-[500px] h-[250px] items-center m-4">                            
            <img src={props.img} alt="" className="w-fit h-full rounded-xl" />
            <div className="flex flex-col overflow-hidden text-ellipsis h-1/2">
                <h2 className="text-xl font-bold overflow-hidden text-ellipsis h-1/2">{props.product_name}</h2>
                <p className="text-slate-500">{props.price}</p>
                <p>{props.platform}</p>
            </div>                               
        </a>
    );
}