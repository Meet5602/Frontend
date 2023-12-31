import React from 'react'
import {ReactNavbar} from "overlay-navbar"
import logo from "../../../images/logo.png"
import { MdAccountBox } from "react-icons/md"
import { ImSearch } from "react-icons/im"
import { FiShoppingBag } from "react-icons/fi"
import "./Header.css"
const options = {
  burgerColorHover:"#900",
  logo,
    burgerColor:"crimson",
    logoWidth: "20vmax",
    navColor1: "white",
    logoHoverSize: "10px",
    logoHoverColor: "#eb4034",
    link1Text: "Home",
    link2Text: "Products",
    link3Text: "Contact",
    link4Text: "About",
    link1Url: "/",
    link2Url: "/products",
    link3Url: "/contact",
    link4Url: "/about",
    link1Size: "1.3vmax",
    link1Color: "rgba(35, 35, 35,0.8)",
    nav1justifyContent: "flex-end",
    nav2justifyContent: "flex-end",
    nav3justifyContent: "flex-start",
    nav4justifyContent: "flex-start",
    link1ColorHover: "#eb4034",
    link1Margin: "1vmax",

    profileIcon: true,
    ProfileIconElement: MdAccountBox,
    profileIconUrl: "/login",
    profileIconColor: "rgba(35, 35, 35,0.8)",
    profileIconColorHover: "#eb4034",

    searchIcon: true,
    SearchIconElement: ImSearch,
    searchIconColor: "rgba(35, 35, 35,0.8)",
    searchIconColorHover: "#eb4034",

    cartIcon: true,
    CartIconElement: FiShoppingBag,
    cartIconColor: "rgba(35, 35, 35,0.8)",
    cartIconColorHover: "#eb4034",
    cartIconMargin: "1vmax",
}
function Header() {
  return (
    <div>
        {/* Header */}
    <ReactNavbar {...options}/>

    </div>

  )
}

export default Header