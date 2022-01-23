import { shallow } from "enzyme";
import { HookApp } from "../HookApp";

describe("HookApp", () => {
  it("SnapShot", () => {
    const wrapper = shallow(<HookApp />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("h1").text()).toBe("Hook App");
  });
});
