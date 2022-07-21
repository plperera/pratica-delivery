import ReactDom from "react-dom";
import Menu from "./Menu";

function App () {
    return (
        <Menu />
    )
}
ReactDom.render(<App />, document.querySelector(".root"));