import path from 'path';
import { readFile, writeFile } from 'fs/promises';
import { fileURLToPath } from 'url';

const __filename  = fileURLToPath(import.meta.url);
const __dirname   = path.dirname(__filename);

const FILE_NAME = 'generated-variables.txt';

export type VariableRecord = Record<string, string | object>;

function createNestedObject<T, M = Record<string, T | object>>(
  keys          : Array<string>, 
  mutableObject : Record<string, T | M>, 
  endValue      : T
  ) {

  let ref = mutableObject;

  keys.forEach(key => {

      ref[key] = key === keys[ keys.length - 1 ] ? endValue : Object(); 
      ref      = ref[key] || Object();

  });

}

export default async function getvariableObject() {

  const result: VariableRecord = Object();

  const textData = await readFile(path.resolve(__dirname, `./assets/${ FILE_NAME }`), {
    encoding: 'utf-8'
  });

  if ( textData.length === 0 ) return Error('file is empty or undefined');

  textData.split('\r\n').forEach(line => {

    const [ property, value ] = line.split(':');

    if ( !property || !value ) return;
    
    const [ head, ...rest ] = property.split('--').filter(x => x.length);

    if ( head ) {

      const mutableObject = Object();
  
      createNestedObject(rest, mutableObject, value.trim());
  
      result[ head ] = Boolean(result[ head ])
        ? Object.assign(result[head] || result, mutableObject)
        : mutableObject;

    }


  })

  return result;

}

getvariableObject().then(json => {

  const buffer = new Uint8Array(Buffer.from(JSON.stringify(json)));

  writeFile(path.resolve(__dirname, 'style-schema.json'), buffer)

})
