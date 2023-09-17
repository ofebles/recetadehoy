import OpenAI from 'openai';
const apiKey = import.meta.env.VITE_PUBLIC_OPENAI_API_KEY;

const openai = new OpenAI({
	apiKey: apiKey
});

export async function load() {
	const response = await openai.chat.completions.create({
		messages: [{ role: 'user', content: 'quiero comprar una casa' }],
		model: 'gpt-3.5-turbo'
	});
	return { content: response.choices[0].message.content };
}
