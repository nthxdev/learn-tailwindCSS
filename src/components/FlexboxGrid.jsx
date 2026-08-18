import CodeBlock from "./common/CodeBlock";
import Note from "./common/Note";
import Section from "./common/Section";
import Table from "./common/Table";

const flexUtilities = [
  ["flex", "display: flex", "Turns the element into a flex container."],
  ["flex-row / flex-col", "flex-direction", "Place children in a row or column."],
  ["flex-wrap / flex-nowrap", "flex-wrap", "Allow children to move onto another line."],
  ["flex-1 / flex-auto / flex-none", "flex", "Control how a child grows and shrinks."],
  ["grow / grow-0", "flex-grow", "Control whether a child takes extra free space."],
  ["shrink / shrink-0", "flex-shrink", "Control whether a child shrinks when space is tight."],
  ["basis-1/2 / basis-64", "flex-basis", "Set the child's starting size before growing or shrinking."],
  ["order-1 / order-last", "order", "Change visual order without changing the HTML order."],
  ["justify-start / center / between / end / around / evenly", "justify-content", "Align children along the main axis."],
  ["items-start / center / end / stretch / baseline", "align-items", "Align children along the cross axis."],
  ["content-center / content-between", "align-content", "Distribute wrapped flex lines."],
  ["self-center / self-end", "align-self", "Override alignment for one child."],
  ["gap-4", "gap", "Set space between flex children."],
];

const gridUtilities = [
  ["grid", "display: grid", "Turns the element into a grid container."],
  ["grid-cols-3 / grid-cols-[200px_1fr]", "grid-template-columns", "Define column tracks."],
  ["col-span-2 / col-start-1 / col-end-3", "grid-column", "Control an item's column span or position."],
  ["grid-rows-4", "grid-template-rows", "Define row tracks."],
  ["row-span-2", "grid-row", "Control how many rows an item spans."],
  ["grid-flow-col / grid-flow-row-dense", "grid-auto-flow", "Control how auto-placed items fill the grid."],
  ["auto-cols-fr", "grid-auto-columns", "Size implicit columns created automatically."],
  ["auto-rows-min", "grid-auto-rows", "Size implicit rows."],
  ["gap-4 / gap-x-2 / gap-y-8", "gap", "Set space between rows, columns, or both."],
  ["justify-items-center", "justify-items", "Align all items horizontally inside their cells."],
  ["justify-self-end", "justify-self", "Align one item horizontally inside its cell."],
  ["place-content-center", "place-content", "Center the whole grid content on both axes."],
  ["place-items-center", "place-items", "Center every item inside its cell."],
  ["place-self-center", "place-self", "Center one item inside its cell."],
];

function FlexboxGrid() {
  return (
    <div className="pages">
      <h1 className="pages-tittle text-center">Flexbox & Grid</h1>

      <p className="text-center text-white/60 -mt-4 mb-4 max-w-2xl px-4">
        The two layout systems you will use constantly. Flexbox is mainly
        one-dimensional; Grid handles two dimensions.
      </p>

      <div className="w-full flex flex-col items-center px-4 sm:px-8 pb-24">
        <Section id="flexbox" title="Flexbox">
          <p>
            Flexbox lays children out along one main direction: a row or a
            column.
          </p>

          <CodeBlock>{`<div class="flex flex-row gap-4 items-center justify-between">
  <div>A</div>
  <div>B</div>
  <div>C</div>
</div>`}</CodeBlock>

          <Table
            headers={["Tailwind", "CSS", "Use"]}
            rows={flexUtilities}
          />

          <Note>
            <b>Memory trick:</b>{" "}
            <code className="text-pink-300">justify-*</code> controls the{" "}
            <b>main axis</b>. <code className="text-pink-300">items-*</code>{" "}
            controls the <b>cross axis</b>. In a row, main = horizontal and
            cross = vertical.
          </Note>
        </Section>

        <Section id="direction" title="Direction & Wrapping">
          <CodeBlock>{`<div class="flex flex-row gap-4">
  A B C
</div>

<div class="flex flex-col gap-4">
  A
  B
  C
</div>

<div class="flex flex-wrap gap-4">
  Items can move to another line.
</div>`}</CodeBlock>

          <p>
            Start with <code className="text-pink-300">flex-row</code> for
            horizontal layouts and <code className="text-pink-300">flex-col</code>{" "}
            for vertical layouts. Add <code className="text-pink-300">flex-wrap</code>{" "}
            when the children should move to a new line instead of squeezing
            into one row.
          </p>
        </Section>

        <Section id="justify-items" title="Justify vs Items">
          <p>
            These two are the most important alignment utilities to understand.
          </p>

          <CodeBlock>{`<div class="flex items-center justify-center">
  Centered on both axes
</div>

<div class="flex justify-between items-center">
  <span>Left</span>
  <span>Center</span>
  <span>Right</span>
</div>`}</CodeBlock>

          <Table
            headers={["Utility", "Controls"]}
            rows={[
              ["justify-start / center / end", "Main-axis alignment."],
              ["justify-between", "First and last item touch the edges; space goes between."],
              ["justify-around / evenly", "Different ways to distribute free space."],
              ["items-start / center / end", "Cross-axis alignment."],
              ["items-stretch", "Stretch children along the cross axis."],
              ["items-baseline", "Align children by their text baselines."],
            ]}
          />
        </Section>

        <Section id="child-sizing" title="How Flex Children Take Space">
          <p>
            These utilities belong mainly on the <b>children</b>, not the
            parent.
          </p>

          <CodeBlock>{`<div class="flex gap-4">
  <div class="flex-1">I take available space</div>
  <div class="flex-none">I keep my size</div>
</div>`}</CodeBlock>

          <Table
            headers={["Utility", "Idea"]}
            rows={[
              ["flex-1", "Grow and shrink so the item can fill available space."],
              ["flex-auto", "Grow and shrink based on its content size."],
              ["flex-none", "Do not grow or shrink."],
              ["grow", "Allow the item to take extra space."],
              ["grow-0", "Prevent growing."],
              ["shrink", "Allow shrinking."],
              ["shrink-0", "Prevent shrinking."],
              ["basis-1/2", "Start from 50% before flex growth/shrink is applied."],
            ]}
          />
        </Section>

        <Section id="child-alignment" title="One Child, Different Alignment">
          <p>
            <code className="text-pink-300">self-*</code> overrides the parent's
            <code className="text-pink-300">items-*</code> setting for one child.
          </p>

          <CodeBlock>{`<div class="flex items-start">
  <div>A</div>
  <div class="self-end">B is different</div>
</div>`}</CodeBlock>
        </Section>

        <Section id="flex-order" title="Visual Order">
          <p>
            <code className="text-pink-300">order-*</code> changes visual order
            without moving elements in the HTML.
          </p>

          <CodeBlock>{`<div class="flex">
  <div class="order-2">A</div>
  <div class="order-1">B</div>
</div>`}</CodeBlock>

          <Note>
            Visual reordering should be used carefully because the HTML and
            keyboard reading order can become different.
          </Note>
        </Section>

        <Section id="grid" title="Grid">
          <p>
            CSS Grid lays children out in two dimensions: rows and columns.
          </p>

          <CodeBlock>{`<div class="grid grid-cols-3 grid-rows-2 gap-4">
  <div class="col-span-2">Wide box</div>
  <div>Normal</div>
</div>`}</CodeBlock>

          <Table
            headers={["Tailwind", "CSS", "Use"]}
            rows={gridUtilities}
          />
        </Section>

        <Section id="grid-columns" title="Columns & Spans">
          <CodeBlock>{`<div class="grid grid-cols-3 gap-4">
  <div class="col-span-2">Wide</div>
  <div>Normal</div>
  <div>Normal</div>
</div>`}</CodeBlock>

          <p>
            <code className="text-pink-300">grid-cols-3</code> creates three
            columns. <code className="text-pink-300">col-span-2</code> makes an
            item occupy two of them.
          </p>
        </Section>

        <Section id="grid-custom" title="Custom Grid Tracks">
          <p>
            Bracket syntax lets you define exact track sizes when the standard
            scale is not enough.
          </p>

          <CodeBlock>{`<div class="grid grid-cols-[200px_1fr] gap-4">
  <aside>200px</aside>
  <main>Remaining space</main>
</div>`}</CodeBlock>

          <Note>
            Inside an arbitrary grid value, an underscore represents a space,
            so <code className="text-pink-300">[200px_1fr]</code> becomes
            <code className="text-pink-300">200px 1fr</code>.
          </Note>
        </Section>

        <Section id="grid-alignment" title="Grid Alignment">
          <CodeBlock>{`<div class="grid place-items-center h-screen">
  <div class="p-6 bg-blue-500 text-white rounded-xl">
    Centered!
  </div>
</div>`}</CodeBlock>

          <Table
            headers={["Utility", "Meaning"]}
            rows={[
              ["justify-items-center", "Align all items horizontally inside their cells."],
              ["justify-self-end", "Align one item horizontally inside its cell."],
              ["place-content-center", "Center the grid's content on both axes."],
              ["place-items-center", "Center every item inside its cell."],
              ["place-self-center", "Center one item inside its cell."],
            ]}
          />
        </Section>

        <Section id="grid-gallery" title="Responsive Grid Example">
          <CodeBlock>{`<div class="grid grid-cols-2 md:grid-cols-4 gap-3">
  <img class="rounded-lg" src="1.jpg" />
  <img class="rounded-lg" src="2.jpg" />
  <img class="rounded-lg" src="3.jpg" />
  <img class="rounded-lg" src="4.jpg" />
</div>`}</CodeBlock>

          <p>
            The grid starts with two columns and switches to four columns at
            the <code className="text-pink-300">md</code> breakpoint.
          </p>
        </Section>

        <Section id="flex-vs-grid" title="Flexbox or Grid?">
          <Table
            headers={["Use Flexbox when...", "Use Grid when..."]}
            rows={[
              ["Layout is mainly one row or one column.", "You control rows and columns together."],
              ["You need flexible distribution of free space.", "You need explicit track sizes."],
              ["Items should react naturally to available space.", "Items need precise placement or spanning."],
              ["Navigation bars, buttons, toolbars, simple cards.", "Dashboards, galleries, page sections, complex layouts."],
            ]}
          />

          <Note>
            A page can use both. Grid can define the large page structure while
            Flexbox handles the smaller groups inside each area.
          </Note>
        </Section>
      </div>
    </div>
  );
}

export default FlexboxGrid;