import classes from "./Separator.module.css";

interface SeparatorProps {
	width?: string;
	margin?: string;
}

const Separator = ({
	width = "auto",
	margin = "2rem 0 2rem 0",
}: SeparatorProps) => {
	const sizingStyles = {
		width,
		margin,
	};
	return <div style={sizingStyles} className={classes.separator}></div>;
};

export default Separator;
