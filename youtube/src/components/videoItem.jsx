import React from "react";
import { useHistory, useLocation } from "react-router-dom";
// import Video from "./video";

function VideoItem(props) {
  let history = useHistory();
  let location = useLocation();
  let pathName = location.pathname;

  const clickVideo = (event) => {
    let targetClicked = event.target;
    while (!targetClicked.classList.contains("videoWrapper")) {
      targetClicked = targetClicked.parentNode;
    }
    // console.log(event.target.getAttribute("data-value"));
    // console.log(event.target.dataset.value);
    // console.log(targetClicked.dataset.value);
    // let list = targetClicked.dataset.list.title;
    let snippetInfo = JSON.parse(targetClicked.dataset.list);
    // let list = targetClicked.dataset.list;
    // list = JSON.stringify(list);
    // console.log(`snippetInfo:`, snippetInfo);
    // console.log(targetClicked.dataset.list);
    // console.log(Object.values(list));
    // console.log(JSON.stringify(targetClicked.dataset));

    // var objectValues = list;
    // for (var key in objectValues) {
    //   alert("attr: " + key + ", value: " + objectValues[key]);
    // }
    const videoId = targetClicked.dataset.value;
    history.push("/detail?id=" + videoId);

    // console.log(pathName);
    if (pathName === "/detail") {
      console.log("video clicked in detailPage");
      props.onVideoChange({ videoId, snippetInfo });
      // console.log(snippetInfo);
    } else {
      ////////////////////
      props.onClicked({ videoId, snippetInfo });
    }
  };

  return (
    <div
      className="videoItem videoWrapper"
      onClick={clickVideo}
      data-value={props.videoId}
      data-list={JSON.stringify(props.snippet)}
    >
      {/* <Video videoSrc="" /> */}
      <img
        src={props.snippet.thumbnails.default.url}
        alt="thumbnail"
        className="vidoeItem__thumbnail"
      />
      <span className="videoItem__title">{props.snippet.title}</span>
      <span className="videoItem__owner">{props.snippet.channelTitle}</span>
    </div>
  );
}
export default VideoItem;
