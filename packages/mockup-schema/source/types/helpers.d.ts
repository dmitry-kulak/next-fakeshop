export type VariableRecord<T = string> = Record<string, T | object>;

export type Result<T, E = Error> = T | E;