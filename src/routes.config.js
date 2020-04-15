import Login from './components/login/Login';
import Signup from './components/signup/Signup';

import Home from './components/home/Home'
import Users from './components/users/Users';
import Tasks from './components/tasks/AllTasks';
import TaskForm from './components/tasks/TaskForm';
import UserForm from './components/users/UserForm';

const routes = [
  {
    title: "Log in",
    path: "/",
    component: Login
  },
  {
    title: "Sign up",
    path: "/signup",
    component: Signup
  },
  {
    title: "Home",
    path: "/home",
    component: Home
  },
  {
    title: "Tasks",
    path: "/tasks",
    component: Tasks
  },
  {
    title: "View Users",
    path: "/users",
    component: Users
  },
  {
    title: "Task Form",
    path: "/tasks/add",
    component: TaskForm
  },
  {
    title: "Edit Task Form",
    path: "/tasks/edit/:endpoint",
    component: TaskForm
  },
  {
    title: "Add User Form",
    path: "/users/add",
    component: UserForm
  },
  {
    title: "Edit User Form",
    path: "/users/edit/:endpoint",
    component: UserForm
  }
];

export default routes;