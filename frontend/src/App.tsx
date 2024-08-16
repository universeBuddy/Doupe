function App() {
  return (
    <>
      <main className="max-w-2xl mx-auto flex gap-8 px-4">
        <div className="py-8 flex flex-col justify-center">
          <h1 className="text-4xl font-bold uppercase mb-4">
            <span className="text-5xl bg-gradient-to-br from-emerald-500 to-sky-500 bg-clip-text text-transparent">
              {" "}
              URl to Viedo{" "}
            </span>
            <br />

            <span className="bg-gradient-to-br from-emerald-500 to-sky-500 bg-clip-text text-transparent">
              Using of AI
            </span>
          </h1>

          <form className="grid gap-2">
            <input
              className="border-2 rounded-full bg-transparent text-white px-4 py-2 grow"
              type="url"
              placeholder="http://..."
            />
            <button
              className=" rounded-full bg-emerald-500 text-white px-4 py-2 grow uppercase"
              type="submit"
            >
              {" "}
              Create&nbsp;Video
            </button>
          </form>
        </div>
        <div className="py-8">
          <div className="bg-gray-200 w-[240px] h-[360px]  text-gray-500 rounded-2xl p-8">
            Video Here
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
