import CodeBlock from "./common/CodeBlock";
import Note from "./common/Note";
import Section from "./common/Section";
import Table from "./common/Table";



function Notes() {
  return (
    <>
        <div className="pages">
            <h1 className="pages-tittle text-center">Quick Points</h1>
            <Note>
                <ul className="text-xl list-disc px-7 marker:text-white marker:text-2xl">
                    <li>Tailwind converts <code className="text-pink-300">_</code> → spaces.</li>
                    <li><code className="text-pink-300">Space/gap</code> - spacing between direct childrens</li>
                    <li><code className="text-pink-300">inset-[top_right_bottom_left]</code></li>
                </ul>
            </Note>
        </div>
    </>
  );
}

export default Notes;
