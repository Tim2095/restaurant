import classes from "./MainSection.module.scss";

const MainSection = () => {
  return (
    <div className={classes["main-section"]}>
      <div className={`${classes["section-cnt"]} container`}>
        <h1 className={classes["main-logo"]}>Quibeez</h1>
        <h2 className={classes["secondary-logo"]}>RESTAURANT</h2>
        <div className={classes['delivery-title']}>
          <h3 className={classes.delivery}>Free Home Delivery</h3>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
