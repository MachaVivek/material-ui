import { describeJscodeshiftTransform } from '../../../testUtils';
import transform from './tabs-props';

describe('@mui/codemod', () => {
  describe('deprecations', () => {
    describeJscodeshiftTransform({
      transform,
      transformName: 'tabs-props',
      dirname: __dirname,
      testCases: [
        { actual: '/test-cases/actual.js', expected: '/test-cases/expected.js' },
        { actual: '/test-cases/theme.actual.js', expected: '/test-cases/theme.expected.js' },
      ],
    });
  });
});
