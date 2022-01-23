import { renderHook } from "@testing-library/react-hooks";
import { act } from "react-dom/test-utils";
import useForm from "../../hooks/useForm";

describe("useForm Custom Hook", () => {
  const initialForm = {
    name: "rubenfgr",
    email: "rubenfgr@gmail.com",
  };
  test("initial state", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [values] = result.current;
    expect(values).toEqual(initialForm);
  });

  test("handleInputChange", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const handleInputChange = result.current[1];
    const target = {
      name: "name",
      value: "test",
    };
    act(() => handleInputChange({ target }));
    const values = result.current[0];
    console.log(values);
    expect(values).toEqual({ ...initialForm, name: "test" });
  });

  test("reset", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const handleInputChange = result.current[1];
    const reset = result.current[2];
    const target = {
      name: "name",
      value: "test",
    };
    act(() => handleInputChange({ target }));
    act(() => reset());
    const values = result.current[0];
    expect(values).toEqual(initialForm);
  });
});
