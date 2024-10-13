export default class Helper {
  /**
   * Check the status code, comparing it with the expected status code.
   * @param code - response status code.
   * @param expCode - expected status code.
   */
  compareStatusCode(code: number, expCode: number) {
    if (code !== expCode) {
      throw Error(`Status code not ${expCode}, but ${code}`);
    }
  }

  /**
   *  Compare the expected object with the reference one in full compliance using stringify.
   * @param object1 reference object.
   * @param object2 expected object
   */
  compareResponseText(object1: object | string, object2: object | string) {
    object1 = JSON.stringify(object1);
    object2 = JSON.stringify(object2);

    if (object1 !== object2) {
      throw Error(
        `\x1b[41m Object text: \x1b[0m\n
        ${object1}\n
        \x1b[41m does not match with expected: \x1b[0m\n
        ${object2}`
      );
    }
  }

  /**
   * Compare the keys of the expected object with the reference one.
   * @param object1 reference object.
   * @param object2 expected object
   */
  compareObjectsKeys(object1: object, object2: object) {
    const keys1 = Object.keys(object1).sort();
    const keys2 = Object.keys(object2).sort();

    if (keys1.length !== keys2.length) {
      throw Error('Оbjects keys are not equal.');
    }

    for (let key in keys1) {
      if (keys1[key] === keys2[key]) {
        if (typeof object1[keys1[key]] === 'object' && object1[keys1[key]] !== null) {
          if (Array.isArray(object1[keys1[key]]) && object1[keys1[key]].length > 0 && object2[keys2[key]].length > 0) {
            if (typeof object1[keys1[key]][0] === 'object' && object1[keys1[key]][i] !== null) {
              this.compareObjectsKeys(object1[keys1[key]][0], object2[keys2[key]][0]);
            }
          } else {
            this.compareObjectsKeys(object1[keys1[key]], object2[keys2[key]]);
          }
        }
      } else {
        throw Error(`Оbjects keys are not equal. Мissing key "${keys1[key]}" in second object `);
      }
    }
  }
}
