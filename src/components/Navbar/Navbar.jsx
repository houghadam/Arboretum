export default function Navbar() {
  return (
    <>
      <nav className="flex justify-between items-center w-screen bg-wsu-purple text-white px-12 py-4">
        <div className="flex items-end gap-6">
          <img src="public/wsu.svg" alt="WSU Logo" className="w-12 h-12" />
          <h1 className="font-semibold text-xl">WSU Arboretum</h1>
        </div>
        <div className="flex gap-8">
          <a href="" className="font-semibold">
            Trees and Plants
          </a>
          <a href="">Tour</a>
        </div>
      </nav>
    </>
  );
}
