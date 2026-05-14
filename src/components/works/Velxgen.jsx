import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const Velxgen = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >

      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Software Engineer (Part time)
        <span className="text-textGreen tracking-wide">@Velxgen</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Mar 2024 - Present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Developed VELX-POS, a full-stack POS system using React and Laravel for sales and inventory
          management.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Designed RESTful APIs and modular backend architecture for scalable system development.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Built responsive interfaces for real-time billing and product management.
        </li>
         <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Implemented secure authentication and role-based access control for multi-user environments.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Worked with team members to translate business requirements into functional software features.
        </li>
      </ul>
      
      <div style={{ margin: "50px" }}></div>

      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Intern Software Engineer (Part time)
        <span className="text-textGreen tracking-wide">@Velxgen</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        June 2023 - Mar 2024
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Contributed to full-stack feature development on VELX-POS as an intern, working across React.js
          frontend components and Laravel backend CRUD endpoints under senior engineer mentorship.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Built initial product listing UI and assisted in connecting frontend views to REST API responses,
          learning end-to-end data flow in a production codebase.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Wrote and tested basic database queries for product and inventory tables, learning SQL best
          practices through iterative code review.
        </li>
         <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Participated in Agile sprint planning, stand-ups, and retrospectives, gaining practical exposure to
          professional software delivery within a product team.
        </li>
      </ul>
      
      
    </motion.div>
  );
};

export default Velxgen;
