import NavBar from "../components/NavBar";
import Foot from "../components/Footer";
import Results from "../components/Results";
function Result() {
  return (
    <div>
      <header>
        <NavBar></NavBar>
      </header>
      <main>
        <Results></Results>
      </main>
      <footer>
        <Foot></Foot>
      </footer>
    </div>
  );
}

export default Result;
