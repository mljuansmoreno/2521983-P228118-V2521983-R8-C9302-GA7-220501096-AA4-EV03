import Carrito from "./Carrito";
import Checkout from "./Checkout";
import DetallesdeProducto from "./DetallesdeProducto";
import FormularioContacto from "./FormularioContacto";
import ListadeProductos from "./ListadeProductos";

function App() {
    return (
      <Router>
        <Navbar /> {/* Mostrar la barra de navegación en todas las páginas */}
        <Switch>
          <Route exact path="/" component={ListadeProductos} />
          <Route path="/product/:id" component={DetallesdeProducto} />
          <Route path="/cart" component={Carrito} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/contact" component={FormularioContacto} />
        </Switch>
      </Router>
    );
  }
  
  export default App;
  