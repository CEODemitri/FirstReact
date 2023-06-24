import classes from './HomePage.module.css';

function HomePage(props) {
	return (
		<>
			<div className = {classes.container}>	
				<h1 className = {classes.king}>
					King {props.name}</h1>
				<h2>Prince {props.prince}</h2>
			</div>
		</>
	);
}

export default HomePage;