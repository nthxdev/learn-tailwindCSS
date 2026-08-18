import CodeBlock from "./common/CodeBlock";
import Note from "./common/Note";
import Section from "./common/Section";
import Table from "./common/Table";

const filterUtilities = [
  ["blur-sm → blur-2xl", "blur", "Blur the element."],
  ["brightness-50 / brightness-150", "brightness", "Darken or brighten the element."],
  ["contrast-125", "contrast", "Increase or decrease contrast."],
  ["drop-shadow-lg / drop-shadow-blue-500", "drop-shadow", "Shadow follows the visible shape instead of the whole box."],
  ["grayscale / grayscale-0", "grayscale", "Convert to or remove grayscale."],
  ["hue-rotate-90", "hue-rotate", "Shift colors around the hue wheel."],
  ["invert", "invert", "Invert the element's colors."],
  ["saturate-150", "saturate", "Increase or decrease color intensity."],
  ["sepia", "sepia", "Apply an old-photo tone."],
];

function Filters() {
  return (
    <div className="pages">
      <h1 className="pages-tittle text-center">Filters</h1>

      <p className="text-center text-white/60 -mt-4 mb-4 max-w-2xl px-4">
        CSS filters affect the element itself. Backdrop filters affect what is
        behind a translucent element.
      </p>

      <div className="w-full flex flex-col items-center px-4 sm:px-8 pb-24">
        <Section id="filter-reference" title="Filter Utilities">
          <Table headers={["Tailwind", "CSS", "Effect"]} rows={filterUtilities} />
        </Section>

        <Section id="filter-examples" title="Common Filters">
          <CodeBlock>{`<img
  className="grayscale hover:grayscale-0 transition"
  src="photo.jpg"
  alt="Photo"
/>

<div className="blur-sm">
  Blurred content
</div>

<div className="brightness-150">
  Brighter content
</div>`}</CodeBlock>
        </Section>

        <Section id="drop-shadow" title="Drop Shadow">
          <p>
            <code className="text-pink-300">drop-shadow-*</code> follows the
            visible shape of an image, unlike <code className="text-pink-300">shadow-*</code>,
            which follows the element's box.
          </p>

          <CodeBlock>{`<img
  className="drop-shadow-lg"
  src="character.png"
  alt="Character"
/>`}</CodeBlock>
        </Section>

        <Section id="backdrop" title="Backdrop Filters">
          <p>
            Add <code className="text-pink-300">backdrop-</code> to apply the
            effect to whatever is behind the element.
          </p>

          <CodeBlock>{`<nav className="bg-white/30 backdrop-blur-md border-b border-white/20 p-4">
  Frosted glass navbar
</nav>`}</CodeBlock>

          <Table
            headers={["Utility", "Effect"]}
            rows={[
              ["backdrop-blur-md", "Blur the background behind the element."],
              ["backdrop-brightness-75", "Darken the content behind it."],
              ["backdrop-saturate-150", "Increase saturation behind it."],
            ]}
          />

          <Note>
            The glass effect usually needs a semi-transparent background, such
            as <code className="text-pink-300">bg-white/30</code>, so the
            backdrop remains visible.
          </Note>
        </Section>

        <Section id="filter-vs-backdrop" title="Filter vs Backdrop Filter">
          <Table
            headers={["Family", "Affects"]}
            rows={[
              ["filter", "The element itself."],
              ["backdrop-filter", "Content visible behind the element."],
            ]}
          />
        </Section>
      </div>
    </div>
  );
}

export default Filters;