import styles from "./Display.module.css";
import { Fragment } from "react";
import Card from "../Card/card";
import cards from "../cardData.json";

const Display = () => {
  return (
    <div className={styles.card__display}>
      {cards.map((key, _value) => (
        <Fragment key={key.id}>
          <Card data={key}/>
        </Fragment>
      ))}
    </div>
  );
};

export default Display;
