import "./App.css";
import PostMessageForm from "./components/PostMessageForm";
import PostMessages from "./components/PostMessages";

function App() {
  return (
    <div className="App">
      <PostMessageForm />
      <PostMessages />
    </div>
  );
}

export default App;
