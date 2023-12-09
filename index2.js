


// read the number of char
const fs = require('fs');
const { readFile } = require('fs/promises');


// Specify the path to your config.json file
const configFilePath = './config.json';

// Read the contents of the config.json file

async function readThisFile(filePath) {
  try {
    const data = await readFile(filePath);

    let content =data.toString();
   // console.log(data.toString());


    let totalCharacters = 0;
    for (let i = 0; i < content.length; i++) {
      totalCharacters += content[i].length;
    }
  

    if(totalCharacters ===0){
      console.log("This is empty file", totalCharacters);
    }
    console.log(`${filePath} has ${totalCharacters} words.`);

   // console.log('${filePath}', totalCharacters);

    
  } catch (error) {
    console.error(`Got an error trying to read the file: {error.message}`);
 }
}







fs.readFile(configFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the config file:', err);
    return;
  }

  try {
    // Parse the JSON data
    const configObject = JSON.parse(data);

  //  console.log(configObject);
  //  console.log(data);
  
    // Now you can use the configObject as a regular JavaScript object
   // console.log('Files:', configObject.files);

  /// console.log( configObject.files[1]);

  for (let i = 0; i < configObject.files.length; i++) {
    //console.log(configObject.files[i]);
    readThisFile(configObject.files[i]);

    
  }


  } catch (parseError) {
    console.error('Error parsing JSON:', parseError);
  }
});