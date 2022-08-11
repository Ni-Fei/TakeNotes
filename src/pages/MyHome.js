import Card from "../components/ui/Card";
import image from "../images/Take_notes.png";
import classes from "../components/layout/HomeLayout.module.css";

function MyHome() {
  return (
    <Card>
      <center>
        <img src={image} alt="taking notes here" />
      </center>
      <div className={classes.div}>
        <h3 className={classes.h3}>
          You can now keep all your notes organized easily with no hassle!
        </h3>
      </div>
    </Card>
  );
}

export default MyHome;
