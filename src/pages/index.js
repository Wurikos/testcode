import React from "react";
import theme from "theme";
import { Theme, Link, Text, Image, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Section } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section text-align="center" padding="100px 0" sm-padding="40px 0">
			<Text as="h1" font="--headline1" md-font="--headline2" margin="20px 0 0 0">
				About Us
			</Text>
			<Text as="p" font="--lead" margin="20px 0 0 0">
				Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake. I’m a great space for you to tell a story and let your site visitors know more about you. Talk about your business and what products and services you offer. Share how you came up with the idea for your company and what makes you different from your competitors. Make your business stand out and show your visitors who you are.{" "}
			</Text>
			<Box display="flex" margin="40px 0 20px 0" justify-content="space-around" sm-flex-direction="column">
				<Box padding="10px">
					<Image src="https://images.unsplash.com/photo-1501870190084-cdf29f15ef87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80" width="320px" max-width="100%" />
				</Box>
				<Box padding="10px">
					<Image src="https://images.unsplash.com/photo-1503341960582-b45751874cf0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" width="320px" max-width="100%" />
				</Box>
				<Box padding="10px">
					<Image src="https://images.unsplash.com/photo-1503342394128-c104d54dba01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80" width="320px" max-width="100%" />
				</Box>
			</Box>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<script place={"endOfBody"} rawKey={"600a71476f64452b48c4e7a4"}>
				{"<script>\nfunction ready() {\n    require(['jquery'], function($) {\nSmoothScroll({\n    // Время скролла 400 = 0.4 секунды\n    animationTime    : 800,\n    // Размер шага в пикселях \n    stepSize         : 75,\n\n    // Дополнительные настройки:\n    \n    // Ускорение \n    accelerationDelta : 30,  \n    // Максимальное ускорение\n    accelerationMax   : 2,   \n\n    // Поддержка клавиатуры\n    keyboardSupport   : true,  \n    // Шаг скролла стрелками на клавиатуре в пикселях\n    arrowScroll       : 50,\n\n    // Pulse (less tweakable)\n    // ratio of \"tail\" to \"acceleration\"\n    pulseAlgorithm   : true,\n    pulseScale       : 4,\n    pulseNormalize   : 1,\n\n    // Поддержка тачпада\n    touchpadSupport   : true,\n})\n    });\n} \ndocument.addEventListener(\"DOMContentLoaded\", ready);\n</script>\n\n"}
			</script>
			<script place={"endOfHead"} rawKey={"600a71b694429f726f95b62d"}>
				{"<script src=\"https://cdnjs.cloudflare.com/ajax/libs/smoothscroll/1.4.10/SmoothScroll.min.js\" integrity=\"sha256-huW7yWl7tNfP7lGk46XE+Sp0nCotjzYodhVKlwaNeco=\" crossorigin=\"anonymous\">\n"}
			</script>
		</RawHtml>
	</Theme>;
});