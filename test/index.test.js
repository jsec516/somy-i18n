var expect = require('chai').expect,
    i18n = require('../index');

describe('i18n', function() {
  it('should return true', function() {
    expect(i18n.t('errors.call.empty.url')).to.be.equal("no url provided from where we can get call content");
  });

  it('should return false', function() {
    expect(i18n.t('junky')).to.be.not.ok;
  })
})
