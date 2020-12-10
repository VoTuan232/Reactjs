+ Returns a memoized value.

+ Remember that the function passed to useMemo runs during rendering
+ For example, side effects belong in useEffect, not useMemo.
*** Chay khi render lan dau tien

If no array is provided, a new value will be computed on every render.