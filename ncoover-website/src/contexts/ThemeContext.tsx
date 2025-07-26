import { createContext } from "react";

type ThemeMap = {
	[key: string]: Record<string, string>;
};

const themes: ThemeMap = {};

const ThemeContext = createContext({});
