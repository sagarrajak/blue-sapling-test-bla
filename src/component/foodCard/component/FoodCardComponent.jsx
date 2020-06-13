import React from "react";
import { useDispatch } from "react-redux";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardImg,
  CardSubtitle,
  CardTitle,
} from "reactstrap";
import { deleteSingleCardAction } from "../../navbar/actions/restorentSearchAction";
import "./FoodCardComponent.scss";

export function FoodCardComponent({ restaurant }) {
  const dispatch = useDispatch();

  return (
    <Card className="foodCard">
      <CardImg
        top
        src={
          restaurant.thumb ||
          "https://via.placeholder.com/500x500.png?text=Placeholder"
        }
        alt="Card image cap"
        className="foodCard__cardImage"
        style={{
          borderRadius: "8px",
          maxWidth: "200px",
          height: "150px",
          objectFit: "contain",
        }}
      />

      <CardBody className="foodCard__cardBody">
        <CardTitle className="foodCard__cardBody-cardTitle">
          {restaurant.name}
        </CardTitle>
        <Button
          onClick={() => {
            dispatch(deleteSingleCardAction(restaurant.id));
          }}
        >
          <i className="fa fa-trash"></i>
        </Button>
        <div>
          Images in given
          <a href={restaurant.url}> Url</a>
        </div>
        <CardSubtitle className="foodCard__cardBody-cardSubtitle">
          {restaurant.highlights.join(" ")}
        </CardSubtitle>
      </CardBody>
      <CardFooter className="foodCard__cardFooter">
        <Button className="foodCard__cardFooter-callButton">Call</Button>
        <Button className="foodCard__cardFooter-deleteButton">Delete</Button>
      </CardFooter>
    </Card>
  );
}
