import CodeBlock from "./common/CodeBlock";
import Note from "./common/Note";
import Section from "./common/Section";
import Table from "./common/Table";

const transformUtilities = [
  ["backface-hidden", "backface-visibility", "Hide the back face of a transformed element."],
  ["perspective-distant / perspective-[800px]", "perspective", "Add depth for 3D transforms."],
  ["perspective-origin-center", "perspective-origin", "Choose where the 3D perspective originates."],
  ["rotate-45 / -rotate-90", "rotate", "Rotate an element."],
  ["scale-95 / scale-110 / scale-x-50", "scale", "Resize uniformly or along one axis."],
  ["skew-x-6 / skew-y-3", "skew", "Slant an element along an axis."],
  ["transform / transform-none", "transform", "Enable or reset transforms."],
  ["origin-top-left / origin-center", "transform-origin", "Choose the pivot point for transforms."],
  ["transform-3d", "transform-style", "Let children keep their own 3D positioning."],
  ["translate-x-4 / -translate-y-1/2", "translate", "Move visually without changing normal layout flow."],
  ["zoom-150", "zoom", "Visually zoom the element."],
];

function Transforms() {
  return (
    <div className="pages">
      <h1 className="pages-tittle text-center">Transforms</h1>

      <p className="text-center text-white/60 -mt-4 mb-4 max-w-2xl px-4">
        Move, rotate, scale, skew, and create depth without changing normal
        layout flow.
      </p>

      <div className="w-full flex flex-col items-center px-4 sm:px-8 pb-24">
        <Section id="transform-reference" title="Transform Utilities">
          <Table headers={["Tailwind", "CSS", "Use"]} rows={transformUtilities} />
        </Section>

        <Section id="translate" title="Translate">
          <p>
            Translate moves an element visually while its original layout
            position remains unchanged.
          </p>

          <CodeBlock>{`<div className="relative">
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
    Truly centered
  </div>
</div>`}</CodeBlock>

          <Note>
            The common centering pattern is{" "}
            <code className="text-pink-300">top-1/2 left-1/2</code> plus the
            negative half-size translations.
          </Note>
        </Section>

        <Section id="scale-rotate" title="Scale & Rotate">
          <CodeBlock>{`<div className="hover:scale-105 hover:rotate-1 transition-transform">
  Card that pops on hover
</div>`}</CodeBlock>

          <Table
            headers={["Utility", "Effect"]}
            rows={[
              ["scale-95", "Shrink slightly."],
              ["scale-110", "Grow to 110%."],
              ["scale-x-50", "Scale horizontally to 50%."],
              ["rotate-45", "Rotate 45 degrees."],
              ["-rotate-90", "Rotate 90 degrees in the opposite direction."],
            ]}
          />
        </Section>

        <Section id="origin" title="Transform Origin">
          <p>
            <code className="text-pink-300">origin-*</code> sets the pivot point
            used for rotation and scaling.
          </p>

          <CodeBlock>{`<div className="origin-top-left hover:rotate-6 transition-transform">
  Rotates around the top-left corner.
</div>`}</CodeBlock>
        </Section>

        <Section id="skew" title="Skew">
          <CodeBlock>{`<div className="skew-x-6">
  Slanted horizontally
</div>

<div className="skew-y-3">
  Slanted vertically
</div>`}</CodeBlock>
        </Section>

        <Section id="three-d" title="3D Transforms">
          <p>
            Perspective controls depth, while{" "}
            <code className="text-pink-300">transform-3d</code> lets children
            preserve their 3D positioning.
          </p>

          <CodeBlock>{`<div className="perspective-[800px]">
  <div className="transform-3d">
    3D content
  </div>
</div>`}</CodeBlock>
        </Section>
      </div>
    </div>
  );
}

export default Transforms;