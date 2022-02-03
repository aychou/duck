import React, {useEffect, useState} from "react";
import "./PastWinner.css";
import ViewWinners from "../components/ViewWinners";
import DataJson from "../lib/Data.json";

function PastWinner() {
    let [Data, setDucks] = useState([]);

    useEffect(() => {
        setDucks(DataJson.data);
    }, []);
    return (
        <div className="pastwinner">
            <div className="left">
                <div className="subtext">
                    <h1><b>Past Winners</b></h1>
                    <h4>
                        The global Duck Fashion Show has been a staple in the duck fashion community for the past 50
                        years, since the ratification of the duck voting rights act in 1962. <br/><br/>

                        To remember all of our beautiful past winners and demonstrate the growth of our warm community,
                        we maintain a running list of their vote counts and inspiration behind each of their
                        outfits.<br/><br/>

                        Take a moment to appreciate every one of them.<br/>
                    </h4>
                </div>
            </div>
            <div className="right">
                <h1>Scores</h1>
                <div className="scroll">
                    {Data.map((duck) => {
                        return (
                            <ViewWinners
                                duck={duck}
                            />

                        );
                    })}
                </div>
            </div>

        </div>
    );
}

export default PastWinner;
