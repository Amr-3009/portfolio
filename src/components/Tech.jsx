import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import Tooltip from "@mui/material/Tooltip";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <Tooltip title={technology.name} key={technology.name}>
          <div className="w-28 h-28">
            <BallCanvas icon={technology.icon} />
          </div>
        </Tooltip>
      ))}
    </div>
  );
};

const WrappedTech = SectionWrapper(Tech, "");
export default WrappedTech;
