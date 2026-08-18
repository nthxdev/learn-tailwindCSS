import CodeBlock from "./common/CodeBlock";
import Note from "./common/Note";
import Section from "./common/Section";
import Table from "./common/Table";

const borderUtilities = [
  ["rounded / rounded-lg / rounded-full / rounded-t-xl", "border-radius", "Round all corners, use a larger radius, make a pill/circle, or target one side."],
  ["border / border-2 / border-t", "border-width", "Set border thickness or apply it to one side."],
  ["border-gray-300", "border-color", "Set border color."],
  ["border-dashed / border-dotted / border-double", "border-style", "Choose the border style."],
  ["outline / outline-2", "outline-width", "Set outline thickness."],
  ["outline-blue-500", "outline-color", "Set outline color."],
  ["outline-dashed", "outline-style", "Choose outline style."],
  ["outline-offset-2", "outline-offset", "Set the gap between the element and its outline."],
  ["divide-y / divide-gray-200", "divide", "Add separators between children."],
  ["ring-2 / ring-blue-500 / ring-offset-2", "ring", "Create a shadow-based ring, often for focus states."],
];

function Borders() {
  return (
    <div className="pages">
      <h1 className="pages-tittle text-center">Borders</h1>

      <p className="text-center text-white/60 -mt-4 mb-4 max-w-2xl px-4">
        Control corners, borders, outlines, separators, and focus rings.
      </p>

      <div className="w-full flex flex-col items-center px-4 sm:px-8 pb-24">
        <Section id="border-reference" title="Border Utilities">
          <Table headers={["Tailwind", "CSS", "Use"]} rows={borderUtilities} />
        </Section>

        <Section id="radius" title="Rounded Corners">
          <CodeBlock>{`<div className="rounded-lg">
  Rounded corners
</div>

<div className="rounded-full">
  Pill or circle
</div>

<div className="rounded-t-xl">
  Top corners only
</div>`}</CodeBlock>
        </Section>

        <Section id="border-width" title="Border Width & Color">
          <CodeBlock>{`<div className="border border-gray-300">
  1px border
</div>

<div className="border-2 border-blue-500">
  2px blue border
</div>`}</CodeBlock>
        </Section>

        <Section id="outline" title="Outline">
          <CodeBlock>{`<button className="outline-2 outline-blue-500 outline-offset-2">
  Focused button
</button>`}</CodeBlock>

          <Note>
            An outline sits outside the element's border and does not take up
            normal layout space.
          </Note>
        </Section>

        <Section id="divide-ring" title="Dividers & Rings">
          <CodeBlock>{`<ul className="divide-y divide-gray-200">
  <li className="py-3">Item 1</li>
  <li className="py-3">Item 2</li>
</ul>

<input className="border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500" />`}</CodeBlock>

          <Note>
            <code className="text-pink-300">divide-*</code> is useful for
            separators between siblings. <code className="text-pink-300">ring-*</code>{" "}
            is commonly used for focus states.
          </Note>
        </Section>
      </div>
    </div>
  );
}

export default Borders;