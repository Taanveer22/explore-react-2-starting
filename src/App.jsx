import Products from "./components/apiCards/Products";
import HookConcept from "./components/hooks/HookConcept";
import HookConcept2 from "./components/hooks/HookConcept2";

function App() {
  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-4xl font-bold">Explore React 2 Starting</h1>
      <HookConcept></HookConcept>
      <HookConcept2></HookConcept2>
      <Products></Products>
    </div>
  );
}

export default App;
