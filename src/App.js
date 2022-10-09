import { Fragment } from "react";
import Counter from "./components/Counter";
import Auth from "./components/Auth"
import Header from "./components/Header"
import UserProfile from "./components/UserProfile";
import { useSelector } from "react-redux";

function App() {
  const auth = useSelector((state) => state.auth.loggedIn)

  return (
    <Fragment>
      <Header />
      {!auth && < Auth />}
      {auth && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
