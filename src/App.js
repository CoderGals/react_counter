import React, {useState} from 'react';
import './App.css';
function App() {
  const [state, setState] = useState({
    likes: 100,
    dislikes: 25,
    liked: false,
    disliked: false,
  });

  return (
    <div className="App">
      <div className="content">
        <button
          className={'like-button' + (state.liked ? ' liked' : '')}
          onClick={() =>
            setState({
              likes: (state.likes += 1),
              dislikes: (state.dislikes -= 1),
              liked: true,
              disliked: false,
            })
          }
        >
          Like |<span className="likes-counter">{state.likes}</span>
        </button>
        <button
          className={'dislike-button' + (state.disliked ? ' disliked' : '')}
          onClick={() =>
            setState({
              dislikes: (state.dislikes += 1),
              likes: (state.likes -= 1),
              disliked: true,
              liked: false,
            })
          }
        >
          Dislike |<span className="dislike-counter">{state.dislikes}</span>
        </button>
      </div>
    </div>
  );
}

export default App;
