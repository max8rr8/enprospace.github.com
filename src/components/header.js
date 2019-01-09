import React from "react";
import HeaderButton from "./headerButton";

import "./../styles/header.css"

export default class Header extends React.Component {
  render(){
    return <div id="header">
      <img src="static/ENPROSPACE_LOGO_WHITE.png" height="50" width="88"/>
      <HeaderButton text="Главная" link="Main"/>
      <HeaderButton text="О нас" link="Main"/>
      <HeaderButton text="Услуги" link="Main"/>
      <HeaderButton text="Контакты" link="Main"/>
    </div>
  }
}