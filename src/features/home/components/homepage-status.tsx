export function HomePageStat() {
  return (
    <div className="bg-[#E8E8E8] p-12 font-poppins">
              {/* Top Stats Section */}
      <section className="max-w-7xl mx-auto mt-10">
        <div className="bg-[#064C3C] text-white rounded-2xl p-4 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
            {/* Left Content */}
            <div className="md:col-span-1 border-2 border-white p-4 rounded-lg">
              <h2 className="text-sm font-semibold uppercase">#1</h2>
              <h1 className="text-xl md:text-2xl font-bold mt-2 leading-snug">
                Leading Capacity <br /> Development Partner in Africa
              </h1>
              <p className="text-gray-200 mt-2 text-sm">
                We don’t just talk capacity — we deliver results.
              </p>
            </div>

            {/* Stats */}
            <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-4 text-center items-start font-poppins divide-x divide-[0.5px]">
            <div className="px-4">
              <p className="text-3xl font-bold">15+</p>
              <p className="text-sm text-white">Government Partners</p>
            </div>
            <div className="px-4">
              <p className="text-3xl font-bold">8.0+</p>
              <p className="text-sm text-white">Countries Reached</p>
            </div>
            <div className="px-4">
              <p className="text-3xl font-bold">100+</p>
              <p className="text-sm text-white">Professional Courses</p>
            </div>
            <div className="px-4">
              <p className="text-3xl font-bold">5K+</p>
              <p className="text-sm text-white">Trained Professionals</p>
            </div>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
}