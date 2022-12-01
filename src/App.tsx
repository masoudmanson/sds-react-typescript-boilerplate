import { Button, Icon, Tag } from "czifui";
import logo from "./assets/sds-logo.png";
import reactLogo from "./assets/react-logo.svg";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <img src={logo} alt="Science Design System" />
      <p>+</p>
      <img src={reactLogo} className="App-logo" alt="react-logo" />
      <p>
        Quickly bootstrap new web application projects on a solid
        TypeScript-based tech stack with SDS design library.
      </p>
      <br />
      <Button
        startIcon={<Icon sdsIcon="infoCircle" sdsSize="s" sdsType="button" />}
        sdsStyle="rounded"
        sdsType="secondary"
        intent="warning"
        href="https://zeroheight.com/009eaf17b/v/latest/p/349f6a-science-design-system"
        target="_blank"
        component="a"
      >
        Learn more about SDS
      </Button>
      <p className="edit">
        Edit{" "}
        <Tag
          color="gray"
          label="src/App.js"
          sdsStyle="square"
          sdsType="secondary"
        />{" "}
        and save to reload.
      </p>
    </div>
  );
}
