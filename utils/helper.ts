import { TestInfo } from '@playwright/test';

export default class Helper {
  /**
   * Check the status code, comparing it with the expected status code.
   * @param code response status code.
   * @param expCode expected status code.
   */
  compareStatusCode(code: number, expCode: number) {
    if (code !== expCode) {
      throw Error(`Status code not ${expCode}, but ${code}`);
    }
  }

  /**
   *  Compare the expected object with the reference one in full compliance using stringify.
   * @param object1 reference object.
   * @param object2 expected object.
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
   *
   * In the case of an array, the check is done only on the first element, based on the structure of the responses.
   * @param object1 reference object.
   * @param object2 expected object.
   */
  compareObjectsKeys(object1: object, object2: object) {
    const keys1 = Object.keys(object1).sort();
    const keys2 = Object.keys(object2).sort();

    if (keys1.length !== keys2.length) {
      throw Error('\x1b[41m Оbjects keys are not equal.\x1b[0m\n');
    }

    for (let key in keys1) {
      if (keys1[key] === keys2[key]) {
        if (typeof object1[keys1[key]] === 'object' && object1[keys1[key]] !== null) {
          if (Array.isArray(object1[keys1[key]]) && object1[keys1[key]].length > 0 && object2[keys2[key]].length > 0) {
            if (typeof object1[keys1[key]][0] === 'object' && object1[keys1[key]][0] !== null) {
              this.compareObjectsKeys(object1[keys1[key]][0], object2[keys2[key]][0]);
            }
          } else {
            this.compareObjectsKeys(object1[keys1[key]], object2[keys2[key]]);
          }
        }
      } else {
        throw Error(`\x1b[41mОbjects keys are not equal. Мissing key "${keys1[key]}" in second object.\x1b[0m\n`);
      }
    }
  }

  /**
   * This function only for api tests. Compare response with referense data and model.
   * @param object1 reference object.
   * @param object2 expected object.
   * @param testInfo playwright testInfo.
   * @param meta add meta to ref object.
   */
  compareResponseTextWithModel(object1: object, object2: object, testInfo: TestInfo, meta?: boolean) {
    // If reference data is out of date, we do not check it again
    if (testInfo.retry === 0) {
      if (Array.isArray(object1['data'])) {
        for (let key in object1) {
          this.compareResponseText(object1['data'][key], object2['data'][key]);
        }
      } else {
        this.compareResponseText(object1['data'], object2['data']);
      }
    } else {
      console.log(
        `\x1b[41mTest data in test: "${testInfo.titlePath[1]} ${testInfo.titlePath[2]}" maybe is expired.\x1b[0m\n`
      );
    }
    // To reduce reference responses
    if (meta) {
      object1['meta'] = object2['meta'] = {
        fums: '',
        fumsId: '',
        fumsJsInclude: '',
        fumsJs: '',
        fumsNoScript: '',
      };
    }

    this.compareObjectsKeys(object1, object2);
  }
}
