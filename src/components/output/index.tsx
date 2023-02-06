import cube from "../../assets/loader/cube.gif";

function Output({
  resLoader,
  setResLoader,
  data,
  setRenderOutput,
  setResponses,
}: any) {
  if (data === "") {
    setResLoader(true);
  } else {
    setResLoader(false);
  }

  return (
    <div className=" w-10/12">
      {resLoader ? (
        <div className="mb-10 flex flex-col items-center justify-center">
          <img src={cube} alt="loading animation" className="w-72 -mt-10" />
          <div className="flex flex-col items-center -mt-12 font-roboMono">
            <p>Generating your lesson plan</p>
            <p>This might take few minutes.</p>
            <p>(depends on intricacy of details)</p>
          </div>
        </div>
      ) : (
        <div className="mb-10 flex flex-col items-center justify-center">
          <div className="mb-10 font-roboSlab leading-8">{data}</div>
          <div className="mt-5 mb-10 relative hover:scale-125 duration-200">
            <div className="w-28 h-12 bg-black absolute top-2 left-2 -z-10"></div>
            <button
              onClick={() => {
                setRenderOutput(false);
                setResponses("");
              }}
              className="border-2 border-black h-12 w-28 text-xl font-roboSlab bg-purple-300"
            >
              Go back
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Output;
