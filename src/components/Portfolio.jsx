import Food from "../assets/food-1.jpg";

export default function Portfolio() {
  return (
    <div className="pt-10 md:pt-44 w-full">
      <div name="Portfolios">
        <div className="p-4 bg-gradient-to-b from-orange-300 to-orange-400 text-white pb-24 md:p-8">
          <h4 className="font-vibes text-4xl pb-2 pt-7">Portfolio</h4>
          <p className="font-kurale mb-3">
            Check out some of my work right here..
          </p>
          <div className="flex flex-col gap-10 px-5 pt-5 md:flex-row md:pb-16">
            {/* first image. */}
            <div className="shadow-md shadow-gray-1000 pb-5 rounded-lg hover:scale-105 duration-200">
              <img src={Food} alt="my profile" className="rounded lg" />
              <div
                style={{
                  fontSize: "18px",
                }}
                className="font-kurale flex flex-row justify-between pt-6 px-8 items-center"
              >
                <button className="underline md:mt-0">Demo</button>
                <button className="underline md:mt-0">Code</button>
              </div>
            </div>

            {/* second image. */}
            <div className="shadow-md shadow-gray-1000 pb-5 rounded-lg hover:scale-105 duration-200">
              <img src={Food} alt="my profile" className="rounded lg" />
              <div
                style={{
                  fontSize: "18px",
                }}
                className="font-kurale flex flex-row justify-between pt-6 px-8 items-center"
              >
                <button className="underline md:mt-0">Demo</button>
                <button className="underline md:mt-0">Code</button>
              </div>
            </div>

            {/* third image. */}
            <div className="shadow-md shadow-gray-1000 pb-5 rounded-lg hover:scale-105 duration-200">
              <img src={Food} alt="my profile" className="rounded lg" />
              <div
                style={{
                  fontSize: "18px",
                }}
                className="font-kurale flex flex-row justify-between pt-6 px-8 items-center"
              >
                <button className="underline md:mt-0">Demo</button>
                <button className="underline md:mt-0">Code</button>
              </div>
            </div>

            {/* fourth image. */}
            <div className="shadow-md shadow-gray-1000 pb-5 rounded-lg hover:scale-105 duration-200">
              <img src={Food} alt="my profile" className="rounded lg" />
              <div
                style={{
                  fontSize: "18px",
                }}
                className="font-kurale flex flex-row justify-between pt-6 px-8 items-center"
              >
                <button className="underline md:mt-0">Demo</button>
                <button className="underline md:mt-0">Code</button>
              </div>
            </div>

            {/* fifth image. */}
            <div className="shadow-md shadow-gray-1000 pb-5 rounded-lg hover:scale-105 duration-200">
              <img src={Food} alt="my profile" className="rounded lg" />
              <div
                style={{
                  fontSize: "18px",
                }}
                className="font-kurale flex flex-row justify-between pt-6 px-8 items-center"
              >
                <button className="underline md:mt-0">Demo</button>
                <button className="underline md:mt-0">Code</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
