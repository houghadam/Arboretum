export default function Category({ title, description }) {
  return (
    <div className="flex flex-col text-center">
      {/* <h1 className="bg-gradient-to-r from-wsu-purple-dark from-20% via-indigo-800 via-40% to-indigo-500 to-80% bg-clip-text text-transparent text-2xl font-bold">
        {title}
      </h1> */}
      <h1 className="text-wsu-purple text-2xl font-bold">{title}</h1>
      <p className="mt-4 mb-8 max-w-80 md:max-w-4xl self-center">{description}</p>
    </div>
  );
}
