import plan from "../../assets/images/plan.png";

function Hero() {
  return (
    <div className="relative h-3/6">
      <div className="h-24"></div>
      <div className="flex">
        <div className="relative h-80 w-full lg:w-8/12">
          <div
            className="relative mx-10 h-80 md:h-72 flex flex-col justify-center bg-white space-y-5 font-roboSlab w-10/12 lg:w-9/12
                    border-2 border-black  z-50"
          >
            <div className="text-4xl md:text-5xl mx-5">
              <h1>Quicker way to make Lesson Plans.</h1>
              <h1>So you can focus on more vital tasks.</h1>
            </div>
            <p className="text-md font-bold tracking-wide text-purple-600 mx-5">
              Use AI generation supported by OpenAI
            </p>
          </div>
          <div
            className={`h-80 md:h-72 absolute top-2 left-2 mx-10 bg-black w-10/12 lg:w-9/12 z-0`}
          ></div>
        </div>
        <div className="hidden lg:block w-fit">
          <img src={plan} alt="planning" className="w-72" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
