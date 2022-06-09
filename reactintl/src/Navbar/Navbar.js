import { useEffect } from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const Navbar = () => {
	const { i18n, t } = useTranslation(["All"]);

	useEffect(() => {
		if (localStorage.getItem("i18nextLng")?.length > 2) {
			i18next.changeLanguage("en");
		}
	}, []);

	const handleLanguageChange = (e) => {
		i18n.changeLanguage(e.target.value);
	};

	return (
		<nav className="navbar  navbar-expand-lg navbar-dark ">
			<Link className="navbar-brand" to="/">
				{t("logo")}
			</Link>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav ml-auto">
                    <li>
                         <Link className="nav-link one" to="/">
							{t("home")}
						</Link>
                    </li>
                   <li className="nav-item  ml-2">
						<Link className="nav-link one" to="/more">
							{t("more")}
						</Link>
					</li>
					<li className="nav-item">
						<select
							className="nav-link bg-dark border-0 ml-1 mr-2"
							value={localStorage.getItem("i18nextLng")}
							onChange={handleLanguageChange}>
							<option value="en">English</option>
							<option value="pt">Portuguese</option>
                            <option value="fr">French</option>
						</select>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;