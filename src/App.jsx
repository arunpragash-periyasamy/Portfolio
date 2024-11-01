import Background from "./components/Background/Background";
import ContentBody from "./components/ContentBody/ContentBody";
import CursorFollower from "./components/Cursor/CursorFollower";
import Loader from "./components/Loader/Loader";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  return (
    <div>
      <Background/>
      <CursorFollower/>
      <div className="text-white flex flex-col xl:flex-row xl:justify-center xl:items-center min-h-screen" >
        <Sidebar className={'xl:mr-4'}/>
        <ProfileCard/>
        <ContentBody/>
      </div>
    </div>
  )
}


export default App;