import {  Button } from "antd";

const Buttoncustom = ({ text, onClick,className, type = "button", disabled = false })=>  {

  return (
    <Button className={`${className}  text-white  text-semibold bg-blue-600 text-center w-fit py-1 px-7 border-2 border-black  rounded-xl shadow-[0_8px_10px_1px_rgba(51,78,255,0.4)] duration-300 hover:translate-y-0.5 transition-all hover:shadow-[0_8px_10px_1px_rgba(51,78,255,0.6)]` } type={type} onClick={onClick} disabled={disabled}>
      {text}
    </Button>
  );
}



export default Buttoncustom;