import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import { NewsCards, Navbar } from "./component";
import "./App.css";
import wordsToNumbers from "words-to-numbers";

const alanKey = "148379d69a141c8cb8f9a607861e768e2e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
	const [newsArticles, setNewsArticles] = useState([]);
	const [activeArticle, setActiveArticle] = useState(-1);

	useEffect(() => {
		alanBtn({
			key: alanKey,
			onCommand: ({ command, articles, number }) => {
				if (command === "newHeadlines") {
					setNewsArticles(articles);
				}
				else if (command === "highlight") {
					setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
				}
				else if (command === "open") {
					const parsedNumber = number.length > 2 ? wordsToNumbers(number, { fuzzy: true }) : null;
					const article = articles[parsedNumber - 1];
					if (parsedNumber > 20) {
						alanBtn().playText("Please try that again.");
					}
					else if (article) {
						window.open(article.url, "_blank");
						alanBtn().playText("openning...");
					}
				}
			},
		})
	}, [])

	return (
		<div>
			<Navbar />
			<NewsCards articles={newsArticles} activeArticle={activeArticle} />
		</div>
	)

}

export default App;