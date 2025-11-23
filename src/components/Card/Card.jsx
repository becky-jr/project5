import "./Card.css";

const Card = (props) => {
	return (
		<>
			<div className="card" style={{ backgroundColor: props.color }}>
				<div className="card-img">
					<img src={props.rasm} alt="" />
				</div>
				<div className="card-name">NIKE AIR FORCE 1 ‘07 (white/black)</div>

				<div className="card-price">$89.99</div>

				<div className="card-text">
					I lost left shoe, don’t need this one anymore. Please buy it.
				</div>

				<div className="card-btn">
					<button>Add to cart</button>
				</div>
			</div>
		</>
	);
};

export default Card;
