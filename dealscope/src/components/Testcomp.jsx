import { RiShareBoxLine } from "react-icons/ri";

export default function Testcomp() {
  return (
    <div className="flex justify-center items-center bg-slate-50 h-screen flex-col">
      <div className="text-center">
        <h1 className="text-5xl font-semibold mb-9">Test Component</h1>
        <p>This is a test component to verify routing and rendering.</p>
      </div>

      <a href={props.url} target="_blank" rel="noopener noreferrer" className="flex-col text-black flex border-slate-300 translate hover:scale-105 border rounded-xl w-[325px] h-[400px] m-4 p-3">        <img src="" alt="" />
        <img src={props.img} alt="" className="w-fit h-full"/>
        <div className="flex justify-between">
          <p className="px-2 py-1 bg-black text-white w-fit rounded-xl">{props.platform}</p>
          <div className="flex">
            <RiShareBoxLine />
            <p>visit</p>
          </div>
        </div>
        <h1 className="font-bold text-lg text-left">{props.product_name}</h1>
        <p className="">{props.price}</p>
      </a>

      {/* <a href={props.url} target="_blank" rel="noopener noreferrer" className="text-black flex border-slate-300 translate hover:scale-105 border rounded-xl w-[500px] h-[250px] items-center m-4">                            
            <img src={props.img} alt="" className="w-fit h-full rounded-xl" />
            <div className="flex flex-col overflow-hidden text-ellipsis h-1/2">
                <h2 className="text-xl font-bold overflow-hidden text-ellipsis h-1/2">{props.product_name}</h2>
                <p className="text-slate-500">{props.price}</p>
                <p>{props.platform}</p>
            </div>                               
        </a> */}

    </div>
  );
}