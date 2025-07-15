import { Link } from "react-router-dom";

interface ButtonProps {
	path: string;
	text: string;
}

const Button = ({ path, text }: ButtonProps) => {
	return (
		<>
			<Link to={path}>{text}</Link>
		</>
	);
};

export default Button;
