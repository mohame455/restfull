import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./js/action";
import ContactList from "./components/ContactList";
import NavBar from "./components/NavBar";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  const { users, isLoading } = useSelector((state) => state.userReducer);
  return (
    <div className="container-fluid">
      <NavBar />
      {isLoading ? (
        <h1>.......Loading</h1>
      ) : (
        <div>
          <ContactList users={users} />
        </div>
      )}
    </div>
  );
}

export default App;
