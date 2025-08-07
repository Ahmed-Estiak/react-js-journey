import './App.css';
import Header from './header';
import TaskCounter from './all_components/taskcounter';

function App() {
  return (
    <div className="App">
      <TaskCounter />
      <Header title="My Boy"/>
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
