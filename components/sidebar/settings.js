import { Fragment } from "react";
import Button from "../utility/button";
import Text from "../utility/text";
import Head from './head'

const Settings = ({settings})=>{
    return(
        <Fragment>
            <div id="settings">
                <Head variant='settings-head'>
                    <Text variant='heading'>Settings</Text>
                    <img src="/images/more.png" alt="more" />
                </Head>
                <div className="settings-content">
                    {
                        settings.map(({url, name, id}) => {
                            return(
                                <div key={id} className='setting'>
                                    <Button variant='setting-icon'>
                                        <img src={url} alt="settings" />
                                    </Button>
                                    <Text variant='settings-name'>{name}</Text>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <style jsx>{`
            #settings{
                height: 275px;
                width: 256px;
                margin-top: 42px;
                margin-bottom: 25px;
            }
            .setting{
                height: 40px;
                display: flex;
                align-items: center;
                margin-bottom: 20px;
            }
            `}</style>
        </Fragment>
    )
}

export default Settings