import { useEffect, useState } from "react";
import Card from "./components/Card/Card";
import Category from "./components/Category/Category";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";

/* DONE: Create information button for every possible attribute. 
      Map available attributes to correct button. 
      Only display buttons which have attributes for specific plant/tree.

  DONE: When common name is unavailable, display scientific name as common name

  TODO: Standardize image height/width (aspect ratio)

  TODO: Search function -- autocomplete based on common or scientific name.
      returns entity id to use for api query

  TODO: Add audio and additional images from resources
*/

function App() {
  const [treeData, setTreeData] = useState([]);
  const [entities, setEntities] = useState([]);
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchEntityDetails = async () => {
      if (entities.length) {
        try {
          const response = await fetch(`http://localhost:8000/api/entities/${entities}`, {
            method: "GET",
          });
          const data = await response.json();
          if (data && Array.isArray(data)) {
            setTreeData(data);
            console.log(data);
          } else {
            console.error("No entity data available:", data);
          }
        } catch (error) {
          console.error("Error fetching entity data:", error);
        }
      }
    };
    fetchEntityDetails();
  }, [entities]);

  useEffect(() => {
    const fetchThemesList = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/theme/themelist", {
          method: "GET",
        });
        const data = await response.json();
        if (data && Array.isArray(data)) {
          setCategories(data);
        } else {
          console.error("No theme list available:", data);
        }
      } catch (error) {
        console.error("Error fetching theme list:", error);
      }
    };
    fetchThemesList();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center h-screen w-screen flex-grow overflow-y-auto overflow-x-hidden bg-neutral-50">
        <Navbar />
        <Search
          setEntities={setEntities}
          setTitle={setTitle}
          setSummary={setSummary}
          categories={categories}
        />
        <main className="flex justify-center max-w-screen-2xl">
          <div className="m-8">
            <Category title={title} description={summary} />
            <div className="flex gap-4 justify-center flex-wrap">
              {Array.isArray(treeData) && treeData.length ? (
                treeData.map((treeDetails, treeIndex) => (
                  <Card key={treeIndex} treeDetails={treeDetails} />
                ))
              ) : (
                <>
                  <h3 className="flex self-center font-semibold text-xl text-wsu-purple text-center my-6 max-w-2xl">
                    Select a category from the list or search for a specific tree
                  </h3>
                </>
              )}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
