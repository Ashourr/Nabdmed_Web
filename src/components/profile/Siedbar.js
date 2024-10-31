import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import img1 from "../../imges/personalcard.png";
import img2 from "../../imges/Body.png";
import img3 from "../../imges/money.png";
import img4 from "../../imges/folder-open.png";
import img5 from "../../imges/message-question.png";
import img6 from "../../imges/lock.png";
import img7 from "../../imges/language-square.png";
import img8 from "../../imges/logout.png";
import axios from "axios";
function Siedbar(props) {
  let Navigate = useNavigate();
  let handlelLogout = async () => {
    let token = window.localStorage.getItem("token");
    try {
      let res = await axios.post(
        "https://almutamayizun.videosep.com/api/logout",
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.status === 200) {
        window.location.reload();
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("email");
        Navigate(`/`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="sidebar">
      <ul>
        <li className="li1">
          <NavLink
            to={"patient"}
            className={"link Link1"}
            activeclassname="active"
          >
            <img src={img1} alt="..." />

            {props.langs === "en" ? (
              <span>معلومات المرضى</span>
            ) : (
              <span>Personal Information</span>
            )}
          </NavLink>
        </li>
        <li className="li1">
          <NavLink
            to={"addpatient"}
            className={"link Link1"}
            activeclassname="active"
          >
            <img src={img2} alt="..." />
            {props.langs === "en" ? (
              <span>إضافة المرضى</span>
            ) : (
              <span>Add Patients</span>
            )}
          </NavLink>
        </li>
        <li className="li1">
          <Link
            to={"Editprofile"}
            className={"link Link1"}
            activeclassname="active"
          >
            <img src={img3} alt="..." />
            {props.langs === "en" ? (
              <span>تعديل الملف الشخصي</span>
            ) : (
              <span>Edit profile</span>
            )}
          </Link>
        </li>
        <li className="file">
          <Link to={""} className={"link"}>
            <img src={img4} alt="..." />
            {props.langs === "en" ? (
              <span>الملف الطبي</span>
            ) : (
              <span>Medical File</span>
            )}
          </Link>
        </li>
        <li className="li1">
          <Link to={""} className={"link link2"}>
            <img src={img5} alt="..." />
            {props.langs === "en" ? <span>التعليمات</span> : <span>FAQ</span>}
          </Link>
        </li>
        <li className="li1">
          <Link to={""} className={"link link2"}>
            <img src={img6} alt="..." />
            {props.langs === "en" ? <span>حماية</span> : <span>Security</span>}
          </Link>
        </li>
        <li className="li1">
          <Link to={""} className={"link link2"} activeclassname="active">
            <img src={img7} alt="..." />
            {props.langs === "en" ? <span>لغة</span> : <span>Language</span>}
          </Link>
        </li>
        <li>
          <Link onClick={() => handlelLogout()} className="logout">
            <img src={img8} alt="..." />
            {props.langs === "en" ? (
              <span>تسجيل الخروج</span>
            ) : (
              <span>Log Out</span>
            )}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Siedbar;
