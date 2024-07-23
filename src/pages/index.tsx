import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import CustomAlert from "@/components/CustomAlert";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [message, setMessage] = useState("");
  const [alertOpen, setAlertOpen] = useState(false);

  function handleChange(e: any) {
    if (alertOpen) {
      setAlertOpen(false)
    }
    setMessage(e.target.value);
  }

  return (
    <div className="w-full h-screen relative flex flex-col gap-[20px] justify-center items-center">
      {alertOpen && (
        <div className="absolute w-full h-auto top-[40px] left-[37.5%]">
          <CustomAlert message={message} setAlertOpen={setAlertOpen} />
        </div>
      )}
      <input onChange={(e: any) => handleChange(e)} type="text" className="w-[300px] h-[60px] border-[#000000] px-[10px] border-[2px] rounded-xl" value={message} />
      <button onClick={() => setAlertOpen(true)} className="w-[300px] h-[60px] bg-white border-blue-400 hover:border-yellow-400 border-[2px] rounded-xl flex flex-col justify-center items-center" disabled={!message ? true : false}> Send</button>
    </div>
  );
}
