export default class Helper {
  compareStatusCode(code: number, expCode: number) {
    if (code !== expCode) {
      throw Error(`Status code not ${expCode}, but ${code}`);
    }
  }

  async compareResponseText(response: string, expResponse: object) {
    if (response !== JSON.stringify(expResponse)) {
      throw Error(`Response text: ${expResponse} does not match with expected:\n${response}`);
    }
  }
}
