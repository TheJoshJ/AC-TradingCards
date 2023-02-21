import styles from "./card.module.css";
import { Fragment } from "react";

const Card = (props) => {
  const CardStyling = {
    color: props.data.textColor,
    backgroundColor: props.data.bubbleColor,
  };

  const textStyling = {
    fontSize: "16px",
    padding: "0px 0px 0px 5px"
  };

  return (
    <>
      <div style={CardStyling} className={styles.Card}>
        <div style={{fontFamily: "Fink", display: "flex", justifyContent: "space-between", padding: "0px 0.5rem"}}>
        <span >{props.data.name["name-USen"]}</span>
        <span >{props.data.id}</span>
        </div>
        <img
        style={{width: "100%", borderRadius:"15px", boxShadow: "5px 5px 20px 2px rgba(0,0,0,0.125)"}}
          src={props.data.imageUri}
          alt={"An image of " + props.data.name["name-USen"]}
        />
        <div style={{backgroundColor: "rgba(0, 0, 0, 0.1)", border: "1px solid" + props.data.textColor}}>
        <p style={textStyling}>
          {"Birthday: " + props.data.birthdayString}
        </p>
        <p style={textStyling}>{"Hobby: " + props.data.hobby}</p>
        <p style={textStyling}>
          {"Catchphrase: \"" + props.data.catchphrase + "\""}
        </p>
        </div>
      </div>
    </>
  );
};
export default Card;
