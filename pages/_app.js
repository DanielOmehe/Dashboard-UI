import '../public/styles/app.css'

const App = ({Component, pageProp})=>{
    return <Component {...pageProp} />
}

export default App