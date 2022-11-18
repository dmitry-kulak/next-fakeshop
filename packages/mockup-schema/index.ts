import path from 'path';
import runner, { type IRunProps } from './source/main';

const FILE_NAME = 'generated-variables.txt';

const defaultRunnerProps: IRunProps = {
  dist              : path.resolve(__dirname, './schema'),
  relativeFilePath  : path.resolve(__dirname, `./assets/${ FILE_NAME }`)
}

runner.run(defaultRunnerProps);