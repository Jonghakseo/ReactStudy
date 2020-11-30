import React, { useState } from "react";
import Header from "../components/header";
import Main from "../components/mainVideoItems";
import Detail from "../components/detailView";
import Footer from "../components/footer";
import "./app.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  // let itemClicked = false;

  const [searchword, setSearchword] = useState("");
  // const [mainpageClass, setMainpageClass] = useState("");
  const [mainpageHide, setMainpageHide] = useState(false);
  const [videoId, setvideoId] = useState("");
  const [videoInfo, setvideoInfo] = useState([]);

  const searchByKeyWord = (keyword) => {
    setSearchword(keyword);
    // console.log(`searchword: ${searchword}`);
  };

  // const hidePage = () => {
  //   setMainpageClass("hidden");
  // };

  const getVideoId = ({ videoId, snippetInfo }) => {
    // console.log(videoId);
    // console.log(snippetInfo);
    setvideoId(videoId);
    setvideoInfo(snippetInfo);

    /////
    setMainpageHide(true);
  };

  return (
    <div className="App">
      <Header onSearch={searchByKeyWord} />
      <Router>
        <Switch>
          <Route exact path={["/", "/search"]}>
            <Main
              // className={mainpageClass}
              hide={mainpageHide}
              onSearch={searchword}
              goDetail={getVideoId}
            />
          </Route>
          <Route
            path="/detail"
            // component={<Detail videoId={videoId} videoInfo={videoInfo} />}
          >
            <Detail videoId={videoId} videoInfo={videoInfo} />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
