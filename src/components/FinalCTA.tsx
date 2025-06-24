export default function FinalCTA() {
  return (
    <section className="bg-white px-6 py-20 flex flex-col-reverse md:flex-row items-center justify-between gap-10 max-w-6xl mx-auto font-['Quicksand']">
      <div className="text-gray-800 text-center md:text-left max-w-xl">
        <h2 className="text-4xl md:text-6xl font-bold leading-tight">
          Take your first
          <br />
          mindful breath
          <br />
          with Serena today
        </h2>
        <button
          type="button"
          className="mt-8 px-6 py-3 bg-violet-400 hover:bg-violet-700 text-white text-lg rounded-lg cursor-pointer focus:outline-none focus:ring-4 focus:ring-violet-300"
        >
          START NOW
        </button>
      </div>
    </section>
  );
}
