import AboutMe from "./AboutMe";
import EmailComponent from "./EmailComponent";
import { DockDemo } from "./Icon";
import { ThreeDCardDemo } from "./profile";

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

  return (
    <>
      <div className="bg-[#1E1E2E] h-screen w-full flex">
        <div className="w-1/2 h-screen flex justify-center items-center flex-col">
          <div
            onMouseEnter={textEnter}
            onMouseLeave={textOut}
            className="text-[#B2DBF2] text-center text-[80px] font-bold pointer-events "
          >
            Sushil Here!
          </div>
          <div className="text-[#CAA6F7] text-center text-[30px] font-bold ml-[40px] mt-2 ">
            Full Stack Devloper | Open source
          </div>
          <div className="text-[#CAA6F7] text-center text-[30px] font-bold ml-[60px] w-[600px]  p-6">
            Feel free to tweak it to match your style!
          </div>
          <DockDemo />
          <EmailComponent />
        </div>
        <div className="h-full w-1/2 flex justify-center items-center">
          <ThreeDCardDemo />
        </div>
      </div>
      <AboutMe />
      <div className="bg-three h-screen w-full "></div>
    </>
  );
};

export default Home;
// #1E1E2E
// #B2DBF2
