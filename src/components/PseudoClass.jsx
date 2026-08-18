function PseudoClass() {
  return (
    <>
      {/* Pseudo class */}

      <div className="group pages space-y-4">
        <h1 className="pages-tittle">Pseudo Class</h1>
        <button className="bg-blue-500 px-4 py-2 rounded-md text-white text-lg font-bold hover:bg-blue-900 focus:ring-2 active:scale-125">
          Click
        </button>
        <button className="bg-blue-500 px-4 py-2 rounded-md tex-white hover:bg-red-500">
          Hover
        </button>
        <button className="bg-blue-500 px-4 py-2 rounded-md tex-white focus:bg-red-500">
          Focus
        </button>
        <button className="bg-blue-500 px-4 py-2 rounded-md tex-white focus-visible:bg-red-500">
          Keyboard Tab Select
        </button>
        <button className="bg-blue-500 px-4 py-2 rounded-md tex-white active:bg-red-500">
          Active
        </button>
        <button className="bg-blue-500 px-4 py-2 rounded-md tex-white group-hover:bg-red-500">
          Group Hover
        </button>
        <button
          disabled
          className="bg-blue-500 px-4 py-2 rounded-md tex-white disabled:bg-gray-500"
        >
          Disabled
        </button>
        <a
          href="https://google.com"
          target="_blank"
          className="bg-blue-500 px-4 py-2 rounded-md tex-blue-400 visited:text-red-500 cursor-pointer"
        >
          Link
        </a>
        <label className="text-white text-lg font-bold ">
          <input type="checkbox" className="checked:accent-red-500" /> Check me
        </label>
        {/* Peer-focus-> one element controls another */}
        <div>
          <input className="peer bg-white border p-2" placeholder="Click me" />
          <p className="text-white peer-focus:text-red-500">
            <i className="text-lg font-bold">Peer Focus</i>I change when input
            is focused
          </p>
        </div>
      </div>
    </>
  );
}
export default PseudoClass;
