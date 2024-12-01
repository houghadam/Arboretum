import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function Search({ categories, setEntities, setTitle, setSummary }) {
  const [theme, setTheme] = useState([]);

  const selectOptions = categories?.length
    ? categories.map(({ themeId, themeName }) => (
        <option key={themeId} value={themeId}>
          {themeName}
        </option>
      ))
    : null;

  useEffect(() => {
    const fetchEntityList = async () => {
      if (theme.length) {
        try {
          const response = await fetch(`http://localhost:8000/api/themes/${theme}`, {
            method: "GET",
          });
          const data = await response.json();
          if (data && Array.isArray(data)) {
            setEntities(data);
          } else {
            console.error("No data available for selected theme:", data);
          }
        } catch (error) {
          console.error("Error fetching theme data:", error);
        }
      }
    };
    const fetchThemeInfo = async () => {
      if (theme.length) {
        try {
          const response = await fetch(`http://localhost:8000/api/summary/${theme}`, {
            method: "GET",
          });
          const data = await response.json();
          if (data) {
            setTitle(data["themeName"]);
            setSummary(data["description"]);
          } else {
            console.error("No summary data available:", data);
          }
        } catch (error) {
          console.error("Error fetching summary data:", error);
        }
      }
    };
    fetchThemeInfo();
    fetchEntityList();
  }, [theme]);
  const handleSelectionChange = (event) => {
    setTheme(() => [event.target.value]);
  };
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
            onChange={handleSelectionChange}
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
