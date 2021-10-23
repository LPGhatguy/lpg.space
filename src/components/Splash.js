import style from "./Splash.css";

export default function Splash({ title }) {
	return (
		<div className={ style.Splash }>
			<div className={ style.Inner }>
				<h1 className={ style.Title }>
					{ title }
				</h1>
			</div>
		</div>
	);
}