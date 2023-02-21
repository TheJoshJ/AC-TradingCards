import styles from "./card.module.css";
import { Fragment } from "react";

const Card = (props) => {
  const CardStyling = {
    color: props.data.textColor,
    backgroundColor: props.data.bubbleColor,
  };

  const textStyling = {
    fontFamily: "Roboto",
    fontSize: "16px",
    width: "100%",
  };

  const imageStyling = {
    width: `calc(100% - 4px)`,
    border: "solid",
    borderRadius: "15px",
    boxShadow: "5px 5px 20px 2px rgba(0,0,0,0.125)",
  };

  console.log(props.data.catchphrase[0].toUpperCase() + props.data.catchphrase.slice(1))

  return (
    <>
      <div style={CardStyling} className={styles.Card}>
        <div
          style={{
            fontFamily: "Fink",
            display: "flex",
            justifyContent: "space-between",
            padding: "0px 0.5rem",
          }}
        >
          <span>{props.data.name["name-USen"]}</span>
          <span>{"#" + props.data.id}</span>
        </div>
        <img
          style={imageStyling}
          src={props.data.imageUri}
          alt={"An image of " + props.data.name["name-USen"]}
        />
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            padding: "0px 0px 0px 10px",
            borderRadius: "15px",
            border: "1px solid" + props.data.textColor,
          }}
        >
          <div
            style={{ display: "flex", paddingBottom: "5px", paddingTop: "5px" }}
          >
            <span style={textStyling}>Birthday: </span>
            <span style={textStyling}>{props.data.birthdayString}</span>
          </div>
          <div
            style={{ display: "flex", paddingBottom: "5px", paddingTop: "5px" }}
          >
            <span style={textStyling}>Hobby:</span>
            <span style={textStyling}>{props.data.hobby}</span>
          </div>
          <div
            style={{ display: "flex", paddingBottom: "5px", paddingTop: "5px" }}
          >
            <span style={textStyling}>Catchphrase: </span>
            <span style={textStyling}>
              {'"' + props.data.catchphrase[0].toUpperCase() + props.data.catchphrase.slice(1) + '"'}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
