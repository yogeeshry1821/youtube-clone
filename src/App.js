
import { Provider } from 'react-redux';
import './App.css';
import Body from './Components/Body';
import Header from './Components/Header';
import appStore from './utils/store';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchPage from './Components/WatchPage';
import MainContainer from './Components/MainContainer';
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />
      },
      {
        path: "/watch",
        element: <WatchPage />
      }
    ]
  }
])
function App() {
  return (
    <Provider store={appStore}>
      <Header />
      <RouterProvider router={appRouter}>
        <Body />
      </RouterProvider>

    </Provider>
  );
}

export default App;
