import React from "react";
import {Button, Card} from "react-bootstrap";
import "./VotingCard.css";
import down from "../images/down.png";
import up from "../images/up.png";

function VotingCard(props) {
    let {duck, incrementVoteCount, decrementVoteCount} = props;

    return (
        <Card>
            <Card.Img variant="top" src={require(`../images/${duck.img}`)}/>
            <Card.Body>
                <div className="text">
                    <h4>{duck.contestant}</h4>
                    <h6>Score: {duck.voteCount}</h6>
                </div>
                <Button variant="success" onClick={() => incrementVoteCount(duck.contestant)}>
                    <img src={up}/>
                </Button>
                <Button variant="success" onClick={() => decrementVoteCount(duck.contestant)}>
                    <img src={down}/>
                </Button>
            </Card.Body>
        </Card>
    );
}

export default VotingCard;