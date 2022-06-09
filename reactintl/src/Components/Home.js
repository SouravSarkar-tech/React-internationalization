import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom'
import './Home.css'

const Home = () => {
	const { t } = useTranslation(["Home"]);
     const navigate = useNavigate()

     const handleSubmit = (e) =>{
         e.preventDefault();
         navigate('/more')
     }

	return (
        <>
		<div className="container topp mt-5">
			<h1 className="text-center">{t("home")}</h1>
		</div>
        <div className="section-1">
           <div className="container text-center">
        <div className="row">
          <div className="col-md-6 col-12">
            <div className="pray">
              <img src="../images/Web-Design-Transparent-Images-PNG.png" alt="Pray" className="" />
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="panel text-left">
              <h1>{t("headerone")}</h1>
              <p className="pt-4">
               {t("paraone")}
              </p>
            </div>
          </div>
        </div>
      </div>
        </div>

    <div classNameName="section-2 container-fluid p-0">
        <div className="purchase text-center">
        <h1>{t("headertwo")}</h1>
        <p>
         {t("paratwo")}
        </p>
        <div className="cards">
          <div className="d-flex flex-row justify-content-center flex-wrap">
            <div className="card">
              <div className="card-body">
                <div className="title">
                  <h5 className="card-title">{t("headerthree")}</h5>
                </div>
                <p className="card-text">
                 {t("paratwo")}
                </p>
                <div className="pricing">
                  <h1>{t("currencyone")}</h1>
                  <a href="" onClick={handleSubmit}  className="btn btn-dark px-5 py-2 primary-btn mb-5">{t("buttonone")}</a>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="title">
                  <h5 className="card-title">{t("headerthree")}</h5>
                </div>
                <p className="card-text">
                 {t("paratwo")}
                </p>
                <div className="pricing">
                  <h1>{t("currencyone")}</h1>
                  <a href="" onClick={handleSubmit} className="btn btn-dark px-5 py-2 primary-btn mb-5">{t("buttonone")}</a>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="title">
                  <h5 className="card-title">{t("headerthree")}</h5>
                </div>
                <p className="card-text">
                 {t("paratwo")}
                </p>
                <div className="pricing">
                  <h1>{t("currencyone")}</h1>
                  <a href="" onClick={handleSubmit} className="btn btn-dark px-5 py-2 primary-btn mb-5">{t("buttonone")}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
        </>
	);
};

export default Home;