import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Landing Page</title>
        <link
            href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
            rel="stylesheet"
        />
        <div className="text-center">
            <h1 className="text-4xl font-semibold mb-6">Welcome to FIFA 2022 App</h1>
            <h1 className="text-2xl font-semibold mb-6">Still work in progress!</h1>
            <div className="flex space-x-4">
            <a
                href="./auth/register"
                className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
                Sign Up
            </a>
            <a
                href="./auth/login"
                className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-blue-300"
            >
                Sign In
            </a>
            </div>
        </div>
    </>

  );
}

export default App;
