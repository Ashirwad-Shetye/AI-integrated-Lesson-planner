import React from "react";

function Planner() {
  return (
    <div className="w-full border-2 border-black mx-auto max-w-5xl mt-20">
      <div className="mx-16 flex flex-col items-center">
        <h1 className="text-5xl font-roboSlab my-10">Planner</h1>
        <form className="flex flex-col items-center">
          <div className="flex flex-col items-center mb-4 space-y-2 w-full">
            <label className="font-roboMono text-lg">Subject</label>
            <input
              type="text"
              maxLength={56}
              className="w-8/12 h-8 border-2 border-black"
            />
          </div>
          <div className="flex flex-col items-center my-4 space-y-2">
            <label className="font-roboMono text-lg">
              Specify the topic and learnings
            </label>
            <input
              type="text"
              maxLength={56}
              className="w-8/12 h-8 border-2 border-black"
            />
          </div>
          <div className="flex flex-col items-center my-4 space-y-2">
            <label className="font-roboMono text-lg">
              Select grade of students
            </label>
            <select name="grade" className="h-8 border-2 border-black">
              <option value="Grade 1 (students aged 6 to 7)">Grade 1</option>
              <option value="Grade 2 (students aged 7 to 8)">Grade 2</option>
              <option value="Grade 3 (students aged 8 to 9)">Grade 3</option>
              <option value="Grade 4 (students aged 9 to 10)">Grade 4</option>
              <option value="Grade 5 (students aged 10 to 11)">Grade 5</option>
              <option value="Grade 6 (students aged 11 to 12)">Grade 6</option>
              <option value="Grade 7 (students aged 12 to 13)">Grade 7</option>
              <option value="Grade 8 (students aged 13 to 14)">Grade 8</option>
              <option value="Grade 9 (students aged 14 to 15)">Grade 9</option>
              <option value="Grade 10 (students aged 15 to 16)">
                Grade 10
              </option>
              <option value="Grade 10 (students aged 16 to 17)">
                Grade 11
              </option>
              <option value="Grade 10 (students aged 17 to 18)">
                Grade 12
              </option>
            </select>
          </div>
          <div className="flex flex-col items-center my-4 space-y-2">
            <label className="font-roboMono text-lg">Duration of lesson</label>
            <select name="duration" className="h-8 border-2 border-black">
              <option value="15 min">15 min</option>
              <option value="30 min">30 min</option>
              <option value="45 min">45 min</option>
              <option value="60 min">60 min</option>
              <option value="90 min">90 min</option>
              <option value="120 min">120 min</option>
            </select>
          </div>
          <div className="flex flex-col items-center my-4 space-y-2">
            <label className="font-roboMono text-lg text-center md:w-11/12">
              Ideas/activities you have planned.
              <p className="text-sm">
                (add atleast 2 for better results. more ideas = better results)
              </p>
            </label>
            <textarea
              name="activities"
              id=""
              className="w-8/12 border-2 border-black"
            ></textarea>
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Planner;
