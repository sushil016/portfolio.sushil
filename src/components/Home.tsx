import AboutMe from "./AboutMe";
import EmailComponent from "./EmailComponent";
import { DockDemo } from "./Icon";
import { ThreeDCardDemo } from "./profile";
import Project from "./Project";
import Skills from "./Skills";
import Experience from "./Experience";
import { Suspense } from "react";
import ProfileSkeleton from "./ProfileSkeleton";
import DockSkeleton from "./DockSkeleton";

interface HomeProps {
  bgVariant: string;
  setBgVariant: React.Dispatch<React.SetStateAction<string>>;
  cursorText: string;
  setCursorText: React.Dispatch<React.SetStateAction<string>>;
}

const Home: React.FC<HomeProps> = ({ setBgVariant, setCursorText }) => {
  function textEnter() {
    setBgVariant("nameCursor");
    setCursorText("");
  }

  function textOut() {
    setBgVariant("default");
    setCursorText("");
  }

  // // Keyboard event handler for accessibility
  // function handleKeyDown(event: React.KeyboardEvent) {
  //   if (event.key === "Enter" || event.key === " ") {
  //     event.preventDefault();
  //     textEnter();
  //   }
  // }

  // function handleKeyUp(event: React.KeyboardEvent) {
  //   if (event.key === "Enter" || event.key === " ") {
  //     event.preventDefault();
  //     textOut();
  //   }
  // }

  return (
    <>
      <div className="bg-[#1E1E2E] w-full flex flex-col md:flex-row">
        <div className="md:w-1/2 sm:h-full flex justify-center items-center flex-col mt-20">
          <div
            onMouseEnter={textEnter}
            onMouseLeave={textOut}
            // onKeyDown={handleKeyDown}
            // onKeyUp={handleKeyUp}
            tabIndex={0}
            role="button"
            aria-label="Interactive name element"
            className="text-[#B2DBF2] text-left md:text-[80px] text-[50px] font-bold pointer-events focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-lg"
          >
            Sushil Here!
          </div>
          <div className="text-[#CAA6F7] text-center md:text-[30px] text-[20px] font-bold md:ml-[40px] md:mt-2">
            Full Stack Developer | Open source
          </div>
          <div className="text-[#CAA6F7] text-center md:text-[30px] mt-4 text-[20px] font-bold md:ml-[60px] md:w-[600px] p-2">
            Building scalable web applications with Ai Automation
          </div>
          <Suspense fallback={<DockSkeleton />}>
            <DockDemo />
          </Suspense>
          <EmailComponent />
        </div>
        <div className="h-full md:w-1/2 flex justify-center items-center">
          <Suspense fallback={<ProfileSkeleton />}>
            <ThreeDCardDemo />
          </Suspense>
        </div>
      </div>
      <AboutMe />
      <div className="bg-three h-auto ">
        <Skills />
      </div>
      <Experience />
      <Project />
    </>
  );
};

export default Home;
// #1E1E2E
// #B2DBF2
