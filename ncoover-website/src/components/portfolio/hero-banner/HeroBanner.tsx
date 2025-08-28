import classes from "./HeroBanner.module.css";

const HeroBanner = () => {
	return (
		<section aria-label="Featured project" className={classes.hero}>
			<div className={`${classes.heroItem} ${classes.textWrapper}`}>
				<h1>DEVFLIX</h1>
				<h2>Example Feature</h2>
				<p>This is a featured item</p>
			</div>
			<div className={`${classes.heroItem} ${classes.heroImage}`}>
				{/* TODO: Create dynamic image array that cycles through */}
				<img
					src="/placeholder-images/pexels-designecologist-1779487.jpg"
					alt="test because it no work" //TODO: Remove this alt or update properly
				/>
			</div>
			<div className={classes.heroItem}>Placeholder</div>
		</section>
	);
};

export default HeroBanner;
