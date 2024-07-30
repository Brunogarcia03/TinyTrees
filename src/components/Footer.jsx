import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaTelegram,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="2xl:max-w-[1280px] w-full mx-auto flex flex-col gap-8">
      <div className="flex flex-col mt-8">
        <div className="mb-[20px] h-[2px] bg-[#fff] opacity-10" />
        <div className="flex items-center justify-between flex-col md:flex-row gap-4 mx-10 mb-5">
          <h4 className="font-extrabold text-[24px] text-white">TinyTrees</h4>
          <p className="font-normal text-[14px] text-[#fff] opacity-50">
            Copyright © 2024 TinyTrees. All rights reserved.
          </p>
          <div className="flex gap-4">
            <FaTwitter className="w-[24px] h-[24px] object-contain" />
            <FaTelegram className="w-[24px] h-[24px] object-contain" />
            <FaInstagram className="w-[24px] h-[24px] object-contain" />
            <FaFacebook className="w-[24px] h-[24px] object-contain" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
