import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,
  BrowserRouter,
} from "react-router-dom";
import { SimpleNavbar } from './components/SimpleNavbar/SimpleNavbar';
import { Characters } from './components/Characters/Characters';
import { Episodes } from './components/Episodes/Episodes';


const router = createBrowserRouter([
  {
    path: '/',
    element: <>
      <SimpleNavbar />
      <div style={{margin: '10px', backgroundColor: 'red'}}>
        <Outlet />
      </div>
      </>,
    children: [{
      path: 'home',
      element: <p>Home</p>
    }, 
    {
      path: 'characters',
      element: <Characters />
    },
    {
      path: 'episodes',
      element: <Episodes />
    }
  ]
  },
])


function App() {
  return <RouterProvider router={router} />;
}

export default App;
