import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import VideoItem from "./videoItem";
const { getVideos } = require("../server");

function MainVideoItems(props) {
  let history = useHistory();
  let location = useLocation();
  let pathName = location.pathname;

  const [videos, setVideos] = useState([]);

  // ****************************************
  // init page(show popular videos)
  // ****************************************
  useEffect(() => {
    const fetchData = async () => {
      const result = await getVideos();
      // console.log(result);
      setVideos([...result]);
    };
    fetchData();
    // return () => {
    //   console.log("컴포넌트가 화면에서 사라짐");
    // };
  }, []);

  // ****************************************
  // show search result
  // ****************************************
  useEffect(() => {
    const searchword = props.onSearch;
    if (!searchword) return;
    console.log(`searchword: ${searchword}`);

    // await getVideos(searchword).then((data) => setVideos(() => [...data]));
    // const result = await getVideos(searchword);
    // console.log(result);
    // setVideos([...result]);
    const fetchData = async () => {
      const result = await getVideos(searchword);
      // console.log(result);
      setVideos([...result]);
      history.push("/search");
    };
    fetchData();
  }, [props.onSearch, history]);

  // ****************************************
  // go back to main page from search page
  // ****************************************
  useEffect(() => {
    // console.log(`location: `, location);
    // console.log(`pathName: `, pathName);
    if (pathName === "/") {
      // const result = await getVideos();
      // setVideos([...result]);

      const fetchData = async () => {
        const result = await getVideos();
        // console.log(result);
        setVideos([...result]);
      };
      fetchData();
    }
    // console.log(history);
  }, [pathName]);

  //////////////////////
  // let initVideos = useMemo(
  //   async () =>
  //     await getVideos().then(function (response) {
  //       // handle success
  //       initVideos = response;
  //       console.log("initVideos", initVideos);
  //       return initVideos;
  //     }),
  //   [location.pathname]
  // );
  // console.log(initVideos);

  const changeVideo = ({ videoId, snippetInfo }) => {
    console.log("another vid clicked");
    // console.log(videoId);
    // console.log(snippetInfo);
    // props.changeVideo();
    props.onChangeVideo({ videoId, snippetInfo });
  };

  return (
    <section
      className={pathName === "/detail" ? "sideVideoItems" : "mainVideoItems"}
    >
      {videos.map((item) => {
        return (
          <VideoItem
            key={item.id.videoId ? item.id.videoId : item.id}
            videoId={item.id.videoId ? item.id.videoId : item.id}
            snippet={item.snippet}
            onClicked={props.goDetail}
            onVideoChange={changeVideo}
          />
        );
      })}
      {/* </section> */}
    </section>
  );
}

export default MainVideoItems;
