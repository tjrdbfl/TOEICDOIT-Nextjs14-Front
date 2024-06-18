import Sidebar from "@/components/my-page/Sidebar";
import { useRouter } from "next/router";

export const metadata = {
    title: "Toeicdoit - My Page",
    description: "",
  };

export default function MyPageLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    
    return (
      <div className="flex flex-row items-center justify-between w-full h-full md:py-[10%] lg:py-[2%] bg-white lg:gap-x-10 md:gap-x-24 sm:gap-x-40">

        <div className="w-[15%]">
            <div className="mt-[10%]"/>
        <Sidebar/>
        </div>
        <div className="w-[82%]">
        {children}
        </div>
      </div>
    );
  }
  