import './env.js';
import { deepseek } from '@ai-sdk/deepseek';
import { generateText } from 'ai';


const { text } = await generateText({
  model: deepseek('deepseek-chat'),
  prompt: '你叫什么名字？',
});

console.log(text);