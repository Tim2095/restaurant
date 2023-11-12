import classes from "./Menu.module.scss";
import alfaham from "../assets/img/menu-img/ALFAHAM.svg";
import chicken from "../assets/img/menu-img/CHICKEN BIRIYANI.svg";
import beef from "../assets/img/menu-img/BEEF POLLICHATHU.svg";
import kuzhi from "../assets/img/menu-img/KUZHI MANDHI.svg";
import shawarma from "../assets/img/menu-img/SHAWARMA.svg";
import fish from "../assets/img/menu-img/FISH POLLICHATHU.svg";

const Menu = () => {
  const menu = [
    {
      id: "1",
      title: "ALFAHAM",
      img: alfaham,
      price: 54,
    },
    {
      id: "2",
      title: "CHICKEN BIRIYANI",
      img: chicken,
      price: 27,
    },
    {
      id: "3",
      title: "BEEF POLLICHATHU",
      img: beef,
      price: 44,
    },
    {
      id: "4",
      title: "KUZHI MANDHI",
      img: kuzhi,
      price: 40,
    },
    {
      id: "5",
      title: "SHAWARMA",
      img: shawarma,
      price: 19,
    },
    {
      id: "6",
      title: "FISH POLLICHATHU",
      img: fish,
      price: 32,
    },
  ];

  return (
    <div id="menu" className={classes["menu-cnt"]}>
      <div>
        <div className={classes["menu-heading"]}>
          <h3>Our Menu</h3>
        </div>
        {/* className={classes["dish-menu-cnt"]} */}
        <div className={`${classes['dish-menu-cnt']} container-secondary`}>
          {menu.map((dish) => (
            <div className={classes['dish-item']} key={dish.id}>
              <div className={classes['dish-img-cnt']}>
                <img src={dish.img} className={classes.pen} loading="lazy" />
              </div>
              <div className={classes['dish-details-cnt']}>
                <p className={classes["product-title"]}>{dish.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
