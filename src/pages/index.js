import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Business Matchmaking Has Never Been Easier
			</title>
			<meta name={"description"} content={"Manage all your events in a single app. Our online event management platform provides various services event planners and project managers may need."} />
			<meta property={"og:title"} content={"Business Matchmaking Has Never Been Easier"} />
			<meta property={"og:description"} content={"Manage all your events in a single app. Our online event management platform provides various services event planners and project managers may need."} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/OG-image.png?v=2021-09-22T11:33:13.239Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/favicon%2032x32.png?v=2021-09-22T11:33:41.498Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/152x152.png?v=2021-09-22T11:33:48.679Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/152x152.png?v=2021-09-22T11:33:48.679Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/152x152.png?v=2021-09-22T11:33:48.679Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/152x152.png?v=2021-09-22T11:33:48.679Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/270x270.png?v=2021-09-22T11:33:55.934Z"} />
		</Helmet>
		<Section padding="38px 0 38px 0" quarkly-title="Header">
			<Override slot="SectionContent" flex-direction="row" display="flex" />
			<Link
				text-decoration-line="initial"
				hover-opacity=".8"
				width="20%"
				md-width="40%"
				sm-width="50%"
				href="/"
				display="flex"
			>
				<Text font="normal 700 14px/1.5 --fontFamily-googleFiraSans" color="#1064C7" transform="rotate(-90deg)" margin="0px 0px 0px 0px">
					CC
				</Text>
				<Text margin="0px 0px 0px 0px" font="--lead" color="--dark">
					ClearCut
				</Text>
			</Link>
			<Components.QuarklycommunityKitMobileSidePanel md-justify-content="flex-end">
				<Override slot="Children" display="flex" />
				<Override slot="Content" padding="0px 0px 0px 0px" md-margin="38px 0px 0px 0px" />
				<Override
					slot="Button Text"
					md-font="--lead"
					md-text-transform="uppercase"
					sm-margin="3px 6.3px 0px 0px"
					md-margin="1px 6.3px 0px 0px"
				/>
				<Box
					justify-content="flex-end"
					md-align-items="center"
					md-flex-direction="column"
					md-justify-content="center"
					md-padding="20px 0px 20px 0px"
					md-margin="0px 0px 0px 0px"
					display="flex"
				/>
			</Components.QuarklycommunityKitMobileSidePanel>
		</Section>
		<Section background="--color-darkL1" padding="0px 0 0px 0" quarkly-title="HeroBlock" md-flex-wrap="wrap">
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" />
			<Box
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				width="50%"
				padding="80px 0px 40px 0px"
				md-padding="40px 0px 40px 0px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				display="flex"
				flex-direction="column"
				justify-content="space-between"
				lg-padding="80px 32px 40px 0px"
				md-width="100%"
			>
				<Box
					lg-width="100%"
					display="flex"
					flex-direction="column"
					width="70%"
					justify-content="space-between"
					flex="1 1 0%"
				>
					<Text font="--headline3" color="--light" sm-font="400 36px/1.2 &quot;Fira Sans&quot;, sans-serif" margin="0px 0px 0px 0px">
						ClearCut Event Consulting
					</Text>
					<Text margin="32px 0px 0px 0px" font="--lead" color="--light" md-padding="0px 0px 40px 0px">
						Contact Jonathan for details
					</Text>
				</Box>
			</Box>
			<Box
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				width="50%"
				md-width="100%"
			>
				<Image
					src="https://images.unsplash.com/photo-1555421689-3f034debb7a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
					max-width="100%"
					min-height="600px"
					object-fit="cover"
					lg-min-height="500px"
					sm-min-height="400px"
					srcSet="https://images.unsplash.com/photo-1555421689-3f034debb7a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1555421689-3f034debb7a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1555421689-3f034debb7a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1555421689-3f034debb7a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1555421689-3f034debb7a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1555421689-3f034debb7a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1555421689-3f034debb7a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3200&q=80 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
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
			<style place={"endOfHead"} rawKey={"6143a05129a0a1001e6c835a"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}\n\n* {\n    scroll-behavior: smooth;\n    }"}
			</style>
		</RawHtml>
	</Theme>;
});