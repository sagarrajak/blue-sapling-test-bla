import React from "react";
import { Button, Card, CardBody, CardFooter, CardImg, CardSubtitle, CardText, CardTitle } from "reactstrap";
import './FoodCardComponent.scss';


export function FoodCardComponent() {
  return (
    <Card className="foodCard">
      <CardImg
        top
        width="100%"
        src="/assets/318x180.svg"
        alt="Card image cap"
        className="foodCard__cardImage"
      />
      <CardBody className="foodCard__cardBody">
        <CardTitle className="foodCard__cardBody-cardTitle">Card title</CardTitle>
        <CardSubtitle className="foodCard__cardBody-cardSubtitle">Card subtitle</CardSubtitle>
        <CardText className="foodCard__cardBody-cardText">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </CardText>
      </CardBody>
      <CardFooter className="foodCard__cardFooter">
         <Button className="foodCard__cardFooter-callButton">Call</Button>
         <Button className="foodCard__cardFooter-deleteButton">Delete</Button>
      </CardFooter>
    </Card>
  );
}
