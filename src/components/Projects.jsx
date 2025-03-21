import ChatApplication from "../assets/images/chat_application.png"; // Replace the import path
import AppointmentBookingSystem from "../assets/images/appointment_booking_system.png"; // Replace the import path
import Gynecology from "../assets/images/gynecology.png"; // Replace the import path
import Controller from "../assets/images/controller.png"; // Replace the import path
import { Img } from 'react-image';
// import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandGithub } from "react-icons/tb";
import SectionTitle from "./SectionTitle";
import { RxOpenInNewWindow } from "react-icons/rx";

const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Some Things I have Built" />
      {/* ============ Project One Start here ================ */}
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://github.com/Katheesh1224/React-chat-application"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <Img
                className="w-full h-full object-contain"
                src={ChatApplication}
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Personal Project
              </p>
              <h3 className="text-2xl font-bold">Chat Application</h3>
            </div>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
              <span className="text-textGreen">Realtime</span> chat application project. 
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>React.js</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Firebase</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/Katheesh1224/React-chat-application"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TbBrandGithub />
              </a>
            </div>
          </div>
        </div>
        {/* ============ Project One End here ================== */}
        {/* ============ Project Two Start here ================ */}
        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://github.com/Katheesh1224/appointment-booking-system"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <Img
                className="w-full h-full object-contain"
                src={AppointmentBookingSystem}
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Personal Project
              </p>
              <h3 className="text-2xl font-bold">Appointment Booking System</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md xl:-mr-16">
              Realtime online appointment booking system for an organization.         
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>React.js</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MYSQL</li>
              <li>Tailwind CSS</li>
              <li>JWT</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/Katheesh1224/appointment-booking-system"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TbBrandGithub />
              </a>
              {/* <a
                className="hover:text-textGreen duration-300"
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineYoutube />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <RxOpenInNewWindow />
              </a> */}
            </div>
          </div>
        </div>
        {/* ============ Project Two End here ================== */}
        {/* ============ Project Three Start here ============== */}
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://github.com/Katheesh1224/Gynecology"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <Img
                className="w-full h-full object-contain"
                src={Gynecology}
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Academic Project
              </p>
              <h3 className="text-2xl font-bold">Gynecology Ward Management System</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md">
            A Hospital Gynecology Ward Management System is a specialized software solution designed to streamline and optimize the operations of a gynecology ward within a healthcare facility.
              {/* displays, account linking with <span className="text-textGreen">O-auth</span> and purchasing via <span className="text-textGreen">Stripe</span>. */}
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>React.js</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MYSQL</li>
              <li>Tailwind CSS</li>
              <li>JWT</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/Katheesh1224/Gynecology"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TbBrandGithub />
              </a>
              {/* <a
                className="hover:text-textGreen duration-300"
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineYoutube />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <RxOpenInNewWindow />
              </a> */}
            </div>
          </div>
        </div>
        {/* ============ Project Three End here ================== */}
        {/* ============ Project One Start here ================ */}
        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://www.tinkercad.com/things/4q2eHCCSmI8?sharecode=EY-PFJC6uLAvtlFCwfI_wL4zyqxVsicpRCqK5WwNSY8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <Img
                className="w-full h-full object-contain"
                src={Controller}
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Academic Project
              </p>
              <h3 className="text-2xl font-bold">Room Temperature Controller</h3>
            </div>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
              <span className="text-textGreen">IoT-based</span>  project, developed as automatic room temperature controller system using {"  "}
              <span className="text-textGreen">Arduino</span>.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Tinkercad</li>
              <li>Arduino IDE</li>
              <li>C programming</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://www.tinkercad.com/things/4q2eHCCSmI8?sharecode=EY-PFJC6uLAvtlFCwfI_wL4zyqxVsicpRCqK5WwNSY8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ Project One End here ================== */}
      </div>
    </section>
  );
};

export default Projects;
