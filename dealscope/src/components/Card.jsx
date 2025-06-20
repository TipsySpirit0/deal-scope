export default function Card(props) {
    return(
        <a href={props.url} target="_blank" rel="noopener noreferrer" className="text-black flex border-black border rounded-xl w-[500px] h-[250px] items-center p-2 m-2">                            
            <img src={props.img} alt="" className="w-fit h-full" />
            <div className="flex flex-col">
                <h2 className="text-xl font-bold">{props.product_name}</h2>
                <p>{props.price}</p>
            </div>                               
        </a>
    );
}