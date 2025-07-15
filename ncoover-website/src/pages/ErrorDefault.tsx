import Button from "../components/ui/Button";
import { PATHS } from "../constants/paths";

const ErrorDefault = () => {
	return (
		<>
			<main>
				<h1>Uh oh! Looks like an error occurred!</h1>
				<p>
					Despite searching the vastness of the universe, the page you requested
					has been lost to oblivion!
				</p>
				<Button path={PATHS.Home} text={"Return to the known universe"} />
			</main>
		</>
	);
};

export default ErrorDefault;
