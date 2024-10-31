import React from "react";
import "./services.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faRightLong } from "@fortawesome/free-solid-svg-icons";
import img1 from "../../imges/Services1.png";
import img2 from "../../imges/Services2.png";
import img3 from "../../imges/Services3.png";
import img4 from "../../imges/personalcard.png";
import img5 from "../../imges/Body.png";
import img6 from "../../imges/money.png";
function Serviceshome(props) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container-lg p-1">
      <div className={`serviceshome ${props.langs}`}>
        <div className="title">
          {props.langs === "en" ? (
            <h2>
              اختر من <span>الخدمات</span>
            </h2>
          ) : (
            <h2>
              choose from <span>Services</span>
            </h2>
          )}
          <div>
            {props.langs === "en" ? (
              <Link to={"/routepages"}>عرض الكل</Link>
            ) : (
              <Link to={"/routepages"}>See All</Link>
            )}
          </div>
        </div>
        <Slider {...settings} className={props.langs}>
          <div className="servicediv ser">
            <div className={`service ${props.langs}`}>
              <div className={`ser-atim ${props.langs}`}>
                <div className={`img ${props.langs}`}>
                  <img src={img1} width={"50px"} alt="..." />
                </div>

                {props.langs === "en" ? (
                  <h4>استشارات افتراضية</h4>
                ) : (
                  <h4>Virtual Consultations</h4>
                )}
                <Link to={"/blogpage"}>
                  {props.langs === "en" ? "احجز استشارة" : "Book consultation"}
                  <FontAwesomeIcon icon={faRightLong} className="icon" />
                </Link>
              </div>
            </div>
          </div>
          <div className="servicediv ser">
            <div className={`service ${props.langs}`}>
              <div className={`ser-atim ${props.langs}`}>
                <div className={`img ${props.langs}`}>
                  <img src={img2} width={"50px"} alt="..." />
                </div>
                {props.langs === "en" ? (
                  <h4>احجز استشارة</h4>
                ) : (
                  <h4>Home Care</h4>
                )}
                <Link to={"/homecar"}>
                  {props.langs === "en" ? "احجز خدمة" : "Book Service"}
                  <FontAwesomeIcon icon={faRightLong} className="icon" />
                </Link>
              </div>
            </div>
          </div>
          <div className="servicediv ser">
            <div className={`service ${props.langs}`}>
              <div className={`ser-atim ${props.langs}`}>
                <div className={`img ${props.langs}`}>
                  <img src={img3} width={"50px"} alt="..." />
                </div>
                {props.langs === "en" ? (
                  <h4>زيارة الطبيب</h4>
                ) : (
                  <h4>Doctor Visit</h4>
                )}
                <Link to={"/doctor"}>
                  {props.langs === "en" ? "احجز زيارة" : "Book Visit"}
                  <FontAwesomeIcon icon={faRightLong} className="icon" />
                </Link>
              </div>
            </div>
          </div>
          <div className="servicediv ser">
            <div className={`service ${props.langs}`}>
              <div className={`ser-atim ${props.langs}`}>
                <div className={`img ${props.langs}`}>
                  <img src={img4} width={"50px"} alt="..." />
                </div>
                {props.langs === "en" ? (
                  <h4>معلومات شخصية</h4>
                ) : (
                  <h4>Personal Information</h4>
                )}
                <Link to={"/profile"}>
                  {props.langs === "en"
                    ? "معلومات شخصية"
                    : "Personal Information"}
                  <FontAwesomeIcon
                    icon={faRightLong}
                    className={`icon ${props.langs}`}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="servicediv ser">
            <div className={`service ${props.langs}`}>
              <div className={`ser-atim ${props.langs}`}>
                <div className={`img ${props.langs}`}>
                  <img src={img5} width={"50px"} alt="..." />
                </div>
                {props.langs === "en" ? (
                  <h4>اضافة مريض</h4>
                ) : (
                  <h4>Add Patients</h4>
                )}
                <Link to={"/doctor"}>
                  {props.langs === "en" ? "اضافة مريض" : "Add Patients"}
                  <FontAwesomeIcon
                    icon={faRightLong}
                    className={`icon ${props.langs}`}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="servicediv ser">
            <div className={`service ${props.langs}`}>
              <div className={`ser-atim ${props.langs}`}>
                <div className={`img ${props.langs}`}>
                  <img src={img6} width={"50px"} alt="..." />
                </div>
                {props.langs === "en" ? (
                  <h4>تعديل الملف الشخصي</h4>
                ) : (
                  <h4>Edit profile</h4>
                )}
                <Link to={"/doctor"}>
                  {props.langs === "en" ? "تعديل الملف الشخصي" : "Edit profile"}
                  <FontAwesomeIcon
                    icon={faRightLong}
                    className={`icon ${props.langs}`}
                  />
                </Link>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Serviceshome;
