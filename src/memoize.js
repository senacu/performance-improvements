export function memoize(fn, resolver = (...args) => JSON.stringify(args)) {
  const cache = new Map();

  return (...args) => {
    const key = resolver(...args);

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

export function createMatcher(patterns) {
  const cache = new Map();

  return (value) => {
    if (typeof value !== 'string') {
      return [];
    }

    const normalized = value.trim().toLowerCase();

    if (cache.has(normalized)) {
      return cache.get(normalized);
    }

    const matches = patterns.filter((pattern) => {
      const normalizedPattern = pattern.trim().toLowerCase();
      return normalized.includes(normalizedPattern);
    });

    cache.set(normalized, matches);
    return matches;
  };
}
