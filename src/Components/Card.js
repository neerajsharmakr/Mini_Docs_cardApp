import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoIosCloseCircle } from "react-icons/io";
import { motion } from "framer-motion";

const Card = ({ data, referance }) => {
  return (
    <>
      <motion.div
        drag
        dragConstraints={referance}
        whileDrag={{ scale: 1.2 }}
        whileHover={{ scale: 0.8 }}
        animate={{ x: 100 }}
        className="relative flex-shrink-0 rounded-[45px] w-60 h-72 bg-zinc-900/90 text-white px-8 py-10 overflow-hidden"
      >
        <FaFileAlt />
        <p className="text-sm mt-5 leading-tight font-semibold">{data.desc}</p>
        <div className="footer absolute bottom-0  w-full   left-0">
          <div className="flex item-center justify-between py-3 px-8 mb-3">
            <h5>{data.filesize}</h5>
            <span className="w-7 h-7 bg-zinc-600 py-1.5 rounded-full flex item-center justify-center">
              {data.close ? (
                <IoIosCloseCircle />
              ) : (
                <LuDownload size=".7em" color="#fff" />
              )}
            </span>
          </div>
          {data.tag.isOpen && (
            <div
              className={`tag w-full py-4 ${
                data.tag.TagColor === "blue" ? "bg-blue-600" : "bg-green-600"
              } flex item-center justify-center`}
            >
              <h3 className="text-sm font-semibold ">{data.tag.tagTitle}</h3>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default Card;
