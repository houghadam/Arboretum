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

export default function Card() {
  return (
    <>
      <div className="flex flex-col md:flex-row border shadow-md rounded-lg bg-white p-8 md:w-5/12 gap-2">
        <div className="flex flex-col md:w-1/2">
          <h2 className="font-black text-2xl">American Elm</h2>
          <h3 className="font-semlbold text-lg -mt-1">Ulmus americana</h3>
          <p className="text-sm overflow-y-scroll h-52 mt-2">
            American Elm was one of the most common trees in our hardwood forests, but also present
            in just about very corner of the state as well. It formed a beautiful large, vase shaped
            crown and it was easy to dig, transplant and grow. For those reasons our forefathers
            lined our city streets with tens of thousands of them and our streets were made shady,
            cool and beautiful. Unfortunately imported European logs brought in invasive European
            elm bark beetles and, more importantly, the highly invasive and destructive Dutch Elm
            Disease (DED). The first diagnosed Minnesota case was in St. Paul in 1961 and it was
            soon found at outstate locations, with evidence that once more, human movement of
            diseased wood was the cause. The rest is history with tens of thousands of forest and
            urban trees lost across the state. Disease resistant cultivars have been developed and
            brought to market that have proven worth planting. WSU has a number of these cultivars
            on campus including: Patriot, New Horizon, and St. Croix. Research on DED resistance is
            on-going.
          </p>
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
              content="Tall graceful vase-like canopy made this the quintessential urban shade tree before Dutch Elm Disease devasted the population."
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
              content="Leaves are simple and alternate, somewhat variable in shape but generally oblong-elliptic, widest near or above the middle, 3 to 5¾ inches long, 1½ to 3½ inches wide, abruptly tapered to a sharply pointed tip, asymmetrical at the base, on a short, smooth to hairy stalk. Edges are coarsely double toothed, veins are straight and not forking at the tip. Upper surface is dark green and smooth to slightly rough; the lower surface is light green, hairless to softly hairy, typically with tufts of hairs in the vein axils."
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
              content="60 - 125 ft"
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
              content="Winged samara, light green, oval, turning tan when mature; seed portion in the center surrounded by the wing; outer end of each wing deeply notched; seeds hang in clusters, ripen in spring, and are widely scattered by the wind."
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
              content="2 - 7"
            />
          </div>
        </div>
        <div className="flex justify-center md:justify-end items-center md:w-1/2 mt-6 md:mt-0">
          <img
            src="https://w3.winona.edu/Locations/Resources/ElmPatriot.jpg"
            alt="American Elm"
            className="h-80 w-auto rounded-lg shadow-md border"
          />
        </div>
      </div>
    </>
  );
}
