import path from 'path';
import { readFile, writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';

// Path Constants
export const currentDir = path.dirname(fileURLToPath(import.meta.url));

// Types
import type { Result, VariableRecord } from './types/helpers'

// Utils
import { common } from '../utils/index.js';
import { fileURLToPath } from 'url';

export namespace defaults {

  export const VARIABLE_RE = new RegExp("--.+?:.+?;");

  const COLOR_VARIABLE_FILE = 'colors.txt';
  const FONT_VARIABLE_FILE = 'fonts.txt';

  export const defaultRunnerProps: MockupSchemaParser.IRunProps = {
    dist: path.resolve(currentDir, '../schema'),
    pathes: {
      colors: path.resolve(currentDir, `../assets/${COLOR_VARIABLE_FILE}`),
      fonts: path.resolve(currentDir, `../assets/${FONT_VARIABLE_FILE}`)
    }
  }

}

export namespace MockupSchemaParser {

  enum SchemaType {
    colors = 'color-schema',
    fonts = 'font-schema',
  }

  export interface IRunProps {
    dist: string,
    pathes: Record<keyof typeof SchemaType, string>,
  }

  interface ISaveProperties {
    data: object,
    dist: string,
    name: string,
  }

  export async function run({ dist, pathes }: IRunProps) {

    const ErrorStack: Array<Error> = [];

    if (!existsSync(dist)) {
      await mkdir(dist, { recursive: true });
    }

    (Object.keys(pathes) as Array<keyof typeof SchemaType>).forEach(async key => {

      const textData = await readFile(path.resolve(currentDir, pathes[key]), {
        encoding: 'utf-8'
      });

      if (textData.length) ErrorStack.push(Error(`${key} schema is empty, or wrong schema path: ${dist}`))

      save({
        data: parse(textData),
        dist: dist,
        name: SchemaType[key],
      })

    })

    ErrorStack.forEach(e => console.warn(e.message));

  }

  function save({ data, dist, name }: ISaveProperties) {

    const buffer = new Uint8Array(Buffer.from(JSON.stringify(data)));

    writeFile(path.resolve(dist, `${name}.json`), buffer)

  }

  function parse(textData: string) {

    const result: VariableRecord = Object();
    const warnings: Array<Error> = [];

    const separateProperty = (line: string) => {

      const [key, value] = line.split(':');

      if (!key) return Error("can't parse property");
      if (!value) return Error("value is null");

      return {
        key,
        value
      };

    }

    textData.split('\r\n').forEach(line => {

      if (!defaults.VARIABLE_RE.test(line)) return;

      const sepResult = separateProperty(line);

      if (sepResult instanceof Error) return warnings.push(sepResult);

      const [head, ...rest] = sepResult.key.split('--').filter(Boolean);

      if (head) {

        const mutableObject = Object();

        common.createNestedObject(rest, mutableObject, sepResult.value.trim());

        result[head] = Boolean(result[head])
          ? Object.assign(result[head] || result, mutableObject)
          : mutableObject;

      }

    });

    return result;

  }

}