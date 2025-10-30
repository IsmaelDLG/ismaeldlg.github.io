import { IconsOverlay } from '../features/floatingIcons/components';
import { StickyNavbar } from '../features/navbar/components';
import { About } from '../features/about/components';
import { Home } from '../features/home/components';

function App() {
  return (
    <div className="App">
      <StickyNavbar />
      {/* <IconsOverlay /> */}
      <Home />
      <About />
      {/* section stack */}
      {/* section projects */}
      {/* section contact */}
      {/* footer */}
    </div>
  );
}

export default App;
