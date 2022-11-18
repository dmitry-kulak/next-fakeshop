import path from 'path';
import { readFile, writeFile } from 'fs/promises';
import { fileURLToPath } from 'url';

const __filename  = fileURLToPath(import.meta.url);
const __dirname   = path.dirname(__filename);

export interface IRunProps {
  dist: string,
  relativeFilePath: string,
}

export default class MockupSchemaParser {

  public static async run({ dist, relativeFilePath }: IRunProps) {
    
    const textData = await readFile(path.resolve(__dirname, relativeFilePath), {
      encoding: 'utf-8'
    });

    if ( textData.length === 0 ) throw Error('file is empty or undefined');

    MockupSchemaParser.save(MockupSchemaParser.parse(textData), dist)

  }

  private static save(json: object, dist: string) {

    const buffer = new Uint8Array(Buffer.from(JSON.stringify(json)));

    writeFile(path.resolve(dist, 'style-schema.json'), buffer)

  }

  private static parse(textData: string) {

    const result: VariableRecord = Object();

    textData.split('\r\n').forEach(line => {

      const [ property, value ] = line.split(':');

      if ( !property || !value ) return;
      
      const [ head, ...rest ] = property.split('--').filter(x => x.length);

      if ( head ) {

        const mutableObject = Object();
    
        MockupSchemaParser.createNestedObject(rest, mutableObject, value.trim());
    
        result[ head ] = Boolean(result[ head ])
          ? Object.assign(result[head] || result, mutableObject)
          : mutableObject;

      }

    });

    return result;

  }

  private static createNestedObject<T, M = VariableRecord<T>>(
    keys          : Array<string>, 
    mutableObject : VariableRecord<T | M>, 
    endValue      : T
  ) {
  
    let ref = mutableObject;
  
    keys.forEach(key => {
  
        ref[key] = key === keys[ keys.length - 1 ] ? endValue : Object(); 
        ref      = ref[key] || Object();
  
    });
  
  }

}