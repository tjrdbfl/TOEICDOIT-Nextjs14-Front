import RegisterForm from "@/templates/auth/RegisterForm";

const RegisterPage=()=>{
    return(<>
     <div className="auth_form lg:w-[34%] md:w-[60%] sm:w-[90%] lg:p-[2%] p-[3%] mt-[2%]">
        <p className="auth_form_title">Sign-Up</p>
       <RegisterForm/> 
    </div>
    </>);
}
export default RegisterPage;