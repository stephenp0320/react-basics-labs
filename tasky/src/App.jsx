import './App.css';
import Task from './components/Task';

function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>
      
      <Task
        title="Dishes"
        due="Today"
        description="Make sure you dry them"
      />

      <Task
        title="Laundry"
        due="Tomorrow"
        description="Fold the laundry"
      />

      <Task
        title="Groceries"
        due="Friday"
        description="Milk and eggs"
      />

    </div>
  );
}

export default App;
