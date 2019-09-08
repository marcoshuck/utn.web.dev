import * as rl from "readline";

const readline = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('¿Qué piensas de NodeJS?', (answer: string) => {
  console.log('Opinión:', answer);
  readline.close();
});