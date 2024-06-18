import StartLevelTestBtn from "@/components/button/StartLevelTestBtn";
import LogoIcon from "@/components/common/LogoIcon";

const Complete=()=>{
    return(<>
    <div
    className="flex flex-col items-center justify-center">
   <div className="mt-[10%]"/>
   <div className="flex flex-row  animate-slidein500 opacity-0">
   <div className="mt-1">
   <LogoIcon/>
   </div>

   <div
    className="text-[#5AB2FF] text-4xl font-semibold"
    >토익두잇에 오신 것을 환영합니다!</div>
   </div>
   
    <div className="mt-[10%]"/>
    <StartLevelTestBtn/>
    </div>
    </>);
}
export default Complete;