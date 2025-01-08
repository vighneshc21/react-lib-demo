import React from "react";

interface BannerProps {
  text: string;
}

export const Banner: React.FC<BannerProps> = ({ text }) => {
  return <div style={{ padding: "10px", backgroundColor: "gray" }}>{text}</div>;
};
