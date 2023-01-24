import { Fragment } from "react";
import Text from "../utility/text";

const Company = ({companies})=>{
    return(
        <Fragment>
            {
                companies.map(({url, company, income}) => {
                    return(
                        <div key={company} className="company-container">
                            <div className="company">
                                <div className="company-heading">
                                    <img src={url} alt="company-logo" />
                                    <Text variant='company-name'> {company} </Text>
                                </div>
                                <div className="pricing">
                                    <Text variant='income'> {income} </Text>
                                    <Text variant='cost'> -$320 </Text>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            <style jsx>{`
                .company-container{
                    width: 100%;
                    height: 16.5%;
                    border-bottom: 1px solid rgba(0,0,0,.32);
                    padding: 16px 25px;
                }
                .company{
                    height: 60px;
                    width: 391px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
                .company-heading{
                    display: flex;
                    align-items: center;
                    width: 220px;
                }
                .pricing{
                    display: flex;
                    align-items: center;
                    width: 120px;
                    justify-content: space-between;
                }
            `}</style>
        </Fragment>
    )
}

export default Company