import React from "react";
import Accordion from 'react-bootstrap/Accordion'
import "./ViewWinners.css";


function ViewWinners(props) {
    let {duck} = props;
    return (
        <Accordion defaultActiveKey="0">
            <Accordion.Item>
                <Accordion.Header>
                    <span>Contestant: <b>{duck.contestant}</b><br/>
                        {duck.winningYear} Winner <br/>
                        {duck.voteCount} Votes <br/></span>
                </Accordion.Header>
                <Accordion.Body>
                    {duck.body}
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default ViewWinners;
