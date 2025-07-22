import React, { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { TypingText } from "./CustomTexts";

const Tag = (props: HTMLAttributes<HTMLDivElement>) => {
  const { className, children } = props;

  return (
    <div
      className={twMerge(
        "inline-flex border border-[#F48C06] gap-2 text-[#F48C06] px-3 py-1 rounded-full uppercase items-center mb-5",
        className
      )}
    >
      <span>&#10038;</span>
      {/* <span className="text-sm">{children}</span> */}
      <span>
        <TypingText
          // title={children ? children.toString() : ""}
          title={children ? children.toString() : ""}
          textStyles="text-center"
        />
      </span>
    </div>
  );
};

export default Tag;
