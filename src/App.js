import './App.css';
import ClassCounter from './components/ClassCounterwithProps.js'
import ClassCounterTwo from './components/ClassCounterTwo.js'
import HookCounter from './components/HookCounter.js'
import HookCounterTwo from './components/HookCounter2.js';
import HookCounterThree from './components/HookCounterThree.js';
import HookCounterFour from './components/HookCounterFour';
import ClassUseEffectHookCounter from '/.components/ClassUseEffectHookCounter';

function App() {
  return (
    <div className="App">
      <ClassCounter />
      <ClassCounterTwo />
      <HookCounter />
      <HookCounterTwo />
      <HookCounterThree />
      <HookCounterFour />
      <ClassUseEffectHookCounter />
    </div>
  );
}

export default App;
