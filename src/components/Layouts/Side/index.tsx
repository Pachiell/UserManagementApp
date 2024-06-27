import { memo } from "react";
import { useNavigate } from "react-router-dom";
import {
  faRectangleList,
  faChartPie,
  faDatabase,
  faDiagramProject,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FaRectangleList = memo(() => <FontAwesomeIcon icon={faRectangleList} />);
const FaChartPie = memo(() => <FontAwesomeIcon icon={faChartPie} />);
const FaDiagramProject = memo(() => (
  <FontAwesomeIcon icon={faDiagramProject} />
));
const Database = memo(() => <FontAwesomeIcon icon={faDatabase} />);

const SideMenu = () => {
  const navigate = useNavigate();
  return (
    <div className="h-full w-full bg-[#223A70]">
      <div
        className="ml-5 flex cursor-pointer items-center"
        onClick={() => {
          navigate("/home");
        }}
      >
        <div className="h-10 w-10">
          <img src="../../favicon.png" alt="" />
        </div>
        <h1 className="px-5 py-5 text-left text-xl font-bold text-white">
          Trendify
        </h1>
      </div>
      <button
        className="h-16 w-full pl-6 text-left text-2xl text-white hover:bg-[#2f519e]"
        type="button"
        onClick={() => {
          navigate("/format");
        }}
      >
        <span className="mr-5">
          <FaRectangleList />
        </span>
        フォーマット
      </button>
      <button
        className="h-16 w-full pl-6 text-left text-2xl text-white hover:bg-[#2f519e]"
        type="button"
        onClick={() => {
          navigate("/query");
        }}
      >
        <span className="mr-5">
          <FaChartPie />
        </span>
        クエリ
      </button>
      <button
        className="h-16 w-full pl-6 text-left text-2xl text-white hover:bg-[#2f519e]"
        type="button"
        onClick={() => {
          navigate("/var");
        }}
      >
        <span className="mr-5">
          <FaDiagramProject />
        </span>
        変数
      </button>
      <button
        className="h-16 w-full pl-6 text-left text-2xl text-white hover:bg-[#2f519e]"
        type="button"
        onClick={() => {
          navigate("/data");
        }}
      >
        <span className="mr-6">
          <Database />
        </span>
        データ
      </button>
    </div>
  );
};

FaRectangleList.displayName = "FaRectangleList";
FaChartPie.displayName = "FaChartPie";
FaDiagramProject.displayName = "FaDiagramProject";
Database.displayName = "Database";

export const Side = memo(SideMenu);
