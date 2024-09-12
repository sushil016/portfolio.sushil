import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

interface HomeProps {
  bgVariant: string;
  setBgVariant: React.Dispatch<React.SetStateAction<string>>;
  cursorText: string;
  setCursorText: React.Dispatch<React.SetStateAction<string>>;
}

const Home: React.FC<HomeProps> = ({ setBgVariant, setCursorText })=> {
  function textEnter(){
    setBgVariant("nameCursor")
    setCursorText("Name")
  }

  function textOut(){
   setBgVariant("default")
   setCursorText("")
  }
  
  return (
    <>
      <div className="bg-[#1E1E2E] h-screen w-full flex">
        <div className="w-1/2 h-screen flex justify-center items-center flex-col">
          <div 
          onMouseEnter={textEnter}
          onMouseLeave={textOut}
           className="text-[#B2DBF2] text-center text-[80px] font-bold pointer-events ">
            Sushil Here!
          </div>
          <div className="text-[#CAA6F7] text-center text-[30px] font-bold ml-[40px] mt-6 ">
            Full Stack Devloper | Open source
          </div>
          <div className="text-[#CAA6F7] text-center text-[30px] font-bold ml-[60px] w-[600px]  p-8">
            Feel free to tweak it to match 
            your style!
          </div>
          <div className="flex  bg-slate-900 p-4 rounded-full gap-12"> 
            <div><button><GitHubIcon /></button></div>
            <div><button><LinkedInIcon /></button></div>
            <div><button><TwitterIcon /></button></div>
            <div><button><InstagramIcon /></button></div>
          </div>
        </div>
        <div className="text-white text-center h-full w-1/2 text-2xl font-bold flex justify-center items-center bg-slate-800">
          3D artist here
        </div>
      </div>
      <div className="bg-[#353576] h-screen w-full ">
        This is the home page baby{" "}
      </div>
    </>
  );
};

export default Home;
// #1E1E2E
// #B2DBF2
