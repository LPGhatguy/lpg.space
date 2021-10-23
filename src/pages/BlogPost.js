import { Helmet } from "react-helmet";

import PageBody from "../components/PageBody";
import Article from "../components/Article";

export default function BlogPost({ children, title, slug, date }) {
	return (
		<PageBody>
			<Helmet>
				<title>{ title }</title>
			</Helmet>

			<Article title={ title } slug={ slug } date={ date }>
				{ children }
			</Article>
		</PageBody>
	);
}
