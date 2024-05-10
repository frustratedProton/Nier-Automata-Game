import { useEffect, useRef, useState } from 'react';
import Card from './card';
import EndModel from './EndModel';
import data from './data/data';

const GameBoard = () => {
	const [winner, setWinner] = useState(false);
	const [score, setScore] = useState(0);
	const [bestScore, setBestScore] = useState(0);
	const [characters, setCharacters] = useState([]);
	const [clicked, setClicked] = useState(false);

	const endRef = useRef(null);


	useEffect(() => {
		if (characters.length === 16) {
			setWinner(true);
			setBestScore(score);
			endRef.current.show();
		}
	}, [characters, score]);

	function updateScore(id) {
		if (!characters.some((charId) => charId === id)) {
			setCharacters((prevChars) => [...prevChars, id]);
			setScore((prevScore) => prevScore + 1);
			return;
		}
		setClicked(true);
		setBestScore(score);
		endRef.current.show();
		setScore(0);
	}

	function resetGame() {
		setClicked(false);
		setWinner(false);
		setScore(0);
		setCharacters([]);
		endRef.current.close();
	}

	return (
		<>
			<dialog ref={endRef}>
				<EndModel
					message={winner ? 'You Win!' : 'Game Over'}
					bestScore={bestScore}
					onRetry={resetGame}
				/>
			</dialog>

			<main>
				<div className="score-container">
					<p className="score-text">{`Score ${score}`}</p>
					<p className="score-text">{`Best Score ${bestScore}`}</p>
				</div>

				<div className="cards">
					{data
						.map((value) => ({ value, sort: Math.random() }))
						.sort((a, b) => a.sort - b.sort)
						.map(({ value }) => value)
						.map((characters, index) => {
							return (
								<Card
									key={index}
									id={characters.id}
									name={characters.name}
									imgSrc={characters.src}
									updateScore={updateScore}
									clicked={clicked}
								/>
							);
						})}
				</div>
			</main>
		</>
	);
};

export default GameBoard;