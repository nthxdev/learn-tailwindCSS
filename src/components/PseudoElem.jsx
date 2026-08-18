function PseudoElem() {
  return (
    <>
      {/* Pseudo Elements */}
      <div className="pages">
        <h1 className="pages-tittle">Pseudo Elements</h1>
        <div
          className="temp-out relative isolate bg-yellow-500 my-12 px-10 py-6
        before:content-[' '] 
        before:bg-green-500
        before:absolute
        before:top-[-23px]
        before:left-[-23px]
        before:h-[100%]
        before:w-[100%]
        before:-z-10
        "
        >
          <p className="pages-tittle">Before</p>
        </div>
        <div
          className="temp-out relative isolate bg-yellow-500 my-12 px-10 py-6
        after:content-[' '] 
        after:bg-blue-500
        after:absolute
        after:top-[-23px]
        after:left-[-23px]
        after:h-[100%]
        after:w-[100%]
        after:z-10
        "
        >
          <p className="pages-tittle">after</p>
        </div>
      </div>
    </>
  );
}
export default PseudoElem;
