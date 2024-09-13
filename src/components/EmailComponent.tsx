import { Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

const EmailComponent = () => {
  return (
    <>
      <div className="flex bg-three w-[320px] h-[70px] mt-10 borderneutral rounded-2xl">
        <div className="w-8 h-full bg-blueColor overflow-hidden rounded-l-2xl"></div>
        <div className="flex justify-center w-full items-center gap-3">
        <div className="text-neutral-300 hover:text-neutral-400 transition-colors duration-200"> 
          sahanisushil325@gmail.com
        </div>
        <div className="">
        <Link
        
                    href=""
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    <span className="sr-only">Email</span>
                    <Mail className="w-6 h-6 text-iconColor" />
                  </Link>
        </div>
        </div>
      </div>
    </>
  );
};

export default EmailComponent;
