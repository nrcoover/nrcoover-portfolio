import classes from "./Containerizer.module.css";

interface ContainerizerProps {
	children: React.ReactNode;
	maxWidth?: string;
	maxHeight?: string;
}

const Containerizer = ({ children }: ContainerizerProps) => {
	return <section className={classes.containerizer}>{children}</section>;
};

export default Containerizer;
