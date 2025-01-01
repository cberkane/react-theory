import { CSSProperties, FC, useState } from "react";
import SimpleForm from "./forms/SimpleForm";
import NestedForm from "./forms/NestedForm";
import DynamicForm from "./forms/DynamicForm";

const navStyle: CSSProperties = {
  display: 'flex',
  gap: 18
}

const navItemStyle: CSSProperties = {
  cursor: 'pointer',
}

const App: FC = () => {
  const [link, setLink] = useState<"simple" | "nested" | "dynamic">("simple");

  return (
    <div>
      <nav style={navStyle}>
        <a style={navItemStyle} onClick={() => setLink("simple")}>Simple</a>
        <a style={navItemStyle} onClick={() => setLink("nested")}>Nested</a>
        <a style={navItemStyle} onClick={() => setLink("dynamic")}>Dynamic</a>
      </nav>
      {link === "simple" && <SimpleForm />}
      {link === "nested" && <NestedForm />}
      {link === "dynamic" && <DynamicForm />}
    </div>
  );
}

export default App;
