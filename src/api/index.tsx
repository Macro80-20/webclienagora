import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
const data = JSON.stringify({
  email: "s.admin@alpian.com",
  password: "exerciseFREEcattle80",
});

export const loginConfig: AxiosRequestConfig = {
  method: "post",
  url:
    "https://web-client-mocked-api-zf5z76bmzq-ew.a.run.app/api/v1/auth/login",
  headers: {
    authority: "web-client-mocked-api-zf5z76bmzq-ew.a.run.app",
    pragma: "no-cache",
    accept: "application/json, text/plain, */*",
    "user-agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
    "content-type": "application/json;charset=UTF-8",
    origin: "http://localhost:3000",
    "sec-fetch-site": "cross-site",
    "sec-fetch-mode": "cors",
    "sec-fetch-dest": "empty",
    referer: "http://localhost:3000/login",
    "Content-Type": "application/json",
    //     Cookie:
    //       "alpian-auth=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwZXJtaXNzaW9ucyI6WyJhbHBpYW4uY3VzdG9tZXJzX21hbmFnZW1lbnQuKiJdLCJleHAiOjE1OTczMTQ4NTUsImlzcyI6ImFscGlhbi1hdXRoIiwic3ViIjoiZDUzNGIxMWItYzdiOC00OTI0LTkwMTktNmM2YTQ5YTc3NWNjIn0.nBpKAgOMRe4E7a4DCtUX7Oef3aUf5orjc9ZcoFvtp3g; alpian-auth=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwZXJtaXNzaW9ucyI6WyJhbHBpYW4uKi4qIl0sImV4cCI6MTYwMTk5NzQ3MywiaXNzIjoiYWxwaWFuLWF1dGgiLCJzdWIiOiI3MTRmNDcwZC0wNTRiLTQ5MjQtYTVjNS00NWYyYjEwMDVlNzIifQ.Lss-e62ZbxGbUuREVguZE4CPy1zgbjUtK1m6RtGq3k4",
  },
  data: data,
};

export const agoraConfig: AxiosRequestConfig = {
  method: "get",
  url:
    "https://web-client-mocked-api-zf5z76bmzq-ew.a.run.app/api/v1/users/12/appointments/12/call-token",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwZXJtaXNzaW9ucyI6WyJhbHBpYW4uKi4qIl0sImV4cCI6MTYwMjA4NDI2MCwiaXNzIjoiYWxwaWFuLmNvbSIsInN1YiI6IjcxNGY0NzBkLTA1NGItNDkyNC1hNWM1LTQ1ZjJiMTAwNWU3MiJ9.4bjGCHSyD3sJIgG-j4laxDDPqHtfxuFvIORxA0HT58I",
    Cookie:
      "alpian-auth=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwZXJtaXNzaW9ucyI6WyJhbHBpYW4uKi4qIl0sImV4cCI6MTYwMTk5Nzc3NCwiaXNzIjoiYWxwaWFuLWF1dGgiLCJzdWIiOiI3MTRmNDcwZC0wNTRiLTQ5MjQtYTVjNS00NWYyYjEwMDVlNzIifQ.yGH3gr-TfutIt1vHyqhX3_vpxNnGiwQNeuHq_I4cSvw",
  },
};
