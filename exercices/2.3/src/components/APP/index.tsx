import PageTitle from "../PageTitle/index"
import Footer from "../Footer/index"
import UserCard from "../Main/index"

const App = () => {
  const title = "Welcome to My App";
  const usersCard = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 35 },
  ];
  const footerText = "© 2023 My App";

  return (
    <div>
      <PageTitle title={title} />
      <UserCard usersCard={usersCard} />
      <Footer title={footerText} />
    </div>
  );
};

export default App;
