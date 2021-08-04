describe('ENTERING NAME', function() {
    it('SHOULD DISPLAY "HELLO NAME"', function() {
    browser.get('https://angularjs.org');
    element(by.model('yourName')).sendKeys('SAJEEV KRISHNA');
    var guru= element(by.xpath('html/body/div[2]/div[1]/div[2]/div[2]/div/h1'));
    expect(guru.getText()).toEqual('Hello SAJEEV KRISHNA');
    });
  });
