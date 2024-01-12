function Square() {
  return (
    <button className="bg-white border border-gray-400 h-12 w-12 m-1 leading-9 text-lg">
      X
    </button>
  );
}

function App() {
  return (
    <>
      <div>
        <Square />
        <Square />
        <Square />
      </div>
      <div>
        <Square />
        <Square />
        <Square />
      </div>
      <div>
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}

export default App;
