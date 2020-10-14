import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "4rem",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textTransform: "uppercase",
    // textAlign: "center",
    fontWeight: 700,
    fontSize: "1rem",
  },
  image: {
    width: "60px",
  },
}));

export default styles;
