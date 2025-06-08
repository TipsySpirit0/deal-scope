export default function Signin(){
    return(
        <div className="flex bg-slate-50 h-screen justify-center items-center">
            <div className="flex flex-col text-center p-5 bg-slate-300 min-w-96 min-h-96 max-w-fit rounded-lg">
                <h1 className="font-bold pb-10 text-3xl">Sign In</h1>
                <br />
                <div className="flex flex-col">
                    <form action="">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" className="rounded p-1 w-52" placeholder="Enter Email" required/>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" className="rounded p-1 w-52" placeholder="Enter Email" required/>
                    </form>
                </div>
            </div>
        </div>
    );
}