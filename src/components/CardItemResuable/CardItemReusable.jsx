import React from "react";
import { Link } from "react-router-dom";

function CardItemReusable(props) {
  return (
    <>
      <li className="reCardsItem">
        <Link className="reCardsItemLink" to={props.path}>
          <figure className="reCardsItemPicWrap" data-category={props.label}>
            <img
              src={props.src}
              alt="TheImage"
              className="reCardsItemImg"
              id={props.id}
            />
          </figure>
          <div className="reCardsItemInfo">
            <h5 className="reCardsItemText">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItemReusable;
