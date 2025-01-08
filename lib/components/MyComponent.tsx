import React from "react";

interface MyComponentProps {
  text: string;
}

export const MyComponent: React.FC<MyComponentProps> = ({ text }) => {
  return (
    <div style={{ padding: "10px", backgroundColor: "lightblue" }}>{text}</div>
  );
};
