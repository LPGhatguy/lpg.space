import style from "./Footer.css";

import twitter from "../../resources/iconmonstr-twitter-1.svg";
import github from "../../resources/iconmonstr-github-1.svg";
import linkedin from "../../resources/iconmonstr-linkedin-3.svg";
import patreon from "../../resources/patreon.svg";
import mastodon from "../../resources/mastodon.svg";

const Item = ({ url, title, icon, children, rel }) => (
	<span className={ style.Item }>
		<a title={ title } href={ url } rel={ rel }><img className={ style.Icon } src={ icon } /></a>
	</span>
);

export default function Footer() {
	return (
		<footer className={ style.Footer }>
			<div className={ style.FooterInner }>
				<Item url="https://mastodon.gamedev.place/@lpg"
					icon={ mastodon }
					rel="me"
					title="@lpg on mastodon.gamedev.place" />

				<Item url="https://twitter.com/LPGhatguy"
					icon={ twitter }
					title="LPGhatguy on Twitter" />

				<Item url="https://github.com/LPGhatguy"
					icon={ github }
					title="LPGhatguy on GitHub" />

				<Item url="https://www.patreon.com/lpghatguy"
					icon={ patreon }
					title="LPGhatguy on Patreon" />

				<Item
					url="https://www.linkedin.com/in/lucien-greathouse-539bb73b"
					icon={ linkedin }
					title="Lucien Greathouse on LinkedIn" />
			</div>
		</footer>
	);
}