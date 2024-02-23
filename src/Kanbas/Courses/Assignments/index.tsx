import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <>
      <div className="d-flex">
      <input type="text"
        placeholder="Search for Assignments"
        id="text-search-assignments"/><br/>

        <button>Group</button>
        <button>Assignments</button>
        <select id="Edit Assignment">
            <option selected value="Edit Assignment Dates">Edit Assignment Dates</option>
            <option value="Assignment Groups Weight">Assignment Groups Weight</option>
            <option value="Gradescope 1.3">Gradescope 1.3</option>
            <option value="Commons Favorite">Commons Favorite</option>
        </select>

      </div>
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div>
            <FaEllipsisV className="me-2" /> ASSIGNMENTS
            <span className="float-end">
              <FaCheckCircle className="text-success" />
              <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
            </span>
          </div>
          <ul className="list-group">
            {assignmentList.map((assignment) => (
              <li className="list-group-item">
                <FaEllipsisV className="me-2" />
                <Link
                   to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link>
                <span className="float-end">
                  <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
              </li>))}
          </ul>
        </li>
      </ul>
    </>
);}
export default Assignments;