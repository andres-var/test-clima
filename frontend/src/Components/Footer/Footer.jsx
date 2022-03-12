import { Mail } from "react-feather";
import "./Footer.scss";

function Footer() {
	return (
		<footer id="Footer">
			<div className="address">
				<h3>Contactanos</h3>
				<hr />

				<div>
					<p>Avenida Del Clima,</p>
					<p>2000. Clima 8</p>
					<p> clima@clima.com</p>
					<p>+52 00 00 00 00</p>
				</div>
			</div>
			<div className="buttons">
				<button>
					{" "}
					<Mail />
					{" "}
					<span>CONTÁCTANOS</span>
					{" "}
				</button>
			</div>
			<div className="developers">
				<div>
					<small>Desarrollado por</small>
					<p>Andres Vargas</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
