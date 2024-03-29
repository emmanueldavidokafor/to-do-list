// // App.js
// import React, { useState } from 'react';
// import TaskList from './TaskList';
// import TaskForm from './TaskForm';
// import Header from './Header';
// import Footer from './Footer';

// const App = () => {
//   const [tasks, setTasks] = useState([]);

//   const addTask = (newTask) => {
//     setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
//   };

//   const deleteTask = (taskId) => {
//     const updatedTasks = tasks.filter(task => task.id !== taskId);
//     setTasks(updatedTasks);
//   };

//   const toggleTaskCompletion = (taskId) => {
//     const updatedTasks = tasks.map(task =>
//       task.id === taskId ? { ...task, completed: !task.completed } : task
//     );
//     setTasks(updatedTasks);
//   };

//   return (
//     <div>
//       <Header/>
//       <TaskForm addTask={addTask} />
//       <TaskList
//         tasks={tasks}
//         deleteTask={deleteTask}
//         toggleTaskCompletion={toggleTaskCompletion}
//       />
//       <Footer/>
//     </div>
//   );
// };

// export default App;


// App.js
import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import Header from './Header';
import Footer from './Footer';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Load tasks from local storage on component mount
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    // Save tasks to local storage whenever tasks change
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const toggleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div>
      <Header/>
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleTaskCompletion={toggleTaskCompletion}
      />
      <Footer/>
    </div>
  );
};

export default App;
