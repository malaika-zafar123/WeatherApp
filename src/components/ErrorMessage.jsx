function ErrorMessage({ message }) {
  return (
    <div className="bg-red-500 text-white p-4 rounded-xl">
      {message}
    </div>
  );
}

export default ErrorMessage;