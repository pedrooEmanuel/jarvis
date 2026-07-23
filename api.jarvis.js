import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  const { text } = req.body;

  // Jarvis pensa
  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {role: "system", content: "Você é JARVIS do Tony Stark. Responda em pt-BR, direto, elegante, chamando de Senhor."},
      {role: "user", content: text}
    ],
  });
  const resposta = completion.choices[0].message.content;

  // OpenAI fala
  const mp3 = await openai.audio.speech.create({
    model: "tts-1",
    voice: "onyx", // onyx = voz grave igual Jarvis
    input: resposta,
  });

  const buffer = Buffer.from(await mp3.arrayBuffer());
  res.setHeader('Content-Type', 'audio/mpeg');
  res.send(buffer);
}
