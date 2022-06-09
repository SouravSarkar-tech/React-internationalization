import { useTranslation } from "react-i18next";
import './More.css'

const More = () => {
	const { t } = useTranslation(["All", "More"]);

	return (
	<>
	<div className="section-3 container p-0 text-center">
       <div className="row">
        <div className="col-md-12 col-sm-12">
          <h1>{t("More:topone")} </h1>
          <p>
            {t("More:toptwo")}
          </p>
        </div>
      </div>
      <div className="platform row">
        <div className="col-md-6 col-sm-12 text-right">
          <div className="desktop shadow-lg">
            <div className="d-flex flex-row justify-content-center">
              <i className="fas fa-laptop fa-3x py-2 pr-3"></i>
              <div className="text text-left">
                <h3 className="pt-1 m-0">{t("More:topthree")}</h3>
                <p className="p-0 m-0">{t("More:topfour")}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 text-left">
          <div className="desktop shadow-lg">
            <div className="d-flex flex-row justify-content-center">
              <i className="fas fa-mobile-alt fa-3x py-2 pr-3"></i>
              <div className="text text-left">
                <h3 className="pt-1 m-0">{t("More:topfive")}</h3>
                <p className="p-0 m-0">{t("More:topsix")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
	</div>
   <div className="header">
      <div className="container text-center">
      <div className="row">
        <div className="col-md-7 col-sm-12  text-white">
          <h6>{t("More:bottomone")}</h6>
          <h1>{t("More:bottomtwo")}</h1>
          <p>
            {t("More:bottomthree")}.
          </p>
          <button className="btn btn-light px-5 py-2 primary-btn">
            {t("More:bottomfour")}
          </button>
        </div>
        <div className="col-md-5 col-sm-12  h-25">
          <img src="../images/christopher-gower-m_HRfLhgABo-unsplash.jpg" alt="any" />
        </div>
      </div>
    </div>
   </div>
	<div className="container formbar mt-5 col-9 col-md-6">
			<h1 className="text-center">{t("All:form")}</h1>

			<div className="form-group">
				<label htmlFor="">{t("More:name")}:</label>
				<input
					type="text"
					className="form-control"
				/>
			</div>
			<div className="form-group">
				<label htmlFor="">{t("More:age")}:</label>
				<input
					type="number"
					className="form-control"
				/>
			</div>
			<div className="form-group">
				<label htmlFor="">{t("More:email")}:</label>
				<input
					type="text"
					className="form-control"
				/>
			</div>
			<br />
			<div className="text-center">
				<button className="btn btn-dark">{t("All:submit")}</button>
			</div>
		</div>
</>
	);
};

export default More;