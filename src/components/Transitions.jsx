import CodeBlock from "./common/CodeBlock";
import Note from "./common/Note";
import Section from "./common/Section";
import Table from "./common/Table";

const transitionUtilities = [
  ["transition / transition-colors / transition-all / transition-none", "transition-property", "Choose which changing properties animate."],
  ["transition-discrete", "transition-behavior", "Allow discrete changes such as display changes to transition where supported."],
  ["duration-300", "transition-duration", "Set animation duration."],
  ["ease-in / ease-out / ease-in-out / ease-linear", "transition-timing-function", "Control the speed curve."],
  ["delay-150", "transition-delay", "Delay the transition before it starts."],
  ["animate-spin / animate-ping / animate-pulse / animate-bounce", "animation", "Use built-in keyframe animations."],
];

function Transitions() {
  return (
    <div className="pages">
      <h1 className="pages-tittle text-center">Transitions & Animation</h1>

      <p className="text-center text-white/60 -mt-4 mb-4 max-w-2xl px-4">
        Transitions smooth changes between states. Animations run predefined
        keyframes.
      </p>

      <div className="w-full flex flex-col items-center px-4 sm:px-8 pb-24">
        <Section id="transition-reference" title="Transition Utilities">
          <Table headers={["Tailwind", "CSS", "Use"]} rows={transitionUtilities} />
        </Section>

        <Section id="color-transition" title="A Simple Transition">
          <CodeBlock>{`<button className="bg-blue-500 hover:bg-blue-700 transition-colors duration-300 ease-in-out px-4 py-2 rounded">
  Smooth color change
</button>`}</CodeBlock>

          <Note>
            When a state variant such as <code className="text-pink-300">hover:</code>{" "}
            changes a value, add a suitable <code className="text-pink-300">transition</code>{" "}
            so the change is animated instead of instant.
          </Note>
        </Section>

        <Section id="properties" title="What Should Animate?">
          <Table
            headers={["Utility", "Best for"]}
            rows={[
              ["transition", "Commonly animated properties."],
              ["transition-colors", "Text, background, border, and other color changes."],
              ["transition-all", "Many changing properties at once."],
              ["transition-none", "Disable transitions."],
            ]}
          />
        </Section>

        <Section id="timing" title="Duration, Delay & Easing">
          <CodeBlock>{`<button className="transition-transform duration-500 delay-150 ease-out hover:scale-105">
  Delayed smooth hover
</button>`}</CodeBlock>

          <Table
            headers={["Utility", "Meaning"]}
            rows={[
              ["duration-300", "300ms transition."],
              ["delay-150", "Wait 150ms before starting."],
              ["ease-in", "Starts slowly, then speeds up."],
              ["ease-out", "Starts quickly, then slows down."],
              ["ease-in-out", "Slow → fast → slow."],
              ["ease-linear", "Constant speed."],
            ]}
          />
        </Section>

        <Section id="built-in" title="Built-in Animations">
          <CodeBlock>{`<div className="animate-spin h-6 w-6 border-4 border-blue-500 border-t-transparent rounded-full" />

<div className="animate-ping size-4 rounded-full bg-blue-500" />

<div className="animate-pulse h-4 w-32 rounded bg-white/20" />

<div className="animate-bounce">
  ↓
</div>`}</CodeBlock>

          <Table
            headers={["Utility", "Typical use"]}
            rows={[
              ["animate-spin", "Loading spinner."],
              ["animate-ping", "Notification or status indicator."],
              ["animate-pulse", "Loading skeleton."],
              ["animate-bounce", "Attention or directional hint."],
            ]}
          />
        </Section>
      </div>
    </div>
  );
}

export default Transitions;