function CodeBlock({ children }) {
  return (
    <pre className="w-full overflow-x-auto rounded-lg bg-black/60 border border-white/10 p-4 text-sm text-green-300 font-mono">
      <code>{children}</code>
    </pre>
  );
}

export default CodeBlock;