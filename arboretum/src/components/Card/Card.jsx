import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faStar,
  faLeaf,
  faLemon,
  faMountain,
  faRulerVertical,
  faRulerHorizontal,
  faTree,
  faFan,
  faSun,
  faSnowflake,
  faMonument,
  faTractor,
  faCrow,
  faCalendar,
  faPalette,
  faUtensils,
  faPrescriptionBottleMedical,
  faCrown,
  faCircleInfo,
  faInfo,
  faCirclePlay,
} from "@fortawesome/free-solid-svg-icons";
import Popover from "../Popover/Popover";

export default function Card({ treeDetails }) {
  return (
    <>
      <div className="flex flex-col border shadow-md rounded-lg bg-white p-8 w-80 md:w-5/12 gap-2">
        <div className="flex flex-col md:flex-row gap-2">
          <div className="flex flex-col md:w-1/2">
            <h2 className="font-black text-2xl text-nowrap overflow-x-scroll">
              {treeDetails["Common Name"]}
            </h2>
            <h3 className="font-semlbold text-lg -mt-1 text-nowrap overflow-x-scroll">
              {treeDetails["Scientific Name"]}
            </h3>
            <p className="text-sm overflow-y-scroll h-64 mt-2">{treeDetails["Description"]}</p>
          </div>
          <div className="flex justify-center md:justify-end items-center md:w-1/2 mt-6 md:mt-0">
            <img
              src={treeDetails["defaultImagePath"]}
              alt={treeDetails["Common Name"]}
              className="h-80 w-auto rounded-lg shadow-md border"
            />
          </div>
        </div>
        <div className="flex justify-between mt-8">
          {treeDetails["latitude"] && treeDetails["latitude"] != null && ( //assumes if theres a latitude we have longitude
            <Popover
              children={
                <a
                  href={`https://www.google.com/maps?q=${treeDetails["latitude"]},${treeDetails["longitude"]}(${treeDetails["Common Name"]})`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    size="xl"
                    color="#4B08A1"
                    className="hover:text-indigo-600"
                  />
                </a>
              }
            title="Location"
            paragraph={false}
            />
          )}
          {treeDetails["Memorial"] && treeDetails["Memorial"] != null && (
            <Popover
              children={
                <FontAwesomeIcon
                  icon={faMonument}
                  size="xl"
                  color="#4B08A1"
                  className="hover:text-indigo-600"
                />
              }
              title="Memorial"
              paragraph={true}
              content={treeDetails["Memorial"]}
            />
          )}
          {treeDetails["Outstanding Features"] && treeDetails["Outstanding Features"] != null && (
            <Popover
              children={
                <FontAwesomeIcon
                  icon={faStar}
                  size="xl"
                  color="#4B08A1"
                  className="hover:text-indigo-600"
                />
              }
              title="Outstanding Features"
              paragraph={true}
              content={treeDetails["Outstanding Features"]}
            />
          )}
          {treeDetails["Leaf"] && treeDetails["Leaf"] != null && (
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
          )}
          {treeDetails["Bark"] && treeDetails["Bark"] != null && (
            <Popover
              children={
                <FontAwesomeIcon
                  icon={faTree}
                  size="xl"
                  color="#4B08A1"
                  className="hover:text-indigo-600"
                />
              }
              title="Bark"
              content={treeDetails["Bark"]}
            />
          )}
          {treeDetails["Height"] && treeDetails["Height"] != null && (
            <Popover
              children={
                <FontAwesomeIcon
                  icon={faRulerVertical}
                  size="xl"
                  color="#4B08A1"
                  className="hover:text-indigo-600"
                />
              }
              title="Height"
              content={treeDetails["Height"]}
            />
          )}
          {treeDetails["Width"] && treeDetails["Width"] != null && (
            <Popover
              children={
                <FontAwesomeIcon
                  icon={faRulerHorizontal}
                  size="xl"
                  color="#4B08A1"
                  className="hover:text-indigo-600"
                />
              }
              title="Width"
              content={treeDetails["Width"]}
            />
          )}
          {treeDetails["Flower"] && treeDetails["Flower"] != null && (
            <Popover
              children={
                <FontAwesomeIcon
                  icon={faFan}
                  size="xl"
                  color="#4B08A1"
                  className="hover:text-indigo-600"
                />
              }
              title="Flower"
              paragraph={true}
              content={treeDetails["Flower"]}
            />
          )}
          {treeDetails["Fruit"] && treeDetails["Fruit"] != null && (
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
          )}
          {treeDetails["Sun Exposure"] && treeDetails["Sun Exposure"] != null && (
            <Popover
              children={
                <FontAwesomeIcon
                  icon={faSun}
                  size="xl"
                  color="#4B08A1"
                  className="hover:text-indigo-600"
                />
              }
              title="Sun Exposure"
              content={treeDetails["Sun Exposure"]}
            />
          )}
          {treeDetails["Hardiness Zone"] && treeDetails["Hardiness Zone"] != null && (
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
          )}
          {treeDetails["Minnesota Native"] && treeDetails["Minnesota Native"] != 0 && (
            <Popover
              children={
                <FontAwesomeIcon
                  icon={faSnowflake}
                  size="xl"
                  color="#4B08A1"
                  className="hover:text-indigo-600"
                />
              }
              title="Minnesota Native"
              content={"Native to Minnesota"}
            />
          )}
          {treeDetails["Cultivars"] &&
            treeDetails["Cultivars"] != null &&
            treeDetails["Cultivars"] != "none" && (
              <Popover
                children={
                  <FontAwesomeIcon
                    icon={faTractor}
                    size="xl"
                    color="#4B08A1"
                    className="hover:text-indigo-600"
                  />
                }
                title="Cultivars"
                content={treeDetails["Cultivars"]}
              />
            )}
          {treeDetails["Attracts Birds"] && treeDetails["Attracts Birds"] != 0 && (
            <Popover
              children={
                <FontAwesomeIcon
                  icon={faCrow}
                  size="xl"
                  color="#4B08A1"
                  className="hover:text-indigo-600"
                />
              }
              title="Attracts Birds"
              content={"Yes"}
            />
          )}
          {treeDetails["Bloom Time"] && treeDetails["Bloom Time"] != null && (
            <Popover
              children={
                <FontAwesomeIcon
                  icon={faCalendar}
                  size="xl"
                  color="#4B08A1"
                  className="hover:text-indigo-600"
                />
              }
              title="Bloom Time"
              content={treeDetails["Bloom Time"]}
            />
          )}
          {treeDetails["Color"] && treeDetails["Color"] != null && (
            <Popover
              children={
                <FontAwesomeIcon
                  icon={faPalette}
                  size="xl"
                  color="#4B08A1"
                  className="hover:text-indigo-600"
                />
              }
              title="Color"
              content={treeDetails["Color"]}
            />
          )}
          {treeDetails["Edible"] && treeDetails["Edible"] != 0 && (
            <Popover
              children={
                <FontAwesomeIcon
                  icon={faUtensils}
                  size="xl"
                  color="#4B08A1"
                  className="hover:text-indigo-600"
                />
              }
              title="Edible"
              content={"Yes"}
            />
          )}
          {treeDetails["Medicinal"] && treeDetails["Medicinal"] != 0 && (
            <Popover
              children={
                <FontAwesomeIcon
                  icon={faPrescriptionBottleMedical}
                  size="xl"
                  color="#4B08A1"
                  className="hover:text-indigo-600"
                />
              }
              title="Medicinal"
              content={"Yes"}
            />
          )}
          {treeDetails["Plant Classification"] && treeDetails["Plant Classification"] != null && (
            <Popover
              children={
                <FontAwesomeIcon
                  icon={faCrown}
                  size="xl"
                  color="#4B08A1"
                  className="hover:text-indigo-600"
                />
              }
              title="Plant Classification"
              content={treeDetails["Plant Classification"]}
            />
          )}
          {treeDetails["Additional Information"] &&
            treeDetails["Additional Information"] != null && (
              <Popover
                children={
                  <FontAwesomeIcon
                    icon={faCircleInfo}
                    size="xl"
                    color="#4B08A1"
                    className="hover:text-indigo-600"
                  />
                }
                title="Additional Information"
                paragraph={true}
                content={treeDetails["Additional Information"]}
              />
            )}
          {treeDetails["Other Information"] && treeDetails["Other Information"] != null && (
            <Popover
              children={
                <FontAwesomeIcon
                  icon={faInfo}
                  size="xl"
                  color="#4B08A1"
                  className="hover:text-indigo-600"
                />
              }
              title="Other Information"
              paragraph={true}
              content={treeDetails["Other Information"]}
            />
          )}
          {treeDetails["Audio"] && treeDetails["Audio"] !== null && (
            <button
              onClick={() => {
                const audio = new Audio(treeDetails["Audio"]);
                audio.play();
              }}
              className="hover:text-indigo-600"
            >
              <FontAwesomeIcon icon={faCirclePlay} size="xl" color="#4B08A1" />
            </button>
          )}
        </div>
      </div>
    </>
  );
}
