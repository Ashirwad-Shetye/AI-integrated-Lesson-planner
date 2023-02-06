import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_API_KEY,
});

const openai = new OpenAIApi(configuration);

export const generateResponse = async (values: any) => {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Create a lesson plan for ${values.subject} lecture on the topic of ${values.topic} teaching ${values.learningIntention} to ${values.level} in a ${values.lessonLength} lecture. Include ${values.activities}`,
    temperature: 0,
    max_tokens: 1000,
    top_p: 1,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
    stop: "",
  });
  const resJSON = JSON.stringify(response.data.choices[0].text);
  const parsed = JSON.parse(resJSON);
  console.log(parsed);
  return parsed;
};
