+ Returns a memoized callback.
+ Callback will return a memoized version of the callback that only changes if one of the dependencies has changed. 
+ This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders (e.g. shouldComponentUpdate)


*** useCallback(fn, deps) is equivalent to useMemo(() => fn, deps).

+ The array of dependencies is not passed as arguments to the callback.
+ Every value referenced inside the callback should also appear in the dependencies array.

*** Ko chay Use callback khi render lan dau tien
