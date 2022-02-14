import 'config/environment/variables';

describe('apiEnvironment', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it('should export object with correct keys', () => {
    expect(require('config/environment/api').default).toMatchObject({
      baseUrl: expect.any(String),
      endpoint: expect.any(String),
    });
  });

  it('should throw when there is a validation error', () => {
    jest.doMock('config/environment/variables', () => ({
      notValidKey: 'notValidKey',
    }));

    expect(() => {
      require('config/environment/api');
    }).toThrowError();
  });
});
