import React from "react";
import { FaTools } from "react-icons/fa";
import { DiReact, DiNodejsSmall, DiMongodb, DiJavascript } from "react-icons/di";
import {FcTreeStructure} from "react-icons/fc"
import {GiTechnoHeart, GiWorld} from "react-icons/gi"
import {GoBook} from "react-icons/go"
import {MdHearing} from "react-icons/md"

import './card.scss';

const Icon = ({id}) => id === "db" ? <DiMongodb className={`icon ${id}`}/> 
  : id === "front" ? <DiReact className={`icon ${id}`}/> 
  : id === "back"  ? <DiNodejsSmall className={`icon ${id}`}/> 
  : id === "tools" ? <FaTools className={`icon ${id}`}/> 
  : id === "technology" ? <MdHearing className={`icon ${id}`}/> 
  : id === "architecture" ? <FcTreeStructure className={`icon ${id}`}/> 
  : id === "noJs" ? <DiJavascript className={`icon ${id}`}/> 
  : id === "practises" ? <GoBook className={`icon ${id}`}/> 
  : id === "i18n" ? <GiWorld className={`icon ${id}`}/> 
  : id === "curiosity" ? <GiTechnoHeart className={`icon ${id}`}/> 
  : null;

export default React.memo(Icon);
