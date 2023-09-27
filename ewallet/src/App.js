import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from './router/Root';
import { CardsPage } from './router/cards';
import AddCard from './router/addcard';

const url = "https://randomuser.me/api/";

const getRandomUser = async () => {
  const res = await fetch(url)
  const data = await res.json()
  return data
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: () => getRandomUser(),
    id: "root",
    children: [
      {
        index: true,
        element: <CardsPage />,
      },
      {
        path: "addcard",
        element: <AddCard />
      }
    ]
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
