import React from "react";
import "../../article.css";
import Footer from "../../../Footer.js";

function FFEngineeringDay() {
  return (
    <div className="articlePost">
      <div className="articleItems">
        {/* <div className="leftspace"></div> */}
        <div className="articleWrapper" id="articleEngineeringDay">
          {/* <img className="singlePostImg" src="" alt="" /> */}
          <h1 id="aPT" className="articlePostTitle">
            2022 Engineering Day at the Riverfront Museum
          </h1>
          <h2 className="articlePostSubHeader">
            "Promoting FIRST to Aspiring Learners"
          </h2>
          <div className="articleCredits">
            <span className="articleInfo">
              <p id="name">By: Harris Khoo</p>
              <p id="separator">|</p>
              <p id="date">October 12, 2022</p>
            </span>
          </div>
          <p className="articlePostDescription">
            During this event, we co-hosted the Engineering Day at the Peoria
            Riverfront Museum with Caterpillar (Our Main Sponsor) and the
            Trailblazers (Alliance Partner). We invited many other FTC teams to
            join us during the event, and we showcased our robot in a quick, one
            match scrimmage. Local news articles and videos were published about
            the event, and our team was interviewed. Over a thousand people
            attended the event that day.
            <br />
            <br />
            <div>
              <iframe
                className="iframe"
                scrolling="no"
                frameborder="0"
                allowfullscreen
                webkitallowfullscreen
                mozallowfullscreen
                allow="autoplay; fullscreen"
                src="https://w3.mp.lura.live/player/prod/v3/anvload.html?key=eyJtIjoiTElOIiwidiI6Ijc0NjMwNTQiLCJhbnZhY2siOiJyejkzRUEwZEpFcDJqczJ3Z0tjWnZpNlBudlJBOERNZSIsInNoYXJlTGluayI6Imh0dHBzOi8vd3d3LmNlbnRyYWxpbGxpbm9pc3Byb3VkLmNvbS9uZXdzL2xvY2FsLW5ld3MvZnJlZS1hZG1pc3Npb24tYW5kLXJvYm90cy1zdW5kYXktYXQtdGhlLXBlb3JpYS1yaXZlcmZyb250LW11c2V1bS8iLCJwbHVnaW5zIjp7ImNvbXNjb3JlIjp7ImNsaWVudElkIjoiNjAzNjQzOSIsImMzIjoiY2VudHJhbGlsbGlub2lzcHJvdWQuY29tIiwidmVyc2lvbiI6IjUuMi4wIiwidXNlRGVyaXZlZE1ldGFkYXRhIjp0cnVlLCJtYXBwaW5nIjp7ImMzIjoiY2VudHJhbGlsbGlub2lzcHJvdWQuY29tIiwibnNfc3Rfc3QiOiJ3bWJkIiwibnNfc3RfcHUiOiJOZXhzdGFyIiwibnNfc3RfZ2UiOiJOZXdzLFZpZGVvIiwiY3NfdWNmciI6IiJ9fSwiZGZwIjp7ImNsaWVudFNpZGUiOnsiYWRUYWdVcmwiOiJodHRwczovL3B1YmFkcy5nLmRvdWJsZWNsaWNrLm5ldC9nYW1wYWQvYWRzP3N6PTF4MTAwMCZpdT0vNTY3OC9ueC53bWJkL25ld3MvbG9jYWxfbmV3cyZpbXBsPXMmZ2RmcF9yZXE9MSZlbnY9dnAmb3V0cHV0PXZtYXAmdW52aWV3ZWRfcG9zaXRpb25fc3RhcnQ9MSZhZF9ydWxlPTEmZGVzY3JpcHRpb25fdXJsPWh0dHBzOi8vd3d3LmNlbnRyYWxpbGxpbm9pc3Byb3VkLmNvbS9uZXdzL2xvY2FsLW5ld3MvZnJlZS1hZG1pc3Npb24tYW5kLXJvYm90cy1zdW5kYXktYXQtdGhlLXBlb3JpYS1yaXZlcmZyb250LW11c2V1bS8mdmNvbnA9MiZjdXN0X3BhcmFtcz12aWQlM0Q3NDYzMDU0JTI2Y21zaWQlM0QxMDU3ODUzJTI2cGlkJTNEMTA1Nzg1MyUyNnBlcnNfY2lkJTNEbnhzLTU3LWFydGljbGUtMTA1Nzg1MyUyNnZpZGNhdCUzRCUyRm5ld3MlMkZsb2NhbF9uZXdzJTI2Ym9iX2NrJTNEJTVCYm9iX2NrX3ZhbCU1RCUyNmRfY29kZSUzRDElMjZwYWdldHlwZSUzRHN0b3J5JTI2aGxtZXRhJTNEZnJlZSthZG1pc3Npb24rYW5kK3JvYm90cytzdW5kYXkrYXQrdGhlK3Blb3JpYStyaXZlcmZyb250K211c2V1bSUyNnBsYXllcndpZHRoJTNENTE3LjM0NCUyNnBsYXllcmhlaWdodCUzRDI5MSUyNnVwaWQlM0QyN2MxY2RlMy0wYzc0LTQ4MDgtYTk1Yy0xMWM1NWFhMTQxNTElMjZubHBjYXQxJTNEdHJhdmVsJTJDcmVmZXJlbmNlJTI2bmxwY2F0MiUzRHRvdXJpc3RfZGVzdGluYXRpb25zJTJDbGlicmFyaWVzX211c2V1bXMlMjZubHBjYXQzJTNEbXVzZXVtcyUyNm5scHNlbnQlM0Rwb3NpdGl2ZSUyNnZwaWYlM0RmYWxzZSUyNmNvbnRlbnRfbGVuJTNEMTA1IiwidnBhaWRNb2RlIjoiaW5zZWN1cmUifSwic2VydmVyU2lkZSI6eyJwcGlkIjpudWxsLCJkZXNjcmlwdGlvblVybCI6Imh0dHBzJTNBJTJGJTJGd3d3LmNlbnRyYWxpbGxpbm9pc3Byb3VkLmNvbSUyRm5ld3MlMkZsb2NhbC1uZXdzJTJGZnJlZS1hZG1pc3Npb24tYW5kLXJvYm90cy1zdW5kYXktYXQtdGhlLXBlb3JpYS1yaXZlcmZyb250LW11c2V1bSUyRiIsInBhcmFtcyI6InBsYXllcndpZHRoJTNENTE3LjM0NCUyNnBsYXllcmhlaWdodCUzRDI5MSUyNnVwaWQlM0QyN2MxY2RlMy0wYzc0LTQ4MDgtYTk1Yy0xMWM1NWFhMTQxNTEifX0sIm5pZWxzZW4iOnsiYXBpZCI6IlAzRUQ2NUMxMi0zQkI2LTQ0MDEtQkY0RC03Nzg5RjE2MzRDQjIiLCJzZmNvZGUiOiJkY3IiLCJ0eXBlIjoiZGNyIiwiYXBuIjoiQW52YXRvIiwiZW52aXJvbm1lbnQiOiJwcm9kdWN0aW9uIiwidXNlRGVyaXZlZE1ldGFkYXRhIjp0cnVlLCJtYXBwaW5nIjp7ImFkbG9hZHR5cGUiOjIsImFkTW9kZWwiOjJ9LCJvcHRPdXQiOmZhbHNlfSwic2VnbWVudEN1c3RvbSI6eyJzY3JpcHQiOiJodHRwczovL3NlZ21lbnQucHNnLm5leHN0YXJkaWdpdGFsLm5ldC9hbnZhdG8uanMiLCJ3cml0ZUtleSI6Imh4dzFDbEU1MTNHdnJ2ckpmQ3ZORzJBRE1XTXp5WnB0IiwicGx1Z2luc0xvYWRpbmdUaW1lb3V0IjoxMn0sImdvb2dsZUFuYWx5dGljcyI6eyJ0cmFja2luZ0lkIjoiVUEtMzcxNDQ5MDEtMTUiLCJldmVudHMiOnsiQURfU1RBUlRFRCI6eyJhbGlhcyI6IlZpZGVvLUFkIiwiY2F0ZWdvcnkiOiJWaWRlbyIsImxhYmVsIjoiW1tUSVRMRV1dIn0sIlZJREVPX1NUQVJURUQiOnsiYWxpYXMiOiJWaWRlby1QbGF5IiwiY2F0ZWdvcnkiOiJWaWRlbyIsImxhYmVsIjoiW1tUSVRMRV1dIn0sIlZJREVPX0ZJUlNUX1FVQVJUSUxFIjp7ImFsaWFzIjoiVmlkZW8tMjUlIiwiY2F0ZWdvcnkiOiJWaWRlbyIsImxhYmVsIjoiW1tUSVRMRV1dIn0sIlZJREVPX01JRF9QT0lOVCI6eyJhbGlhcyI6IlZpZGVvLTUwJSIsImNhdGVnb3J5IjoiVmlkZW8iLCJsYWJlbCI6IltbVElUTEVdXSJ9LCJWSURFT19USElSRF9RVUFSVElMRSI6eyJhbGlhcyI6IlZpZGVvLTc1JSIsImNhdGVnb3J5IjoiVmlkZW8iLCJsYWJlbCI6IltbVElUTEVdXSJ9LCJWSURFT19DT01QTEVURUQiOnsiYWxpYXMiOiJWaWRlby0xMDAlIiwiY2F0ZWdvcnkiOiJWaWRlbyIsImxhYmVsIjoiW1tUSVRMRV1dIn0sIlVTRVJfUEFVU0UiOnsiYWxpYXMiOiJQYXVzZSIsImNhdGVnb3J5IjoiVmlkZW8iLCJsYWJlbCI6IltbVElUTEVdXSJ9LCJVU0VSX1JFU1VNRSI6eyJhbGlhcyI6IlJlc3VtZSIsImNhdGVnb3J5IjoiVmlkZW8iLCJsYWJlbCI6IltbVElUTEVdXSJ9fX0sInBhbCI6eyJsaWJyYXJ5UmVxdWVzdGVkIjp0cnVlfX0sImh0bWw1Ijp0cnVlLCJ0b2tlbiI6ImV5SjBlWEFpT2lKS1YxUWlMQ0poYkdjaU9pSklVekkxTmlKOS5leUoyYVdRaU9pSTNORFl6TURVMElpd2lhWE56SWpvaWNubzVNMFZCTUdSS1JYQXlhbk15ZDJkTFkxcDJhVFpRYm5aU1FUaEVUV1VpTENKbGVIQWlPakUyTmpVMk1Ua3dOekY5Lk41eVlCLVV5cXVidjV2UUJja2tCaG5jZ1YyTEhtMlYzVHZYenNJNlN3cWsifQ%3D%3D"
                width="640"
                height="360"
              ></iframe>{" "}
            </div>
            <a
              className="engineerDayVideoLink"
              href="https://www.centralillinoisproud.com/news/local-news/free-admission-and-robots-sunday-at-the-peoria-riverfront-museum/"
            >
              Link To Source
            </a>
            <br />
            <br />
            This event was extremely enjoyable. It was great to see so many
            aspiring kids wanting to join FIRST after seeing our robot. We
            answered questions to parents and kids concerning what we did as a
            team, what FTC was, and what FIRST is all about.
          </p>
        </div>
        {/* <div className="rightspace"></div> */}
      </div>
      <Footer />
    </div>
  );
}

export default FFEngineeringDay;
