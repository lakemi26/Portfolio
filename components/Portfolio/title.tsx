import React from "react";

interface CardTitleProps {
  title: string;
}

const CardTitle = ({ title }: CardTitleProps) => {
  return (
    <div>
      <p className="text-lg justify-center">{title}</p>
    </div>
  );
};

export default CardTitle;
