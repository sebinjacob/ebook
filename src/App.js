import "./App.css";
import Layout from "./components/layout";
import Ebook from "./pages/ebook";
import WrapWitProvider from "./components/wrapWithProvider";

function App() {
    return (
        <div className='App'>
            <Layout>
                <Ebook />
            </Layout>
        </div>
    );
}

export default WrapWitProvider(App);
