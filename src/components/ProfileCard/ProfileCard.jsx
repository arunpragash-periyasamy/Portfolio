import { TypeAnimation } from "react-type-animation";
import Profile from "../../assets/profile.png";
import { BiLogoMedium } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import { TbBrandLeetcode } from "react-icons/tb";
import { GithubOutlined, WhatsAppOutlined } from "@ant-design/icons";
import SocialMedia from "../SocialMedia/SocialMedia";
const ProfileCard = () => {
  const socialMedia = [
    { icon: TbBrandLeetcode, url : 'https://leetcode.com/u/aparunpragash/' },
    { icon: GithubOutlined , url : 'https://github.com/arunpragash-periyasamy' },
    { icon: FaLinkedinIn , url : 'https://www.linkedin.com/in/arunpragashap' },
    { icon: BiLogoMedium , url : 'https://medium.com/@arunpragashap' },
    { icon: WhatsAppOutlined , url : 'https://wa.me/+916382868122' },
  ];
  return (
    <div className="h-[80vh] min-w-[27vw] xl:min-w-[30vw]  bg-[#141414] rounded shadow-[-13px_-13px_#29231A] relative">
      <div className="h-[50%]">
        <img
          className="h-full w-full"
          src="https://ryancv.bslthemes.com/developer/wp-content/uploads/sites/3/2022/07/dev-bg-3-1200x812.jpg"
          alt=""
        />
      </div>

      <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 mx-auto w-[150px] h-[150px] md:w-[200px] md:h-[200px]  xl:w-[180px] xl:h-[180px] rounded-full shadow-[0_0_15px_5px_#29231A]">
        <img
          src={Profile}
          alt="Profile Image"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <div className="flex justify-center items-center pt-24 ">
      <div className=" inset-x-0 top-[calc(50%+90px)] transform translate-y-4 mx-auto z-50 space-y-7 lg:space-y-2 2xl:space-y-7 md:space-y-10">
        <p className="text-center font-bold text-2xl md:text-3xl 2xl:text-5xl">
          Arunpragash
        </p>
        <div className="flex justify-center text-xl md:text-3xl lg:text-lg xl:text-2xl 2xl:text-4xl">
          <TypeAnimation
            sequence={[
              "Front End Developer",
              1500,
              "Back End Developer",
              1500,
              "Full Stack Developer",
              1500,
            ]}
            wrapper="span"
            speed={50}
            style={{ color: "#F6B846", display: "inline-block" }}
            repeat={Infinity}
          />
        </div>
        <div className="flex justify-center items-center gap-10
        lg:gap-3 2xl:gap-10">
          {socialMedia.map((socialMedium) => (
            <SocialMedia key={socialMedium.url} Icon={socialMedium.icon} url={socialMedium.url}/>
          ))}
        </div>
      </div>
      </div>

      <div className="absolute bottom-0 w-full">
        <div className="flex justify-around md:p-2 lg:p-1 2xl:p-5 border-t-2 border-white text-xl md:text-2xl 2xl:text-4xl font-bold">
          <button className="p-4  hover:p-0 hover:text-[rgba(247,180,56,0.61)] xl:hover:text-4xl ">Resume</button>
          <div className="border border-white"></div>
          <button className="p-4 hover:p-0 hover:text-[rgba(247,180,56,0.61)] xl:hover:text-4xl ">Contact me</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
