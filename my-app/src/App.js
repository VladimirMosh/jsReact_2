import logo from './logo.svg';
import './App.css';
import CommentsList from "./CommentsList";
function App() {
  return (
    <div className="App">
      <h1>Список комментариев с удалением</h1>

      <CommentsList />

    </div>
  );
}

export default App;
