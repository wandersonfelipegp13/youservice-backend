import { ReactNode } from "react";
import logoImg from "../assets/images/logo.svg";
import "../styles/menu-bar.scss";

type MenuBarProps = {
  children?: ReactNode;
};

export function MenuBar(props: MenuBarProps) {
  return (
    <div className="menu-bar">
      <img src={logoImg} alt="YouService" />
      {props?.children}
    </div>
  );
}
