import { Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import MDXComponents from "./MDXComponents";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";
import allBlogPosts from "./allBlogPosts";

export default function App() {
	const blogRoutes = allBlogPosts.map(({ slug, title, date, Body }) => {
		return (
			<Route exact key={ slug } path={ `/post/${ slug }` }>
				<BlogPost title={ title } slug={ slug } date={ date }>
					<Body />
				</BlogPost>
			</Route>
		);
	});

	return (
		<MDXComponents>
			<ScrollToTop />
			<Helmet
				titleTemplate="%s | lpg.space"
				defaultTitle="lpg.space"
			>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
				<meta name="description" content="Website for Lucien Greathouse, also known as lpg." />
			</Helmet>

			<Header />

			<Switch>
				<Route exact path="/">
					<Home />
				</Route>

				{ blogRoutes }

				<Route path="*">
					<NotFound />
				</Route>
			</Switch>

			<Footer />
		</MDXComponents>
	);
}
