import React, { useContext, useState } from "react";
import { APP_FEATURES } from "../utils/data";
import HERO_IMG from "../assets/hero-img.png";
import { useNavigate } from "react-router-dom";
import { LuSparkles } from "react-icons/lu";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import Modal from "../Components/Modal";
import { UserContext } from "../Context/userContext";
import ProfileInfoCard from "../Components/Cards/ProfileInfoCard";
import Logo from "../assets/QLogo.png";
import {
  FiTarget,
  FiClock,
  FiEdit3,
  FiHelpCircle,
  FiBookmark,
} from "react-icons/fi";

const ICONS = {
  FiTarget,
  FiClock,
  FiEdit3,
  FiHelpCircle,
  FiBookmark,
};

const LandingPage = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");

  const handleCTA = () => {
    if (!user) {
      setOpenAuthModal(true);
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <>
      <div className="w-full min-h-full bg-[#F8FAFC]">
        {/* <div className="w-[500px] h-[500px] bg-amber-200/20 blur-[65px] absolute top-0 left-0"/> */}
        <div className="container mx-auto px-4 pt-6 pb-[200px] realtive z-10">
          {/* HEADER */}
          <header className="flex justify-between items-center mb-16">
            {/* <div className="text-xl text-black font-bold">Questify</div> */}
            <div className="text-xl text-black font-bold">
              <img src={Logo} className="w-35 h-12 z-10" alt="" />
            </div>
            {user ? (
              <ProfileInfoCard />
            ) : (
              <button
                className="bg-gradient-to-r from-[#6366F1] to-[#38BDF8] text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:bg-[#1E1E1E] hover:text-white border border-white transition-colors cursor-pointer"
                onClick={() => {
                  setOpenAuthModal(true);
                }}
              >
                Login / Sign Up
              </button>
            )}
          </header>

          {/* HERO SECTION */}
          <div className="flex flex-col md:flex-row items-center">
            {/* Left Side */}
            <div className="w-full md:w-1/2 pr-4 mb-8 md:mb-0">
              {/* Badge */}
              <div className="flex items-center justify-left mb-2">
                <div className="flex items-center gap-2 text-[13px] text-[#3730A3] font-semibold bg-[#EEF2FF] px-3 py-1 rounded-full border border-[#C7D2FE]">
                  <LuSparkles /> AI Powered
                </div>
              </div>

              {/* Heading */}
              <h1 className="text-5xl text-[#1E1E1E] font-bold mb-6 leading-tight">
                Accelerate prep with <br />
                <span className="text-transparent bg-clip-text bg-[radial-gradient(circle,_#6366F1_20%,_#38BDF8_100%)] bg-[length:200%_200%] animate-text-shine font-semibold">
                  AI-powered
                </span>{" "}
                Learning
              </h1>
            </div>

            {/* Right Side */}
            <div className="w-full md:w-1/2">
              <p className="text-[17px] text-[#6B7280] mr-0 md:mr-20 mb-6">
                Get role-specific questions, expand answers when you need them,
                dive deeper into concepts, and organize everything your way.
                From preparation to mastery - your ultimate interview toolkit is
                here.
              </p>
              <button
                className="bg-[#111111] text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:bg-[#E0E7FF] hover:text-black border border-[#111111] hover:border-[#6366F1] transition-colors cursor-pointer"
                onClick={handleCTA}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full min-h-full relative z-10">
        <div>
          <section className="flex items-center justify-center -mt-36">
            <img
              src={HERO_IMG}
              alt="Hero Image"
              className="w-[80vw] rounded-xl shadow-xl"
            />
          </section>
        </div>
       <div className="w-full bg-[#F9FAFB] py-24 px-4 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-block mb-4 text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-sky-500 px-4 py-1 rounded-full shadow">
            What You Get
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Supercharge Your Interview Prep
          </h2>
          <p className="text-base text-slate-600 mt-4">
            Discover AI-powered features built to personalize, accelerate,
            and streamline your preparation journey.
          </p>
        </div>

        {/* First Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full mb-10">
          {APP_FEATURES.slice(0, 3).map((feature) => {
            const IconComponent = ICONS[feature.icon];
            return (
              <div
                key={feature.id}
                className="group relative bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-md bg-indigo-100 text-indigo-600 mb-4 text-xl mx-auto">
                  {IconComponent && <IconComponent />}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Second Row - Centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center w-full max-w-4xl">
          {APP_FEATURES.slice(3).map((feature) => {
            const IconComponent = ICONS[feature.icon];
            return (
              <div
                key={feature.id}
                className="group relative bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-md bg-indigo-100 text-indigo-600 mb-4 text-xl mx-auto">
                  {IconComponent && <IconComponent />}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>

        <div className="text-sm bg-gray-50 text-slate-600 font-bold text-center p-5 mt-5">
          Made with ❤️ by Rushikesh D
        </div>
      </div>

      <Modal
        isOpen={openAuthModal}
        onClose={() => {
          setOpenAuthModal(false);
          setCurrentPage("login");
        }}
        hideHeader
      >
        <div>
          {currentPage === "login" && <Login setCurrentPage={setCurrentPage} />}
          {currentPage === "signup" && (
            <Signup setCurrentPage={setCurrentPage} />
          )}
        </div>
      </Modal>
    </>
  );
};

export default LandingPage;
