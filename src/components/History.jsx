function History({ history, onSelect }) {
  return (
    <div className="border rounded-2xl p-4 text-white">
      <h2 className="text-2xl mb-3">Search History</h2>

      {history.length === 0 ? (
        <p>No Search Yet</p>
      ) : (
        history.map((city, index) => (
          <button
            key={index}
            onClick={() => onSelect(city)}
            className="block w-full text-left p-2 my-2 rounded-lg hover:bg-blue-700"
          >
            {city}
          </button>
        ))
      )}
    </div>
  );
}

export default History;