import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import useStyles from "./style.js"
import alanGif from "../../assets/alan-ai-1.gif";
// import alanLogo from "../../assets/alan-logo.png";



const Navbar = () => {
	const classes = useStyles();
	return (
		<AppBar className={classes.root} position="fixed">
			<Toolbar>
				{/* <img src={alanLogo} alt="logo" className={classes.image} /> */}
				<Typography variant="h6" className={classes.title}>
					Alan AI News Reader App
        </Typography>
				<img src={alanGif} alt="gif" className={classes.image} />
			</Toolbar>
		</AppBar>
	)
}

export default Navbar;