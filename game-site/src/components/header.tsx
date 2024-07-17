import React from "react";

import { Link } from "@mui/material";
import { Breadcrumbs } from "@mui/material";
import "./header.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';




const Header: React.FC = () => {

  return (
    <header className="header">
      <nav className="nav-left" >
      <Link className="link" underline="hover" color="white" variant ="body2" href="/">
        Главная
      </Link>
      <Link className="link" underline="hover" color="white" variant ="body2" href="/about">
        Игровые новости
      </Link>
      <Link className="link" underline="hover" color="white" variant ="body2" href="/">
        Игровые клипы
      </Link>
      <Link className="link" underline="hover" color="white" variant ="body2" href="/about">
        Каталог игр
      </Link>
      <Link className="link" underline="hover" color="white" variant ="body2" href="/">
        Сообщества
      </Link>
      </nav>
      <nav className="nav-right">
      <Link underline="hover" color="white" variant ="body2" href="/login" >
      Авторизация
      </Link>
      <Link  underline="hover" color="white" variant ="body2" href="/regist" >
      Регистрация
      </Link>
      </nav>
    </header>
  );
};
export default Header;
