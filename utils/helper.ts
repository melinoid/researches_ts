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
      throw Error(`Response text:\n${response}\ndoes not match with expected:\n${expResponse}`);
    }
  }
}
