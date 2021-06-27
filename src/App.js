import './App.css';
import ClassCounter from './components/ClassCounterwithProps.js'
import ClassCounterTwo from './components/ClassCounterTwo.js'
import HookCounter from './components/HookCounter.js'
import HookCounterTwo from './components/HookCounter2.js';
import HookCounterThree from './components/HookCounterThree.js';
import HookCounterFour from './components/HookCounterFour';
import UseEffectHookCounteroldClassVersion from './components/UseEffectHookCounteroldClassVersion';
import UseEffectHookFunctionalComponent from './components/UseEffectHookFunctionalComponent';
import ConditionalUseEffectCounterOldClassVersion from './components/ConditionalUseEffectCounterOldClassVersion'
import ConditionalUseEffectCounterHook from './components/ConditionalUseEffectCounterHook'

function App() {
  return (
    <div className="App">
      <ClassCounter />
      <ClassCounterTwo />
      <HookCounter />
      <HookCounterTwo />
      <HookCounterThree />
      <HookCounterFour />
      <UseEffectHookCounteroldClassVersion />
      <UseEffectHookFunctionalComponent />
      <ConditionalUseEffectCounterOldClassVersion />
      <ConditionalUseEffectCounterHook />
    </div>
  );
}

export default App;
