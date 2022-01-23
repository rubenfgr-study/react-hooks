import { renderHook } from "@testing-library/react-hooks";
import useFetch from "../../hooks/useFetch";

describe("useFetch Custom Hook", () => {
  const initialState = {
    data: null,
    loading: true,
    error: null,
  };

  test("initial state", () => {
    const { result } = renderHook(() =>
      useFetch("https://www.breakingbadapi.com/api/quotes/1")
    );
    const state = result.current;
    expect(state).toEqual(initialState);
  });

  test("with fetch result", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch("https://www.breakingbadapi.com/api/quotes/1")
    );
    await waitForNextUpdate({ timeout: 2000 });
    const { data, loading, error } = result.current;
    expect(data.length).toBeGreaterThan(0);
    expect(loading).toBeFalsy();
    expect(error).toBeNull();
  });

  test("should be handle error", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetch("asdf"));
    await waitForNextUpdate({ timeout: 2000 });
    const { data, loading, error } = result.current;
    expect(data).toBeNull();
    expect(loading).toBeFalsy();
    expect(error).toBe("Something went wrong");
  });
});
