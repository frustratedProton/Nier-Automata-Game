import PropTypes from 'prop-types'

const Card = ({id, name, imgSrc, updateScore, clicked}) => {
	const handleClick = (e) => {
    updateScore(e.currentTarget.id)
  }

	return (
		<div className="card" onClick={clicked || handleClick} id={id}>
			<div className="img-container">
				<img src={imgSrc} alt="card" />
			</div>

			<p className="charName">{name}</p>
		</div>
	);
};

Card.propTypes = {
	id: PropTypes.number,
	name: PropTypes.string,
	imgSrc: PropTypes.string,
	updateScore: PropTypes.func,
	clicked: PropTypes.bool,
}

export default Card;