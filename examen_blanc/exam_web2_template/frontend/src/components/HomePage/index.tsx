import { useOutletContext } from "react-router-dom";
import LoginPage from "../Login";
import { BookContext } from "../../types";

const HomePage = () => {
    const { authenticatedUser, clearUser }: BookContext  = useOutletContext();
  return (
    <div>
      <h1>Home Page</h1>
      {authenticatedUser === undefined ? (
        <LoginPage />
      ) : (
        <div>
            <p>Welcome {authenticatedUser.username}</p>
            <button onClick={clearUser}>Logout</button>
        </div>
      )}
    </div>
  );
};
export default HomePage;
