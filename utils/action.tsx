'use server';

import OpenAI from 'openai';
import Chat = OpenAI.Chat;

export type ChatMessage = {
  role: 'user' | 'assistant';
  content: string;
};

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
export const generateChatResponse = async (chatMessages: Array<ChatMessage>) => {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      temperature: 0,
      messages: [
        {
          role: 'system',
          content: 'You are a helpful assistant.',
        },
        ...chatMessages,
      ],
    });
    return response.choices[0].message;
  } catch (error) {
    return null;
  }
};
