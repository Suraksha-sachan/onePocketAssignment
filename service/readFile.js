import fs from 'fs';

export async function countWordsInFile(filename) {
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err);
      return;
    }

    const wordCount = data.split(/\s+/).length;
    console.log('Total word count:', wordCount);
  });
}