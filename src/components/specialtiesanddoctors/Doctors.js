import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./specialtiesanddoctors.css";
import Modeldoc from "../doctor/Modeldoc";

function Doctors(prpos) {
  let [show, setshow] = useState("");
  function notshow() {
    if (show) {
      setshow("");
    } else {
    }
  }
  let [doctor, setdoctor] = useState([]);
  let [selecTedDoctor, setselecTedDoctor] = useState(0);
  let [address, setAddress] = useState(" ");
  let [name,setname] =useState("");
  let [img , setimg] = useState("");
  let [rating,setrating] =useState(0);
  let [ratingcount,setratingcount] =useState(0);
  // console.log(doctor);
  useEffect(() => {
    fetch("https://almutamayizun.videosep.com/api/doctors-rating")
      .then((res) => res.json())
      .then((data) => setdoctor(data.data));
  }, []);

  let navigate = useNavigate();
  let goback = () => {
    navigate(-1);
  };
  return (
    <div className="container p-1">
      <div className="doctors">
        <div className="contact">
          {prpos.langs === "en" ? "الأطباء" : "Doctors"}
          <Link onClick={goback}>
            {prpos.langs === "en" ? "عرض المزيد" : "Learn More"}
          </Link>
        </div>
        <div className="doctor-itmes">
          <div className="row w-100">
            {doctor.length > 0 ? (
              doctor.map((doc) => (
                <div
                  className="col-6 col-sm-4 col-md-3 col-lg-2 doctor"
                  key={doc.slug}
                >
                  <div className="doctor-itme">
                    <div className="img">
                      <img src={doc.cover} alt="..." />
                    </div>
                    <h6>{doc.name_ar}</h6>
                    <h6>{doc.name}</h6>
                    <p className="pra">{doc.Servicse}</p>
                    <Link
                      onClick={() => {
                        setselecTedDoctor(doc.id);
                        setshow("show");
                        setimg(doc.cover);
                        setname(doc.name);
                        setrating(doc.average_rating);
                        setratingcount(doc.ratings_count);
                        setAddress(doc.address);
                      }}
                      className="review"
                    >
                      <p className="review1">
                        <FontAwesomeIcon icon={faStar} className="icon" />{" "}
                        {doc.average_rating > 0 ? doc.average_rating : 0}
                      </p>
                      <p className="review2">
                        ({doc.ratings_count}{" "}
                        {prpos.langs === "ar" ? "Reviews" : "التقييمات"})
                      </p>
                    </Link>
                    <Link to={`/doctor/${doc.id}`} className="servicse">
                    {prpos.langs === "ar" ? "Services" : "الخدمات"}
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12">
                <p>{prpos.langs === "ar" ? "No Doctor" : "لا يوجد دكتور"}</p>
              </div>
            )}
          </div>
        </div>
        <Modeldoc
          id={selecTedDoctor}
          show={show}
          setShow={setshow}
          langs={prpos.langs}
          address={address}
          img={img}
          name={name}
          rating={rating}
          ratingcount={ratingcount}
        />
      </div>
    </div>
  );
}

export default Doctors;
