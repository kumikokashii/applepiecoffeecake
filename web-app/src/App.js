import './App.css';

function App() {
  

  return (
    <div className="App">
      <div class="lines">
        <span class="fillin">Fill in the blank.</span>
        Line 1 line 1 line 1 line 1 line 1 <input class="line-input" placeholder="___" size={3} />.<br/>
        Line 2 line 2 line 2 line 2 line 2 <input class="line-input" placeholder="______" size={6} />.<br/>
        Line 3 line 3 line 3 line 3 line 3 <input class="line-input" placeholder="___" size={3} />.<br/>
      </div>
      <div class="action">
        <span class="button">copy my lines</span>
      </div>
      <div class="footer">
        &copy; 2021 Kumiko Kashii
      </div>
    </div>
  );
}

export default App;
