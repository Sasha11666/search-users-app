import "./App.css";
import { Search } from "./components/search/Search";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

*:before,
*:after {
  -webkit-box-sizing: border-box;
   box-sizing: border-box;
}


html,
body {
  font-family: 'RobotoRegular', sans-serif;
}


@font-face {
  font-family: "RobotoRegular";
  src: local("RobotoRegular"), url(./fonts/Roboto-Regular.ttf) format(truetype);
  font-weight: 400;
}

@font-face {
  font-family: "RobotoMedium";
  src: local("RobotoMedium"), url(./fonts/Roboto-Medium.ttf) format(truetype);
  font-weight: 500;
}
}`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Search />
    </div>
  );
}

export default App;
