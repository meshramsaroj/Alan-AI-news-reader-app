import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles({
  media: {
    height: 180,
  },
  border: {
    border: "solid",
  },

  fullHeightCard: {
    height: "100%",
  },

  card: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderBottom: "10px solid white",
    borderRadius: "10px",
    boxShadow: "0px 0px 5px 2px gray",
    marginTop: "5rem ",
  },

  activeCard: {
    boxShadow: "0px 0px 10px 2px",
    color: "#22289a",
    borderBottom: "10px solid #22289a",
  },

  grid: {
    display: "flex",
  },

  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: "5px 10px",
  },

  title: {
    padding: "0 16px",
  },
  cardActions: {
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
  },
});

export default styles;
