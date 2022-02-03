import React, {useEffect, useState} from "react";
import {Container} from "react-bootstrap";
import VotingCard from "../components/VotingCard.jsx";
import ducksJson from "../lib/ducks.json";
import "bootstrap/dist/css/bootstrap.css";

function Voting() {
    let [ducks, setDucks] = useState([]);

    useEffect(() => {
        setDucks(ducksJson.data);
    }, []);

    function incrementVoteCount(duckName) {
        ducks = ducks.map((duck) => {
            if (duck.contestant === duckName) {
                duck.voteCount += 1;
            }
            return duck;
        });
        setDucks(ducks);
    }

    function decrementVoteCount(duckName) {
        ducks = ducks.map((duck) => {
            if (duck.contestant === duckName) {
                duck.voteCount -= 1;
            }
            return duck;
        });
        setDucks(ducks);
    }

    return (
        <Container className="voting">

            {ducks.map((duck) => {
                return (

                    <VotingCard
                        duck={duck}
                        incrementVoteCount={(duckName) => incrementVoteCount(duckName)}
                        decrementVoteCount={(duckName) => decrementVoteCount(duckName)}
                    />

                );
            })}

        </Container>
    );
}

export default Voting;
