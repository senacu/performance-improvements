# Performance improvements

This repo demonstrates ten easy wins that usually improve responsiveness and lower CPU usage in real applications:

1. Memoize repeated expensive lookups and computations.
2. Replace repeated `String` concatenation with array joins.
3. Avoid creating objects or arrays in hot loops.
4. Use `Map`/`Set` for frequent membership checks instead of repeated linear scans.
5. Batch DOM updates instead of mutating the UI repeatedly.
6. Use early return guards to skip unnecessary work.
7. Cache parsed JSON or configuration objects rather than re-reading them.
8. Limit re-renders by splitting large components and memoizing props.
9. Avoid synchronous work on the main thread; defer expensive tasks with workers or queues.
10. Profile before optimizing; instrumentation finds the true bottleneck.

## Focused improvement

The highest-impact, lowest-effort win is memoization. Repeated lookups are often the cheapest place to add a cache without changing behavior.

This project includes a small memoization helper and tests showing the improvement pattern.
