import { OpenAI } from 'openai';
import { throwIfMissing } from './utils.js';

export default async ({ req, res, log, error }) => {
  try {
    throwIfMissing(process.env, ['OPENAI_API_KEY']);
    throwIfMissing(req.body, ['character', 'question']);

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    var prompt = `You are ${req.body.character}.\nRespond to the following question in first-person: ${req.body.question}\n${req.body.additionalPrompt}`

    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      max_tokens: parseInt(process.env.OPENAI_MAX_TOKENS ?? '512'),
      messages: [{ role: 'user', content: prompt }],
    });
    const completion = response.choices[0].message?.content;
    log(completion);
    return res.json({ ok: true, answer: completion }, 200);
  } catch (err) {
    error(err.message);
    return res.json({ ok: false, error: err.message }, 500);
  }
};

/*
{
  "character": "Bruce Wayne",
  "question": "Are you Batman",
  "additionalPrompt": "Ensure that you don't reveal your Batman alter-ego but you can tip-toe around it."
}
*/