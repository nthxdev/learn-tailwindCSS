import CodeBlock from "./common/CodeBlock";
import Note from "./common/Note";
import Section from "./common/Section";
import Table from "./common/Table";

const tableUtilities = [
  ["border-collapse / border-separate", "border-collapse", "Merge table borders or keep them separate."],
  ["border-spacing-2", "border-spacing", "Set space between separated table cells."],
  ["table-auto / table-fixed", "table-layout", "Use content-based or predictable column sizing."],
  ["caption-top / caption-bottom", "caption-side", "Place the table caption above or below."],
];

function Tables() {
  return (
    <div className="pages">
      <h1 className="pages-tittle text-center">Tables</h1>

      <p className="text-center text-white/60 -mt-4 mb-4 max-w-2xl px-4">
        Utilities for table borders, spacing, layout, and captions.
      </p>

      <div className="w-full flex flex-col items-center px-4 sm:px-8 pb-24">
        <Section id="table-reference" title="Table Utilities">
          <Table headers={["Tailwind", "CSS", "Use"]} rows={tableUtilities} />
        </Section>

        <Section id="basic-table" title="Basic Table">
          <CodeBlock>{`<table className="table-auto border-collapse w-full">
  <thead>
    <tr className="border-b">
      <th className="p-2 text-left">Name</th>
    </tr>
  </thead>

  <tbody>
    <tr className="border-b">
      <td className="p-2">Alice</td>
    </tr>
  </tbody>
</table>`}</CodeBlock>
        </Section>

        <Section id="table-layout" title="Table Layout">
          <CodeBlock>{`<table className="table-fixed w-full">
  ...
</table>`}</CodeBlock>

          <Note>
            <code className="text-pink-300">table-fixed</code> gives you more
            predictable column widths than content-driven{" "}
            <code className="text-pink-300">table-auto</code>.
          </Note>
        </Section>

        <Section id="borders" title="Table Borders">
          <CodeBlock>{`<table className="border-separate border-spacing-2">
  ...
</table>`}</CodeBlock>

          <p>
            <code className="text-pink-300">border-spacing-*</code> only matters
            when the table uses <code className="text-pink-300">border-separate</code>.
          </p>
        </Section>

        <Section id="caption" title="Captions">
          <CodeBlock>{`<table className="caption-top">
  <caption>Team members</caption>
  ...
</table>`}</CodeBlock>

          <p>
            Switch to <code className="text-pink-300">caption-bottom</code> to
            place the caption below the table.
          </p>
        </Section>
      </div>
    </div>
  );
}

export default Tables;