import { test } from '../page-objects/fixtures';

test.beforeEach(async ({ navigateTo }) => {
    await navigateTo('.section3');
  });

test('Check Section 3 component presence', async({ pageManager }) => {
    await pageManager.onSection3Component().showSection3Component();
});

test('Check section 3 rubric text', async({ pageManager }) => {
    await pageManager.onSection3Component().showSection3RubricText();
});

test('Check section 3 heading text', async({ pageManager }) => {
    await pageManager.onSection3Component().showSection3HeadingText();
});

test('Check section 3 content text', async({ pageManager }) => {
    await pageManager.onSection3Component().showSection3ContentText();
});

test('Check section 3 image', async({ pageManager }) => {
    await pageManager.onSection3Component().showSection3Image();
});
