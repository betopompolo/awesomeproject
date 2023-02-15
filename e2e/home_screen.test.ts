import {by, device, expect, element} from 'detox';

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should change to a cool text only once', async () => {
    await element(by.text('Debug')).tap();
    await expect(element(by.text('Hey ya!'))).toBeVisible();
    await element(by.text('Hey ya!')).tap();
    await expect(element(by.text('Hey ya!'))).toBeVisible();
  });
});
