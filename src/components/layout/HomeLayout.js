import MainNavigation from "./MainNavigation";
import classes from "./HomeLayout.module.css";

function HomeLayout(props) {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default HomeLayout;
