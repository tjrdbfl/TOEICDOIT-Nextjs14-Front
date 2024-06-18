import Footer from "../Footer";
import Navbar from "../Navbar";

export const metadata = {
  title: "Toeicdoit - Auth Page",
  description: "",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="w-full">
      <div className="w-full md:mt-[12%] lg:mt-[12%] xl:mt-[12%] 2xl:my-[14%] flex justify-center items-center">
        {children}
      </div>
      </div>
    </>

  );
}
