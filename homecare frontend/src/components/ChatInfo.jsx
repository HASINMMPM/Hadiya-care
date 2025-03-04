import React, { useEffect, useState } from "react";

const ChatInfo = () => {
  const [show, setShow] = useState(true);
  const [time,setTime] = useState("")

  function formatTime(number) {
    return number < 10 ? '0' + number : number;
}
  useEffect(()=>{
  
      let now = new Date();
      let hours = formatTime(now.getHours());
      let minutes = formatTime(now.getMinutes());
      const currentMin = hours+":"+minutes
      setTime (currentMin)
  
  },[time])

  


  if (show) {
    return (
      <article className="w-screen mx-auto">

      <div className="z-60 fixed bottom-15  bg-white p-2">
        <div className="flex items-start justify-end gap-2.5 text-[14px] md:text-lg lg:text-xl">
        <img
            className="w-10 h-10 p-1 bg-bg rounded-full"
            src="/logo 339.webp"
            alt="Hadiya care Logo"
          />
          <div className="flex flex-col gap-1 w-full max-w-[320px] md:max-w-2xl ">
            <div className="flex  items-center justify-between space-x-2 rtl:space-x-reverse ml-2.5">
              <div className="flex flex-row gap-3 justify-between">
                <span className="text-sm font-semibold text-gray-900 ">
                  Hadiya Care
                </span>
                <span className="text-sm font-normal text-gray-500 ">
                 {time}
                </span>
              </div>
            <span onClick={() => setShow(false)} className="cursor-pointer px-1">X</span>

            </div>
            <div className="flex flex-col  p-4 border-gray-200 bg-blue text-white rounded-tr-xl  rounded-b-xl">
              <p className=" font-normal whitespace-normal">
              We are pleased to announce that <b className="underline">Hilaas Consultancy</b> has rebranded to <b className="underline">Hadiya Care</b>. This change reflects our commitment to providing compassionate and high-quality home care services. While our name has changed, our dedication to your well-being remains unwavering. Thank you for your continued trust and support.
              </p>
            </div>
          </div>
          
        </div>
      </div>
      </article>
    );
  }
};

export default ChatInfo;
