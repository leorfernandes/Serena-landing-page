export default function Headbar() {
  return (
    <section className="bg-emerald-100 w-full font-['Quicksand'] md:mt-8 sticky top-0 z-50 cursor-default shadow-xl">
      <div className="max-w-6xl mx-auto px-8 py-2 grid grid-cols-2 items-center">
        <h3 className="text-violet-400 hover:text-violet-700 text-5xl font-normal font-['Great_Vibes'] transition-colors duration-500 mt-2 z-10">
          Serena
        </h3>
        <button
          type="button"
          className="
              px-6 py-2
              bg-violet-400 hover:bg-violet-700
              text-white text-lg rounded-full justify-self-end
              transition-colors duration-500
              relative
              overflow-hidden
            "
        >
          <div className="absolute left-0 top-0 w-full h-1/2 bg-gradient-to-b from-violet-200 via-transparent to-transparent"></div>
          START NOW
        </button>
      </div>
    </section>
  );
}
