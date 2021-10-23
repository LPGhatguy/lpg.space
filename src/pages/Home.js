import React from "react";
import { Link } from "react-router-dom";

import PageBody from "../components/PageBody";
import Article from "../components/Article";
import Splash from "../components/Splash";
import allBlogPosts from "../allBlogPosts";
import dateToString from "../dateToString";

import style from "./Home.css";
import Content from "./AboutContent.mdx";

function ArticleLink({ slug, title, date }) {
	return (
		<li className={ style.ArticleLink }>
			<Link to={`/post/${slug}`}>
				<div className={ style.ArticleTitle }>{ title }</div>
				<div className={ style.ArticleDate }>{ dateToString(date) }</div>
			</Link>
		</li>
	);
}

export default function Home() {
	const postList = allBlogPosts
		.filter(({ hidden }) => !hidden)
		.map(({ slug, title, date }) => (
			<ArticleLink key={slug} slug={slug} title={title} date={date} />
		));

	return (
		<React.Fragment>
			<Splash title="Hello, I'm Lucien! " />
			<PageBody>
				<Content />
			</PageBody>

			<Splash title="Latest Blog Posts" />
			<PageBody>
				{ postList }
			</PageBody>
		</React.Fragment>
	);
}
