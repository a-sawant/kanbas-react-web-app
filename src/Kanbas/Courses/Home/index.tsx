import React from "react";
import ModuleList from "../../Modules/list";

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <div className="d-flex">
      <ModuleList />
      <div className="flex-grow-0 me-2 d-none d-lg-block" style={{ width: "250px" }}>
        <h3>Course Status</h3>
        <button className="btn btn-secondary">Unpublish</button>
        <button className="btn btn-success">Publish</button>
        <ul className="list-group wd-modules">
          <li className="list-group-item"><a href="#">Import Existing Content</a></li>
          <li className="list-group-item"><a href="#">Import From Commons</a></li>
          <li className="list-group-item"><a href="#">Choose Home Page</a></li>
          <li className="list-group-item"><a href="#">View Course Screen</a></li>
          <li className="list-group-item"><a href="#">New Announcement</a></li>
          <li className="list-group-item"><a href="#">New Analytics</a> </li>
          <li className="list-group-item"><a href="#">View Course Notifications</a></li>
        </ul>
        <h2>Coming Up</h2>
        <button className="btn btn-secondary wd-modules-red"> <i className="fa fa-calendar"></i> View Calendar</button>
        <ul className="list-group wd-modules">
          <li className="list-group-item">
            <a href="/Kanbas/Dashboard/screen.html">Lecture at 11:45am</a>
          </li>
          <li className="list-group-item">
            <a href="/Kanbas/Dashboard/screen.html">Lecture at 11:45am</a>
          </li>
          <li className="list-group-item">
            <a href="/Kanbas/Dashboard/screen.html">Lecture Sep 11 at 6pm</a>
          </li>
        </ul>
      </div>
    </div>
 </div>
  );
}

export default Home;
