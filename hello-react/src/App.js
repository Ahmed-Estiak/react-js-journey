import './App.css';
import Header from './header';
import TaskCounter from './all_components/taskcounter';
import Quote from './all_components/quote';

function App() {
  return (
    <div className="App">
      <Header title="My Boy"/>

      <div style={{ padding: "20px" }}>
        <h1>Tasks</h1>
        <TaskCounter />
      </div>

      <div style={{ padding: "20px" }}>
        <h1>Quotes of the Day</h1>

        <Quote
          quote="The best way to get started is to quit talking and begin doing."
          author="Walt Disney"
        />

        <Quote
          quote="Success is not the key to happiness. Happiness is the key to success."
          author="Albert Schweitzer"
        />

        <Quote
          quote="Don't let yesterday take up too much of today."
          author="Will Rogers"
        />
      </div>

      <p style={{ fontSize: '20px', color: 'darkblue' }}>
        This is a simple React application demonstrating a custom header.
      </p>
      <p style={{ fontSize: '16px', color: 'gray' }}>
        You can modify the styles and content as needed.
      </p>
      <p style={{ fontSize: '14px', color: 'black' }}>
        Enjoy coding with React!
      </p>
      <footer style={{ marginTop: '20px', color: 'darkgray' }}>
        <p>© 2023 Your Name</p>
      </footer>
      <p style={{ fontSize: '12px', color: 'lightgray' }}>
        This is a footer section with some additional information.
      </p>
      <p style={{ fontSize: '14px', color: 'black' }}>
        Feel free to explore and customize this application further.
      </p>
    </div>
  );
}

export default App;
