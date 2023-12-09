const { readFile } = require('fs/promises');
const wordCount = require('word-count');

async function countWords(filePath) {
  try {
 

    const data = await readFile(filePath, 'utf8');
    const numberOfWords = wordCount(data);

    console.log(`File: ${filePath}, Word Count: ${numberOfWords}`);

  } catch (error) {
    if (error.code === 'ENOENT') {
      console.error(`File ${filePath} does not exist.`);
    } else {
      console.error(`Error reading or counting words in file ${filePath}:`, error);
    }
  }
}

// Read json object
(async () => {
  const configFilePath = './config.json';

  try {
    const data = await readFile(configFilePath, 'utf8');
    // convert json to  JavaScript object
    const configObject = JSON.parse(data);

    // Check if the 'files' property exists in the configObject 
    if (configObject.files && Array.isArray(configObject.files)) {
      for (const file of configObject.files) {
        await countWords(file);


        
      }
    } else {
      console.error('The "files" property is missing or not an array in the configObject.');
    }

  } catch (parseError) {
    console.error('Error parsing JSON:', parseError);
  }
})();
