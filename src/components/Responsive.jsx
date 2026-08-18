import { useEffect, useState } from "react";

function Responsive() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () =>
      setSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="pages">
      <h1 className="pages-tittle">Responsive Design</h1>

      {/* wrap table so it can scroll horizontally instead of squishing on tiny screens */}
      <div className="w-full max-w-md overflow-x-auto">
        <table className="w-full min-w-[280px] text-white text-left border-collapse border-2 border-white [&_th]:border-2 [&_th]:border-white [&_td]:border-2 [&_th]:p-2 [&_td]:p-2">
          <thead>
            <tr>
              <th>Prefix</th>
              <th>Screen Width</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>sm:</code>
              </td>
              <td>640px</td>
            </tr>
            <tr>
              <td>
                <code>md:</code>
              </td>
              <td>768px</td>
            </tr>
            <tr>
              <td>
                <code>lg:</code>
              </td>
              <td>1024px</td>
            </tr>
            <tr>
              <td>
                <code>xl:</code>
              </td>
              <td>1280px</td>
            </tr>
            <tr>
              <td>
                <code>2xl:</code>
              </td>
              <td>1536px</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="w-full max-w-xl min-h-[16rem] p-6 bg-blue-500 flex flex-col items-center justify-center text-center sm:bg-red-500 md:bg-green-500 lg:bg-yellow-500 xl:bg-purple-500 2xl:bg-orange-500">
        <p className="pages-tittle !text-[1.5rem] sm:!text-[2rem]">
          Responsive div
        </p>
        <span className="text-white">
          Changes color according to screen size
        </span>
        <span className="text-white">Current Screen Size width x height:</span>
        <p className="text-white">
          {size.width}px x {size.height}px
        </p>
      </div>
    </div>
  );
}

export default Responsive;
