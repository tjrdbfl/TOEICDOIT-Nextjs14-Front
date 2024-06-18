import {FcGoogle} from "react-icons/fc";


const GoogleAuthBtn = () => {
    return (<>
        <button
            type="button"
            className="w-full h-auto mt-[3%] mb-[5%] flex items-center justify-center p-[1%] py-[2.5%] shadow-md border-gray-100 border-[1px] rounded-lg hover:bg-slate-50 hover:transition-all hover:border-2 hover:duration-75 "
            onClick={() => {}}
        >
            <FcGoogle className="h-[50%] w-[6%] mr-[5%]" />
            <p className="text-xl text-slate-500 font-bold ">구글 계정으로 시작</p>
        </button>
    </>);
}
export default GoogleAuthBtn;