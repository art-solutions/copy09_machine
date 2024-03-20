
import Homepage from './components/Homepage';
import GlobalContextsProvider from './components/plasmic/landing_page_starter/PlasmicGlobalContextsProvider'

function App() {
  return (<GlobalContextsProvider><Homepage /></GlobalContextsProvider>);
}

export default App;
  