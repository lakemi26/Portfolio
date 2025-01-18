import React from "react";
import { RippleButton } from "../ui/ripple-button";

interface Button {
  title: string;
  url: string;
}

const Buttons = ({ title, url }: Button) => {
  return (
    <div>
      <RippleButton
        onClick={() => {
          window.open(url, "_blank");
        }}
        className="text-base"
      >
        {title}
      </RippleButton>
    </div>
  );
};

export default Buttons;
