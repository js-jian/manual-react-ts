import React from "react";

interface HeaderProps {
  className?: string;
}

const Header: React.FC = (props: HeaderProps) => {
  return <div className={props.className}>Header</div>;
};

export default Header;
