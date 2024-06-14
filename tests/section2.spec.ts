import { test } from '../page-objects/fixtures';

test.beforeEach(async ({ navigateTo }) => {
    await navigateTo('.section2');
  });

test('Check Section2 component presence', async({ pageManager }) => {
    await pageManager.onSection2Component().showSection2Component();
});

test('Check section 2 rubric text', async({ pageManager }) => {
    await pageManager.onSection2Component().showSection2RubricText();
});

test('Check section 2 heading text', async({ pageManager }) => {
    await pageManager.onSection2Component().showSection2HeadingText();
});

test('Check section 2 content link', async({ pageManager }) => {
    await pageManager.onSection2Component().showSection2ContentLink();
});

test('Check section 2 content text', async({ pageManager }) => {
    await pageManager.onSection2Component().showSection2ContentText();
});

test('Check section 2 image', async({ pageManager }) => {
    await pageManager.onSection2Component().showSection2Image();
});