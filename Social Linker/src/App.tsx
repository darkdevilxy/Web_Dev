import "./App.scss";

import ProfileView from "./components/ProfileView/profile_view";
import Taber from "./components/taber/taber";
import Contents from "./components/contents/contents";

function App() {
  return <div className="App">
    <ProfileView />
    <Taber />
    <Contents />
  </div>;
}

export default App;
