import './App.css';
import Sidebar from "./Components/Sidebar/Sidebar"
import ProfileCard from './Components/Profile/ProfileCard';
const App = () =>{
    return (
        <div className="app">
            <Sidebar />
            <ProfileCard />
        </div>
    )
}

export default App;