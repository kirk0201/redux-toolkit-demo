import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";

import { useSelector } from "react-redux";

function App() {
  const islogin = useSelector((state) => state.auth.isAuthenticated);
  return (
    <>
      <Header />
      {!islogin && <Auth />}
      {islogin && <UserProfile />}
      <Counter />
    </>
  );
}

export default App;
