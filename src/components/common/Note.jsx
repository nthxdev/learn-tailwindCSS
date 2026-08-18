function Note({ children }) {
  return (
    <div className="border-l-4 border-yellow-400 bg-yellow-400/10 px-4 py-3 rounded-r-md text-sm text-yellow-100">
      {children}
    </div>
  );
}

export default Note;