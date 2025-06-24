export default function Headbar() {
  return (
    <section className="bg-emerald-100 w-full font-['Quicksand'] md:mt-8">
      <div className="max-w-6xl mx-auto px-8 py-6 grid grid-cols-2 items-center">
        <h3 className="text-violet-400 text-xl font-normal font-['Great_Vibes']">
          Serena
        </h3>
        <button
          type="button"
          className="px-6 py-2 bg-violet-400 hover:bg-violet-700 text-white text-lg rounded-lg justify-self-end"
        >
          START NOW
        </button>
      </div>
    </section>
  );
}
