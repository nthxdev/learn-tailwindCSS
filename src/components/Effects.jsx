import CodeBlock from "./common/CodeBlock";
import Note from "./common/Note";
import Section from "./common/Section";
import Table from "./common/Table";

const effectUtilities = [
  ["shadow-sm → shadow-2xl / shadow-none", "box-shadow", "Add, enlarge, or remove element shadows."],
  ["text-shadow-sm → text-shadow-lg", "text-shadow", "Add shadow behind text."],
  ["opacity-0 → opacity-100", "opacity", "Control element transparency."],
  ["mix-blend-multiply / mix-blend-screen", "mix-blend-mode", "Blend an element with content behind it."],
  ["bg-blend-overlay", "background-blend-mode", "Blend a background image with its background color."],
  ["mask-clip-border", "mask-clip", "Control the box used by a mask."],
  ["mask-add / mask-subtract", "mask-composite", "Combine mask layers."],
  ["mask-[url(star.svg)] / mask-linear-*", "mask-image", "Use an image or gradient to shape visible content."],
  ["mask-alpha / mask-luminance", "mask-mode", "Choose how mask values are interpreted."],
  ["mask-origin-border", "mask-origin", "Set the mask's positioning box."],
  ["mask-center", "mask-position", "Position the mask."],
  ["mask-repeat / mask-no-repeat", "mask-repeat", "Control mask repetition."],
  ["mask-cover / mask-contain", "mask-size", "Control mask sizing."],
  ["mask-type-luminance", "mask-type", "Set mask type for SVG mask elements."],
];

function Effects() {
  return (
    <div className="pages">
      <h1 className="pages-tittle text-center">Effects</h1>

      <p className="text-center text-white/60 -mt-4 mb-4 max-w-2xl px-4">
        Add depth, transparency, blending, and visual masking.
      </p>

      <div className="w-full flex flex-col items-center px-4 sm:px-8 pb-24">
        <Section id="effect-reference" title="Effect Utilities">
          <Table headers={["Tailwind", "CSS", "Use"]} rows={effectUtilities} />
        </Section>

        <Section id="shadows" title="Shadows">
          <CodeBlock>{`<div className="shadow-lg hover:shadow-2xl transition-shadow rounded-xl p-6">
  Card that lifts on hover
</div>`}</CodeBlock>

          <Table
            headers={["Utility", "Use"]}
            rows={[
              ["shadow-sm", "Very subtle depth."],
              ["shadow-md", "Regular elevated cards."],
              ["shadow-lg", "Menus, dialogs, floating cards."],
              ["shadow-2xl", "Strong dramatic depth."],
              ["shadow-none", "Remove the shadow."],
            ]}
          />
        </Section>

        <Section id="text-shadow" title="Text Shadow">
          <CodeBlock>{`<h1 className="text-6xl font-black text-shadow-lg">
  Deep Text
</h1>`}</CodeBlock>
        </Section>

        <Section id="opacity" title="Opacity">
          <CodeBlock>{`<div className="opacity-50">
  Half transparent
</div>

<div className="opacity-100">
  Fully visible
</div>`}</CodeBlock>
        </Section>

        <Section id="blend" title="Blending">
          <p>
            Blend modes change how an element combines with the pixels behind
            it.
          </p>

          <CodeBlock>{`<div className="mix-blend-multiply">
  Blends with the background
</div>`}</CodeBlock>
        </Section>

        <Section id="mask" title="Masks">
          <p>
            Masks control which parts of an element remain visible. A mask can
            come from an image or a gradient.
          </p>

          <CodeBlock>{`<img
  className="mask-linear-180 mask-linear-from-70%"
  src="photo.jpg"
  alt="Photo"
/>`}</CodeBlock>

          <Note>
            Think of a mask as a visibility shape: parts of the element can be
            revealed, faded, or hidden without changing the actual image.
          </Note>
        </Section>
      </div>
    </div>
  );
}

export default Effects;
