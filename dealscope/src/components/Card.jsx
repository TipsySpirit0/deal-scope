import { RiShareBoxLine } from "react-icons/ri";

export default function Card(props) {
    return(
        <a href={props.url} target="_blank" rel="noopener noreferrer" className="flex-col gap-2 text-black flex border-slate-300 translate transition duration-75 hover:scale-[1.025] border rounded-lg max-w-[375px] max-h-[550px] m-4 py-4 px-4"> 
            <img src={props.img} alt="" className="w-[50%] h-[50%] self-center"/>
            <div className="flex justify-between m-1">
                <p className="px-2 py-1 text-sm font-semibold bg-black text-white w-fit rounded-xl">{props.platform}</p>
                <div className="flex">
                    <RiShareBoxLine />
                    <p>visit</p>
                </div>
            </div>
            <h1 className="font-bold text-lg text-left overflow-hidden text-ellipsis">{props.product_name}</h1>
            <p className="text-left">{props.price}</p>
        </a>
    );
}