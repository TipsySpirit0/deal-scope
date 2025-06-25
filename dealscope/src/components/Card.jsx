import { RiShareBoxLine } from "react-icons/ri";

export default function Card(props) {
    return(
        <a href={props.url} target="_blank" rel="noopener noreferrer" className="flex-col gap-2 text-black flex border-slate-300 translate hover:scale-105 border rounded-xl w-[350px] h-[500px] m-4 p-3"> 
            <img src={props.img} alt="" className="w-fit h-2/3"/>
            <div className="flex justify-between m-1">
                <p className="px-2 py-1 text-sm font-semibold bg-black text-white w-fit rounded-xl">{props.platform}</p>
                <div className="flex">
                    <RiShareBoxLine />
                    <p>visit</p>
                </div>
            </div>
            <h1 className="font-bold text-lg text-left overflow-hidden text-ellipsis h-1/2">{props.product_name}</h1>
            <p className="text-left">{props.price}</p>
        </a>
    );
}