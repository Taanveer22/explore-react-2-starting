import Products from "./components/apiCards/Products";
import HandleEvent from "./components/event/HandleEvent";
import HookConcept from "./components/hooks/HookConcept";
import HookConcept2 from "./components/hooks/HookConcept2";

function App() {
  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-4xl font-bold mb-5 text-center">Explore React 2 Starting</h1>
      <HandleEvent></HandleEvent>
      <HookConcept></HookConcept>
      <HookConcept2></HookConcept2>
      <Products></Products>
    </div>
  );
}

export default App;
