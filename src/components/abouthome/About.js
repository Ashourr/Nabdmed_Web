import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./about.css";
// import img from "../../imges/about.png"
function About(props) {
  return (
    <div className="container-lg">
      <div className={`about ${props.langs}`}>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="img"></div>
          </div>
          <div className="col-12 col-md-6">
            <div className={`contant ${props.langs}`}>
              <div className={`first-div ${props.langs}`}>
                <FontAwesomeIcon icon={faStar} className="icon" />
                <p className={`${props.langs}`}>
                  {props.langs === "ar"
                    ? "Rated #1 for appointments with many professional doctors"
                    : "مُصنف كخيار رقم 1 للمواعيد مع العديد من الأطباء المحترفين"}
                </p>
              </div>
              <h6>
                {props.langs === "ar"
                  ? "We're revolutionizing healthcare with seamless access to trustedprofessionals, prioritizing your journey to better health."
                  : "نحن نحدث ثورة في الرعاية الصحية من خلال الوصول السلس إلى المتخصصين الموثوق بهم، مُراعين رحلتك نحو صحة أفضل"}
              </h6>
              <div className="num">
                <div className="num1">
                  <h5>40+</h5>
                  <p>
                    {props.langs === "ar"
                      ? "Dedicated Doctors"
                      : "طبيب مخصص"}
                  </p>
                </div>
                <div className="num2">
                  <h5>10k+</h5>
                  <p>
                    {props.langs === "ar"
                      ? "Hours of patient Consultation"
                      : "ساعات من استشارات المرضى"}{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
