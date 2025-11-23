import "./CardParent.css";

import rasm1 from "../../img/rasm1.png";
import rasm2 from "../../img/nike.png";
import rasm3 from "../../img/jordan.png";

import Card from "../Card/Card";

const CardParent = () => {
	return (
		<div className="card-parent">
			<Card rasm={rasm1} text={"NIKE AIR FORCE 1 "} color="#CBCBCB" />
			<Card rasm={rasm2} text={"NIKE AIR FORCE RED"} color="#5CA7FF" />
			<Card rasm={rasm3} text={"NIKE AIR JORDAN RED"} color="#D083FF" />
		</div>
	);
};

export default CardParent;
