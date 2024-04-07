import './App.css';

function App() {
  const subscribeToChannel = () => {
    // Redirect users to subscribe to the YouTube channel
    // window.open('https://youtube.com/@codewithmuh?sub_confirmation=1', '_blank');
    window.open('https://youtu.be/284cx2fiJm0', '_blank');

  }

  const checkLinkedInConnection = () => {
    // Logic to check if user is connected on LinkedIn
    // var connected = Math.random() < 0.00; // 5% chance of being connected
    // const connected = false && ''
    const connected = true || 'false' // answer is always true
    console.log(connected)
    var resultMessage = connected ? "Yes, you are connected with me on LinkedIn!" : "No, you are not connected with me on LinkedIn. Connect now: <a href='https://www.linkedin.com/in/muhammad-rashid-daha/' target='_blank'>Follow me on LinkedIn</a>";
    document.getElementById("result").innerHTML = resultMessage;
  }

  return (
    <div className="App">
      <h1>Hello World</h1>
      <button onClick={subscribeToChannel} > Subscribe to my Channel </button>
      <p id="result"></p>
      <button onClick={checkLinkedInConnection}>Check Connection</button>
    </div>
  );
}

export default App;
