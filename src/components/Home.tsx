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
      <div className="bg-[#1E1E2E] w-full flex flex-col md:flex-row">
        <div className="md:w-1/2 h-screen flex justify-center items-center flex-col">
          <div
            onMouseEnter={textEnter}
            onMouseLeave={textOut}
            className="text-[#B2DBF2] text-left md:text-[80px] text-[50px] font-bold pointer-events "
          >
            Sushil Here!
          </div>
          <div className="text-[#CAA6F7] text-center md:text-[30px] text-[20px] font-bold md:ml-[40px] md:mt-2">
            Full Stack Devloper | Open source
          </div>
          <div className="text-[#CAA6F7] text-center md:text-[30px] mt-4 text-[20px] font-bold md:ml-[60px] md:w-[600px] p-2">
            Feel free to tweak it to match your style!
          </div>
          <DockDemo />
          <EmailComponent />
        </div>
        <div className="h-full md:w-1/2 flex justify-center items-center">
          <ThreeDCardDemo />
        </div>
      </div>
      <AboutMe />
      <div className="bg-zinc-600 h-[100vh] width=device-width"></div>
    </>
  );
};

export default Home;
// #1E1E2E
// #B2DBF2
