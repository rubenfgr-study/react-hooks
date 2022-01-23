import { act, renderHook } from "@testing-library/react-hooks";
import useCounter from "../../hooks/useCounter";

describe("useCounter Custom Hook", () => {
  it("initial state", () => {
    const { result } = renderHook(() => useCounter(0));
    const { counter, increment, decrement, reset } = result.current;
    expect(counter).toBe(0);
    expect(typeof increment).toBe("function");
    expect(typeof decrement).toBe("function");
    expect(typeof reset).toBe("function");
  });

  it("initial state = 100", () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter } = result.current;
    expect(counter).toBe(100);
  });

  it("increment 1", () => {
    const { result } = renderHook(() => useCounter(100));
    const { increment } = result.current;
    act(() => increment());
    const { counter } = result.current;
    expect(counter).toBe(101);
  });

  it("increment 5", () => {
    const { result } = renderHook(() => useCounter(100));
    const { increment } = result.current;
    act(() => increment(5));
    const { counter } = result.current;
    expect(counter).toBe(105);
  });

  it("decrement 1", () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrement } = result.current;
    act(() => decrement());
    const { counter } = result.current;
    expect(counter).toBe(99);
  });

  it("decrement 5", () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrement } = result.current;
    act(() => decrement(5));
    const { counter } = result.current;
    expect(counter).toBe(95);
  });

  it("reset", () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrement, reset } = result.current;
    act(() => decrement(5));
    act(() => reset());
    const { counter } = result.current;
    expect(counter).toBe(100);
  });
});
