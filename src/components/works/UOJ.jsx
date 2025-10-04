import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const UOJ = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Programmer Cum System Analyst
        <span className="text-textGreen tracking-wide">@University of Jaffna</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        May 2025 - present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Write modern, performant, maintainable code for a diverse array of
          student and staff management project
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Work with a variety of different languages, platforms, frameworks, and
          content management systems such as JavaScript, React, Node.js,
          Express, MariaDB, Docker, and Git.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Communicate with multi-disciplinary teams of developers, designers,
          producers, and clients on a weekly basis
        </li>
      </ul>
    </motion.div>
  );
};

export default UOJ;
