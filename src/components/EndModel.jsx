import PropTypes from 'prop-types'
import yorha from '../assets/yorha-01.png';

const EndModel = ({ message, bestScore, onRetry }) => {
	const handleRetry = () => onRetry();

	return (
		<div className="msg">
			<div className="msg-container">
				<p className="msg--primary">{message}</p>
				<p className="msg--secondary">{`Best Score: ${bestScore}`}</p>
				<button className="btn" onClick={handleRetry}>
					Start Again?
				</button>
			</div>
			<div className="img">
				<img src={yorha} alt="yorha-logo" />
			</div>
		</div>
	);
};

EndModel.propTypes = {
	message: PropTypes.string,
	bestScore: PropTypes.number,
	onRetry: PropTypes.func
}

export default EndModel;