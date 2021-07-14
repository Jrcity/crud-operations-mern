import { BrowserRouter as Router } from "react-router-dom";
import Posts from "./components/Posts";
import Routes from "./routes";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Posts />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
