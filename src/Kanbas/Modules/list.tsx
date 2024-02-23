import React, { useState } from "react";
import "./index.css";
import { modules } from "../Database";
// import modules from "../Database/modules.json"
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";

function ModuleList() {
  const { courseId } = useParams();
  const modulesList = modules.filter((module) => module.course === courseId);
  console.log(courseId)
  console.log(modulesList)
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);
  return (
    <>
    <div>
      <div className = "d-flex">
        <button className="btn wd-modules-button-white">Collapse All</button>
        <button className="btn wd-modules-button-white">View Progress</button>
        <select className = "form-select wd-modules-200px-width">
            <option>Publish All</option>
            <option>Publish All</option>
            <option>Publish All</option>
        </select>
        <button className="btn btn-secondary wd-modules-red"> <i className="fa fa-plus"></i> Module</button>
      </div>
      <ul className="list-group wd-modules">
        {modulesList.map((module) => (
          <li
            className="list-group-item"
            onClick={() => setSelectedModule(module)}>
            <div>
              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson) => (
                  <li className="list-group-item">
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      </div>
    </>
  );
}
export default ModuleList;