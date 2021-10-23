import { Link } from "react-router-dom";

import style from "./Article.css";
import dateToString from "../dateToString";

export default function Article({ children, slug, title, date }) {
	return (
		<article className={ style.Article }>
			<h1 className={ style.Title }>{ title }</h1>
			<div className={ style.Date }>{ dateToString(date) }</div>

			{ children }

			<div className={ style.Fade } />
		</article>
	);
}
