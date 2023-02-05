import React, { useState } from "react";
import cube from "../../assets/loader/cube.gif";

const initialValues = {
  subject: "",
  topic: "",
  duration: "50 minutes",
  grade: "Grade 10 (students aged 15 to 16)",
  activities: "",
};

function Planner() {
  const [values, setValues] = useState(initialValues);

  const [loader, setLoader] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
    e.preventDefault();
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    if (
      values.subject.length === 0 ||
      values.topic.length === 0 ||
      values.grade.length === 0 ||
      values.duration.length === 0 ||
      values.activities.length === 0
    ) {
      alert("Kindly fill all the fields");
    } else {
      setLoader(true);
    }

    e.preventDefault();
    console.log(values);
  };

  return (
    <div className="w-full h-fit border-2 border-black mx-auto max-w-4xl mt-20">
      <div id="height" className="mx-16  flex flex-col items-center">
        <h1 className="text-5xl font-roboSlab my-10">Lesson Planner</h1>
        {loader ? (
          <div className="mb-10">
            <img src={cube} alt="loading animation" className="w-72 -mt-10" />
            <div className="flex flex-col items-center -mt-12">
              <p>Generating your lesson plan</p>
              <p>This might take few minutes.</p>
              <p>(depends on intricacy of details)</p>
            </div>
          </div>
        ) : (
          <form className="flex flex-col items-center">
            <div className="flex flex-col items-center mb-4 space-y-2 w-full">
              <label className="font-roboMono text-lg">
                Subject<sup className="text-red-500">*</sup>
              </label>
              <input
                type="text"
                name="subject"
                value={values.subject}
                onChange={handleChange}
                maxLength={20}
                placeholder="e.g. Biology, Mathematics"
                className="w-full p-5 md:w-10/12 h-8 border-2 text-center border-black placeholder:text-center"
              />
            </div>
            <div className="flex flex-col items-center my-4 space-y-2 w-full">
              <label className="font-roboMono text-lg">
                Specify the topic and learnings
                <sup className="text-red-500">*</sup>
              </label>
              <input
                type="text"
                name="topic"
                value={values.topic}
                onChange={handleChange}
                maxLength={50}
                placeholder="e.g. Plant propagation, Probability"
                className="w-full p-5 md:w-10/12 text-center placeholder:text-center h-8 border-2 border-black"
              />
            </div>
            <div className="flex flex-col items-center my-4 space-y-2 w-full">
              <label className="font-roboMono text-lg">
                Select grade of students<sup className="text-red-500">*</sup>
              </label>
              <select
                name="grade"
                value={values.grade}
                onChange={handleChange}
                className="h-8 border-2 border-black"
              >
                <option value="Grade 1 (students aged 6 to 7)">Grade 1</option>
                <option value="Grade 2 (students aged 7 to 8)">Grade 2</option>
                <option value="Grade 3 (students aged 8 to 9)">Grade 3</option>
                <option value="Grade 4 (students aged 9 to 10)">Grade 4</option>
                <option value="Grade 5 (students aged 10 to 11)">
                  Grade 5
                </option>
                <option value="Grade 6 (students aged 11 to 12)">
                  Grade 6
                </option>
                <option value="Grade 7 (students aged 12 to 13)">
                  Grade 7
                </option>
                <option value="Grade 8 (students aged 13 to 14)">
                  Grade 8
                </option>
                <option value="Grade 9 (students aged 14 to 15)">
                  Grade 9
                </option>
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
            <div className="flex flex-col items-center my-4 space-y-2 w-full">
              <label className="font-roboMono text-lg">
                Duration of lesson<sup className="text-red-500">*</sup>
              </label>
              <select
                name="duration"
                value={values.duration}
                onChange={handleChange}
                className="h-8 border-2 border-black"
              >
                <option value="15 minutes">15 min</option>
                <option value="30 minutes">30 min</option>
                <option value="45 minutes">45 min</option>
                <option value="50 minutes">50 min</option>
                <option value="60 minutes">60 min</option>
                <option value="90 minutes">90 min</option>
                <option value="120 minutes">120 min</option>
              </select>
            </div>
            <div className="flex flex-col items-center my-4 space-y-2 w-full">
              <label className="font-roboMono text-lg text-center md:w-11/12">
                Ideas/activities you have planned.
                <sup className="text-red-500">*</sup>
                <p className="text-sm">
                  (add atleast 2 for better results. more ideas = better
                  results)
                </p>
              </label>
              <textarea
                maxLength={280}
                name="activities"
                value={values.activities}
                onChange={handleChange}
                placeholder="e.g. 'Begin lecture with a presentation' / 'Students take initiative to explain what they learned to 
              whole class at the end of lecture'"
                className="w-full p-5 h-32 md:w-10/12 text-center border-2 border-black"
              ></textarea>
            </div>
            <div className="mt-5 mb-10 relative hover:scale-125 duration-200">
              <div className="w-28 h-12 bg-black absolute top-2 left-2 -z-10"></div>
              <button
                onClick={handleSubmit}
                className="border-2 border-black h-12 w-28 text-xl font-roboSlab bg-purple-300"
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default Planner;
