import React from "react";
export type ChildrenNodes = JSX.Element | JSX.Element[];
const PageContainer = ({ children }: { children: ChildrenNodes }) => {
  return <div className="text-blue-600">{children}</div>;
};

export default PageContainer;
