import { Fragement, memo, useState } from 'react'
export default function MyApp(){
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');

    return(
        <Fragement>
            <label>
                Name{': '}
                <input value={name} type="text" onChange={e => setName(e.target.value)} />
            </label>
            <label>
                Address{': '}
                <input value={address} type="text" onChange={e => setAddress(e.target.value)} />
            </label>
            <Greeting name={name} />
        </Fragement>
    )
}

const Greeting = memo(function Greeting({name}){
    console.log("Greeting was rendered at", new Date().toLocaleTimeString());
    return <h3>Hello {name && ', '}{name}!</h3>
})