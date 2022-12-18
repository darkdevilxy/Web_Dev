import "./App.scss";

import ProfileView from "./components/ProfileView/profile_view";
import Contents from "./components/contents/contents";

function App() {
  return (
    <div className="app_container">
      <div className="App">
        <ProfileView />
        <Contents />
      </div>
    </div>
  );
}

export default App;
