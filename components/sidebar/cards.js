import { Fragment } from "react";
import Head from "./head";
import Text from "../utility/text";
import Button from "../utility/button";

const Cards = ({cards})=>{
    return(
        <Fragment>
            <div className="card-box">
                <Head variant='account-head'> 
                    <Text variant='header'> Accounts and Cards </Text>
                    <img src="/images/more.png" alt="more" />
                </Head>
                <div className="cards">
                    {
                        cards.map(({card, cardName, cash}) => {
                            return(
                                <div key={cash} className="card">
                                    <div id="text">
                                        <img src={card} alt="card" />
                                        <div className="text">
                                            <Text variant='card-name'> {cardName} </Text>
                                            <Text variant='cash'> {cash} </Text>
                                        </div>
                                    </div>
                                    <Button variant='arrow'> <img src="/images/arrow.png" alt="arrow" /> </Button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <style jsx>{`
            .card{
                height: 40px;
                width: 268px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 20px;
            }
            #text{
                display: flex;
                align-items: center;
                width: 200px;
            }
            .text{
                margin-left: 30px;
            }
            `}</style>
        </Fragment>
    )

}

export default Cards