import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
// import SidebarVideoItems from "./sidebarVideoItems";
import SidebarVideoItems from "./mainVideoItems";

function DetailView(props) {
  let history = useHistory();
  let location = useLocation();
  let pathName = location.pathname;

  const baseUrl = "https://www.youtube.com/embed/";
  //   const test = "u7A1ESIR2K4";
  //   const [videoId, setVideoId] = useState(null);
  const [videoId, setVideoId] = useState(props.videoId);
  const [videoSnippet, setVideoSnippet] = useState(props.videoInfo);
  // const [videoInfo, setVideoInfo] = useState(null);

  useEffect(() => {
    // setVideoId(props.videoId);
    setVideoId(videoId);
    setVideoSnippet(videoSnippet);
    // console.log(props.videoId);
    // console.log(props.snippet);
    // console.log(videoId);
    console.log(`location.search: `, location.search);
  }, [videoId, videoSnippet, location.search]);

  //   useEffect(() => {
  //     console.log(
  //       document.querySelector(".ytp-title-channel-logo").getAttribute("href")
  //     );
  //   }, [videoId]);
  const changeVideo = ({ videoId, snippetInfo }) => {
    // console.log("test vid test");
    // console.log(videoId);
    // console.log(snippetInfo);
    setVideoId(videoId);
    setVideoSnippet(snippetInfo);
    console.log(history);
    console.log(location);
  };

  return (
    <section className="detailPage">
      <div>
        <iframe
          title={videoId}
          id="player"
          type="text/html"
          width="640"
          height="390"
          src={`${baseUrl}${videoId}?enablejsapi=1&origin=http://example.com`}
          frameBorder="0"
        ></iframe>
        <h1>{videoSnippet.title}</h1>
        <h2>{videoSnippet.channelTitle}</h2>
        <span>{videoSnippet.description}</span>
      </div>
      <SidebarVideoItems onChangeVideo={changeVideo} />
    </section>
  );
}

export default DetailView;
