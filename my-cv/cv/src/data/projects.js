export const projects = [
  {
    id: 1,
    title: "Todo App with React",
    shortDesc: "Add/edit/delete tasks with localStorage",
    fullDesc: "A complete todo application built with React hooks. Features include adding new tasks, marking as complete, editing existing tasks, and deleting tasks. All data persists in localStorage so your tasks remain even after page refresh.",
    tech: ["React", "JavaScript", "CSS", "localStorage"],
    status: "completed",
    demoUrl: "https://my-todo-demo.com",
    githubUrl: "https://github.com/user/todo-app"
  },
  {
    id: 2,
    title: "Random User Card",
    shortDesc: "Fetch API + smooth UI transitions",
    fullDesc: "A user profile card generator that fetches random user data from an API. Features smooth animations, responsive design, and error handling. Users can generate new profiles with a button click.",
    tech: ["React", "Fetch API", "CSS Animations", "Responsive Design"],
    status: "completed",
    demoUrl: "https://my-user-card.com",
    githubUrl: "https://github.com/user/user-card"
  },
  {
    id: 3,
    title: "Text Analyzer Tool",
    shortDesc: "Count characters, words, sentences",
    fullDesc: "A text analysis tool that provides detailed statistics about any input text. Features include character count, word count, sentence count, reading time estimation, and keyword frequency analysis.",
    tech: ["React", "Text Processing", "Data Visualization"],
    status: "in-progress",
    demoUrl: null,
    githubUrl: "https://github.com/user/text-analyzer"
  }
];

export const getProjectById = (id) => {
  return projects.find(project => project.id === parseInt(id));
};