const fs = require('fs');
const readline = require('readline');

async function run() {
  const filePath = 'C:/Users/luiss/.gemini/antigravity/brain/973b16dd-7f83-4950-a1c7-06e5a20dae0d/.system_generated/logs/transcript_full.jsonl';
  const fileStream = fs.createReadStream(filePath);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let targetPrompt = null;
  for await (const line of rl) {
    if (!line.trim()) continue;
    try {
      const obj = JSON.parse(line);
      if (obj.type === 'USER_INPUT' && typeof obj.content === 'string' && obj.content.includes('Estamos rediseñando eidosrender.es')) {
        targetPrompt = obj.content;
      }
    } catch (e) {}
  }

  if (targetPrompt) {
    fs.writeFileSync('scratch/prompt_10.txt', targetPrompt);
    console.log('Successfully wrote scratch/prompt_10.txt, length:', targetPrompt.length);
  } else {
    console.log('Not found in transcript_full');
  }
}

run();
