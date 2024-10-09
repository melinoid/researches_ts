export default class Helper {
  compareStatusCode(code: number, expCode: number) {
    if (code !== expCode) {
      throw Error(`Status code not ${expCode}, but ${code}`);
    }
  }

  async compareResponseText(response: object | string, expResponse: object | string) {
    response = JSON.stringify(response);
    expResponse = JSON.stringify(expResponse);

    if (response !== expResponse) {
      throw Error(
        `\x1b[41m Response text: \x1b[0m\n
        ${response}\n
        \x1b[41m does not match with expected: \x1b[0m\n
        ${expResponse}`
      );
    }
  }
}
