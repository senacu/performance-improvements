import test from 'node:test';
import assert from 'node:assert/strict';

import { memoize, createMatcher } from '../src/memoize.js';

test('memoize returns cached results for repeated calls', () => {
  let calls = 0;

  const square = memoize((value) => {
    calls += 1;
    return value * value;
  });

  assert.equal(square(4), 16);
  assert.equal(square(4), 16);
  assert.equal(calls, 1);
});

test('createMatcher reuses prior matches for the same input', () => {
  const matcher = createMatcher(['alpha', 'beta', 'gamma']);

  assert.deepEqual(matcher(' The quick brown alpha jumps '), ['alpha']);
  assert.deepEqual(matcher(' The quick brown alpha jumps '), ['alpha']);
  assert.deepEqual(matcher('beta and gamma'), ['beta', 'gamma']);
});
