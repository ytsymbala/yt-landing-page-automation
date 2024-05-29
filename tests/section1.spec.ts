import { test } from '../page-objects/test-options';

test.beforeEach(async ({ navigateTo }) => {
    await navigateTo('.section1');
  });

test('Check section1 component presence', async({ pageManager }) => {
    await pageManager.onSection1Component().showSection1Component();
});

test('Check section1 content rubric text', async({ pageManager }) => {
    await pageManager.onSection1Component().showSection1RubricText();
});

test('Check section1 header text', async({ pageManager }) => {
    await pageManager.onSection1Component().showSection1HeaderText();
});

test('Check section1 content link', async({ pageManager }) => {
    await pageManager.onSection1Component().showSection1ContentLink();
});

test('Check section1 first description', async({ pageManager }) => {
    await pageManager.onSection1Component().showSection1FirstDescription();
});

test('Check section1 second description', async({ pageManager }) => {
    await pageManager.onSection1Component().showSection1SecondDescription();
});