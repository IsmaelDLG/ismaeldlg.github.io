import { StickyNavbar } from '../features/navbar/components';
import { About } from '../features/about/components';
import { Home } from '../features/home/components';
import { Contact } from '../features/contact/components';
import { Footer } from '../features/footer/components';

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
      <Contact />
      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;
