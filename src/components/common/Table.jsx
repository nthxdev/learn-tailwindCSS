function Table({ headers, rows }) {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full min-w-[420px] text-left border-collapse border-2 border-white [&_th]:border-2 [&_th]:border-white [&_td]:border-2 [&_td]:border-white/40 [&_th]:p-2 [&_td]:p-2">
        <thead className="bg-white/10">
          <tr>
            {headers.map((h) => (
              <th key={h}>{h}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="odd:bg-white/[0.03]">
              {row.map((cell, j) => (
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
