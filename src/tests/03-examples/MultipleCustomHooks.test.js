import { shallow } from "enzyme";
import MultipleCustomHooks from "../../components/03-examples/MultipleCustomHooks";
import useCounter from "../../hooks/useCounter";
import useFetch from "../../hooks/useFetch";
jest.mock("../../hooks/useFetch");
jest.mock("../../hooks/useCounter");

describe("MultipleCustomHooks Component", () => {
  beforeEach(() => {
    useCounter.mockReturnValue({
      counter: 10,
      increment: () => {},
    });
  });
  test("snapshot", () => {
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });
    const wrapper = shallow(<MultipleCustomHooks />);
    expect(wrapper).toMatchSnapshot();
  });

  test("should be show info", () => {
    useFetch.mockReturnValue({
      data: [{ author: "Walter White", quote: "I am the one who knocks" }],
      loading: false,
      error: null,
    });
    const wrapper = shallow(<MultipleCustomHooks />);
    expect(wrapper.find(".alert").exists()).toBeFalsy();
    expect(wrapper.find("h1").text()).toBe("BreakingBad Quotes");
    expect(wrapper.find("p").text()).toBe("I am the one who knocks");
    wrapper.find("button").simulate("click");
  });
});
