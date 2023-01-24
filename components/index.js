import { Fragment, useState } from "react";
import Navigation from "./navigation/index.jsx";
import Content from "./content/index.jsx";
import Menu from './menu/index.jsx';
import SideBar from "./sidebar/index";

const Dashboard = ()=>{
    const [state, setState] = useState(false)
    const click = ()=>{
        setState((prevState) => !prevState) 
    }
    return(
        <Fragment>
            <div className="dashboard">
                <Navigation onClickHandler={click} open={state} />
                <div className='dashboard-content'>
                    <Menu menuopen={state} />
                    <Content menuopen={state} />
                    <SideBar menuopen={state} />
                </div>
            </div>
            <style jsx> {`
            .dashboard{
                height: 1175px;
                width: 100%;
                background: #F7F8FA;
            }
            .dashboard-content{
                display: flex;
            }

            @media only screen and (max-width: 1200px;){
                .dashboard{
                    width: 100%;
                    min-height: 100vh;
                    border: 1px solid red;
                }
                .dashboard-content{
                    width: 100%;
                }
            }
            `} </style>
        </Fragment>
    )
}

export default Dashboard