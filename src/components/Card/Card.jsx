import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faTree,
  faLeaf,
  faRuler,
  faLemon,
  faMountain,
} from "@fortawesome/free-solid-svg-icons";
import Popover from "../Popover/Popover";

export default function Card({ treeDetails }) {
  return (
    <>
      <div className="flex flex-col md:flex-row border shadow-md rounded-lg bg-white p-8 md:w-5/12 gap-2">
        <div className="flex flex-col md:w-1/2">
          <h2 className="font-black text-2xl">{treeDetails["Common Name"]}</h2>
          <h3 className="font-semlbold text-lg -mt-1">{treeDetails["Scientific Name"]}</h3>
          <p className="text-sm overflow-y-scroll h-52 mt-2">{treeDetails["Description"]}</p>
          <div className="flex justify-between mt-8">
            <FontAwesomeIcon
              icon={faLocationDot}
              size="xl"
              color="#4B08A1"
              className="hover:text-indigo-600"
            />
            <Popover
              children={
                <FontAwesomeIcon
                  icon={faTree}
                  size="xl"
                  color="#4B08A1"
                  className="hover:text-indigo-600"
                />
              }
              title="Outstanding Features"
              paragraph={true}
              content={treeDetails["Outstanding Features"]}
            />

            <Popover
              children={
                <FontAwesomeIcon
                  icon={faLeaf}
                  size="xl"
                  color="#4B08A1"
                  className="hover:text-indigo-600"
                />
              }
              title="Leaves"
              paragraph={true}
              content={treeDetails["Leaf"]}
            />
            <Popover
              children={
                <FontAwesomeIcon
                  icon={faRuler}
                  size="xl"
                  color="#4B08A1"
                  className="hover:text-indigo-600"
                />
              }
              title="Height"
              content={treeDetails["Height"]}
            />

            <Popover
              children={
                <FontAwesomeIcon
                  icon={faLemon}
                  size="xl"
                  color="#4B08A1"
                  className="hover:text-indigo-600"
                />
              }
              title="Fruit"
              paragraph={true}
              content={treeDetails["Fruit"]}
            />

            <Popover
              children={
                <FontAwesomeIcon
                  icon={faMountain}
                  size="xl"
                  color="#4B08A1"
                  className="hover:text-indigo-600"
                />
              }
              title="Hardiness Zone"
              content={treeDetails["Hardiness Zone"]}
            />
          </div>
        </div>
        <div className="flex justify-center md:justify-end items-center md:w-1/2 mt-6 md:mt-0">
          <img
            src={treeDetails["defaultImagePath"]}
            alt={treeDetails["Common Name"]}
            className="h-80 w-auto rounded-lg shadow-md border"
          />
        </div>
      </div>
    </>
  );
}
