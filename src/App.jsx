import Background from "./components/Background/Background";
import ContentBody from "./components/ContentBody/ContentBody";
import CursorFollower from "./components/Cursor/CursorFollower";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  return (
    <div>
      <Background/>
      <CursorFollower/>
      <div className="text-white flex justify-center items-center h-screen " id="main">
        <Sidebar/>
        <ProfileCard/>
        <ContentBody/>
      </div>
    </div>
  )
}


export default App;