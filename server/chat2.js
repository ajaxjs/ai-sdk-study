import './env.js';
import { deepseek } from '@ai-sdk/deepseek';
import { streamText } from 'ai';

const result = streamText({
  model: deepseek('deepseek-reasoner'),
  prompt: '你是谁?',
});

for await (const part of result.fullStream) {
  if (part.type === 'reasoning-delta') {
    console.log('+思考:', part.text);
  } else if (part.type === 'text-delta') {
    console.log('+回答:', part.text);
  } else if (part.type === 'reasoning-end') {
    console.log('+思考结束');
  } else if (part.type === 'text-end') {
    console.log('+回答结束');
  } else if (part.type === 'finish-step') {
    console.log('+完成(finish-step)');
  } else if (part.type === 'finish') {
    console.log('+彻底完成(finish)', part.type);
  } else {
    console.log('----', part);
  }
}