import { ReactNode } from "react";
import logoImg from "../assets/images/logo.svg";
import "../styles/menu-bar.scss";

type MenuBarProps = {
  children?: ReactNode;
};

export function MenuBar(props: MenuBarProps) {
  return (
    <div className="menu-bar">
      <img id="logo" src={logoImg} alt="YouService" />
      <div className="menu-content">{props?.children}</div>
    </div>
  );
}
