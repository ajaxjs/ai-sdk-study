import './env.js';
import { qwen } from 'qwen-ai-provider';
import { generateText } from 'ai';

console.log('-DASHSCOPE_API_KEY:',process.env.DASHSCOPE_API_KEY);


const { text } = await generateText({
    model: qwen('qwen-plus'),
    prompt: 'Why is the sky blue?',
});

console.log(text);