export function TrainingHeader() {
  return (
    <section className="text-center bg-white">
      <div className="h-52 md:h-72 relative overflow-hidden">
        <div className="absolute min-h-24 h-32 w-full bg-brand-green-extralight object-cover bottom-0 left-0 right-0">
          <div className="w-108 md:w-520 h-108 md:h-520 rounded-full bg-white/5 p-10 md:p-28 absolute -top-3/4 md:-top-[460%] -left-2/3 md:-left-[85%]">
            <div className="w-full h-full bg-white/10 p-10 md:p-28 rounded-full">
              <div className="w-full h-full bg-white/15 rounded-full"></div>
            </div>
          </div>

          <div className="w-108 md:w-520 h-108 md:h-520 rounded-full bg-white/5 p-10 md:p-28 absolute -top-3/4 md:-top-[460%] -right-2/3 md:-right-[85%]">
            <div className="w-full h-full bg-white/10 p-10 md:p-28 rounded-full">
              <div className="w-full h-full bg-white/15 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-fit py-8 md:py-16 px-7 md:px-10 flex flex-col gap-2.5">
        <h2 className="text-2xl md:text-5xl font-black">
          Our Training Locations
        </h2>
        <p className="text-xs md:text-base font-light max-w-full md:max-w-xl mx-auto">
          Join our professional development programs at premier locations across
          Africa and beyond{" "}
        </p>
      </div>
    </section>
  );
}
