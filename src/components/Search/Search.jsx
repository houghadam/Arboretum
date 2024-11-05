import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Search() {
  const treesAndPlants = [];

  const categories = [
    { themeId: 1, themeName: "Tree Tour" },
    { themeId: 3, themeName: "Legume Family" },
    { themeId: 4, themeName: "Grass Family" },
    { themeId: 5, themeName: "Edible" },
    { themeId: 6, themeName: "Medicinal" },
    { themeId: 18, themeName: "Shakespeare Tree Tour" },
    { themeId: 19, themeName: "Butterflies" },
    { themeId: 20, themeName: "Birds" },
    { themeId: 24, themeName: "Flowering Trees of WSU" },
    { themeId: 26, themeName: "Cultivar Garden" },
    { themeId: 27, themeName: "Bioswale #3" },
    { themeId: 28, themeName: "Bioswale #1 & #2" },
    { themeId: 29, themeName: "Bioswale #4" },
    { themeId: 30, themeName: "Bioswale #5" },
    { themeId: 34, themeName: "Younger Courtyard" },
  ];
  const selectOptions = categories.map(({ themeId, themeName }) => (
    <option key={themeId} value={themeName}>
      {themeName}
    </option>
  ));
  return (
    <>
      <div className="flex flex-col md:flex-row bg-wsu-purple w-3/4 md:w-full mt-16 justify-center rounded-lg py-4 md:max-w-screen-lg">
        <form className="flex flex-col md:flex-row gap-4 relative">
          <span className="absolute inset-y-0 right-1/2 mr-6 flex items-center">
            <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" flip="horizontal" color="#4B08A1" />
          </span>
          <input
            type="text"
            className="border p-2 rounded w-3/4 self-center md:w-80 font-medium ring-yellow-400"
            placeholder="Search"
          ></input>
          <select
            className="border p-2 rounded w-3/4 self-center md:w-80 h-10 ring-yellow-400"
            defaultValue=""
            name="category"
          >
            <option value="" disabled hidden>
              Category
            </option>
            {selectOptions}
          </select>
        </form>
      </div>
    </>
  );
}
