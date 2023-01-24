import { Fragment, useState } from "react";
import Avatar from "./avatar";
import Head from "./head";
import Text from '../utility/text'
import DropDown from "./dropdown";

const User = ()=>{
    // const [state, setstate] = useState({progress: 75, show: false})
    // const showDetails = ()=>{
    //     setstate({progress: state.progress, show: !state.show});
    //     if(state.progress === 100) setstate({progress: state.progress, show: !state.show})
    //     console.log(state.progress);
    // }

    return(
        <Fragment>
            <div className="user">
                <Head variant='user-head'> 
                    <img src='/images/user.png' alt="user" />
                    <img src='/images/more.png' alt='more' />
                </Head>
                <Avatar 
                    image='/images/userAvatar.png'
                    button='/images/progress.png'
                    // handleClick={showDetails}
                    // setstate={state.show}
                    // progress={state.progress}
                />
                <Text variant='username' > Clayton Santos </Text>
            </div>
            <style jsx>{`
            .user{
                height: 245px;
                width: 256px;
                margin-bottom: 35px;
            }
            `}</style>
        </Fragment>
    )
}

export default User