import type { VariableRecord } from '../source/types/helpers';

export namespace common {
  export function createNestedObject<T, M = VariableRecord<T>>(
    keys: Array<string>,
    mutableObject: VariableRecord<T | M>,
    endValue: T
  ) {

    let ref = mutableObject;

    keys.forEach(key => {

      ref[key] = key === keys[keys.length - 1] ? endValue : Object();
      ref = ref[key] || Object();

    });

  }
}