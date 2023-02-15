import {by, device, element, expect} from 'detox';

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

  it('should open list screen', async () => {
    await element(
      by.text(device.getPlatform() === 'android' ? 'GO TO LIST' : 'Go to list'),
    ).tap();
    await expect(element(by.text('Detalhes'))).toBeVisible();
    await expect(element(by.text('Details Screen'))).toBeVisible();
  });
});
