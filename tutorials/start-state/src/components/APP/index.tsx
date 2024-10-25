import "./App.css";
import Header from "../Header/index";
import Main from "../Main/index";
import Footer from "../Footer/index";


function App() {
  return (
    <div className="page">
      <Header title={"we love pizza"} version={0+1} />
      <Main />
      <Footer />
    </div>
  );
}
export default App;
