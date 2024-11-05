import Card from "./components/Card/Card";
import Category from "./components/Category/Category";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";

function App() {
  return (
    <>
      <div className="flex flex-col items-center h-screen w-screen flex-grow overflow-y-auto bg-neutral-50">
        <Navbar />
        <Search />
        <main className="flex justify-center max-w-screen-2xl">
          <div className="m-8">
            <Category
              title="Flowering Trees of WSU"
              description="In the Landscape Arboretum at Winona State University, we’re concerned about pollinators and wildlife.  Here are some of the flowering and fruiting trees in our collection.  The trees can be seen flowering at various times in the spring and fruiting in the summer and fall.  There is also winter interest with persistent fruit on some of the trees."
            />
            <div className="flex gap-4 justify-center flex-wrap">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
