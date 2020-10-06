import React, { useState, useEffect } from "react";
import AgoraRTC from "agora-rtc-sdk-ng";
import useAgora from "./hooks/useAgora";
import MediaPlayer from "./components/MediaPlayer";
import "./Call.css";

import axios from "axios";
import { loginConfig, agoraConfig } from "./api/";
const client = AgoraRTC.createClient({ codec: "h264", mode: "rtc" });

function Call() {
  const [appid, setAppid] = useState("364411bcaf3848f6abec44c2c9f17425");
  const [token, setToken] = useState(
    "006364411bcaf3848f6abec44c2c9f17425IACVk+5gvxTAGMTVnPFc3T6TNWEHT4lgODz1WhCcDj3XDpmbMngAAAAAEAANYBkGoZJ9XwEAAQChkn1f"
  );
  const [authToken, setauthToken] = useState();
  const [agoraCallConfig, setAgoraCallConfig] = useState({
    token: null,
    channel: null,
  });
  const [channel, setChannel] = useState("agora call");
  const {
    localAudioTrack,
    localVideoTrack,
    leave,
    join,
    joinState,
    remoteUsers,
  } = useAgora(client);

  useEffect(() => {
    axios(loginConfig)
      .then(function (response: { data: any }) {
        setauthToken(response.data.token);
      })
      .catch(function (error: any) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios(agoraConfig)
      .then(function (response: { data: any }) {
        setAgoraCallConfig({
          token: response.data.token,
          channel: response.data.channel_name,
        });
      })
      .catch(function (error: any) {
        console.log(error);
      });
  }, [authToken]);

  console.log("authToken", authToken);
  console.log("agoraclient", agoraCallConfig);

  return (
    <div className="call">
      <form className="call-form">
        <label>
          AppID:
          <input
            type="text"
            name="appid"
            onChange={(event) => {
              setAppid(event.target.value);
            }}
          />
        </label>
        <label>
          Token(Optional):
          <input
            type="text"
            name="token"
            onChange={(event) => {
              setToken(event.target.value);
            }}
          />
        </label>
        <label>
          Channel:
          <input
            type="text"
            name="channel"
            onChange={(event) => {
              setChannel(event.target.value);
            }}
          />
        </label>
        <div className="button-group">
          <button
            id="join"
            type="button"
            className="btn btn-primary btn-sm"
            disabled={joinState}
            onClick={() => {
              join(appid, channel, token);
            }}
          >
            Join
          </button>
          <button
            id="leave"
            type="button"
            className="btn btn-primary btn-sm"
            disabled={!joinState}
            onClick={() => {
              leave();
            }}
          >
            Leave
          </button>
        </div>
      </form>
      <div className="player-container">
        <div className="local-player-wrapper">
          <p className="local-player-text">
            {localVideoTrack && `localTrack`}
            {joinState && localVideoTrack ? `(${client.uid})` : ""}
          </p>
          <MediaPlayer
            videoTrack={localVideoTrack}
            audioTrack={localAudioTrack}
          ></MediaPlayer>
        </div>
        {remoteUsers.map((user) => (
          <div className="remote-player-wrapper" key={user.uid}>
            <p className="remote-player-text">{`remoteVideo(${user.uid})`}</p>
            <MediaPlayer
              videoTrack={user.videoTrack}
              audioTrack={user.audioTrack}
            ></MediaPlayer>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Call;
