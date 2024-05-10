import Board from './components/GameBoard';
import Header from './components/Header';

function App() {
	return (
		<>
			<main>
				<div className="app">
					<Header />
					<Board />
				</div>
			</main>
		</>
	);
}

export default App;
