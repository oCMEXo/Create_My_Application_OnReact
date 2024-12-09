import './App.css'
import Avatar from "./components/Avatar/Avatar.jsx";


const ChildComopnent = () => {
    return <h1>
        Child
    </h1>
}

function App() {

    return (
        <>
            <div>
                Hello World!
            </div>
            <Avatar avatarName='Artsiom'/>
        </>
    )
}

export default App
