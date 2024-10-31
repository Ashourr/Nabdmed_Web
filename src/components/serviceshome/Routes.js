import React from "react";
import "./services.css";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import img1 from "../../imges/Services1.png";
import img2 from "../../imges/Services2.png";
import img3 from "../../imges/Services3.png";
import img4 from "../../imges/personalcard.png";
import img5 from "../../imges/Body.png";
import img6 from "../../imges/money.png";

function Routes(props) {
  let navigate = useNavigate();
  let goback = () => {
    navigate(-1);
  };
  return (
    <div className="container">
      <div className={`route ${props.langs}`}>
        <Link onClick={goback}>
          <FontAwesomeIcon
            icon={faLeftLong}
            className={`back ${props.langs}`}
          />
          {props.langs === "ar" ? "Back" : "رجوع"}
        </Link>
        {props.langs === "en" ? (
          <h2>
            اختر من <span>الخدمات</span>
          </h2>
        ) : (
          <h2>
            choose from <span>Services</span>
          </h2>
        )}

        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 col-lg-4">
            <div className="servicediv ser">
              <div className={`service ${props.langs}`}>
                <div className={`ser-atim ${props.langs}`}>
                  <div className={`img ${props.langs}`}>
                    <img src={img1} width={"50px"} alt="..." />
                  </div>

                  {props.langs === "en" ? (
                    <h4>المشاورات الافتراضية</h4>
                  ) : (
                    <h4>Virtual Consultations</h4>
                  )}
                  <Link to={"/blogpage"}>
                    {props.langs === "en"
                      ? "استشارة كتاب"
                      : "Book consultation"}
                    <FontAwesomeIcon
                      icon={faRightLong}
                      className={`icon ${props.langs}`}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-4">
            <div className="servicediv ser">
              <div className={`service ${props.langs}`}>
                <div className={`ser-atim ${props.langs}`}>
                  <div className={`img ${props.langs}`}>
                    <img src={img2} width={"50px"} alt="..." />
                  </div>
                  {props.langs === "en" ? (
                    <h4>الرعاية المنزلية</h4>
                  ) : (
                    <h4>Home Care</h4>
                  )}
                  <Link to={"/homecar"}>
                    {props.langs === "en" ? "احجز خدمة" : "Book Service"}
                    <FontAwesomeIcon
                      icon={faRightLong}
                      className={`icon ${props.langs}`}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-4">
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
                    {props.langs === "en" ? "احجز زيارتك" : "Book Visit"}
                    <FontAwesomeIcon
                      icon={faRightLong}
                      className={`icon ${props.langs}`}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-4">
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
                    {props.langs === "en" ? "معلومات شخصية" : "Personal Information"}
                    <FontAwesomeIcon
                      icon={faRightLong}
                      className={`icon ${props.langs}`}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-4">
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
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-4">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Routes;
