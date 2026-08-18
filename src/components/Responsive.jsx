import { useEffect, useState } from "react";
import Section from "./common/Section";
import Table from "./common/Table";
import CodeBlock from "./common/CodeBlock";
import Note from "./common/Note";

const breakpoints = [
  ["sm:", "640px"],
  ["md:", "768px"],
  ["lg:", "1024px"],
  ["xl:", "1280px"],
  ["2xl:", "1536px"],
];

const responsiveRules = [
  {
    title: "Mobile-first",
    text: "Start with the base style, then override it at larger breakpoints.",
  },
  {
    title: "Min-width behavior",
    text: "A prefix applies from that breakpoint upward until another rule overrides it.",
  },
  {
    title: "Combine utilities",
    text: "Different properties can change independently at different breakpoints.",
  },
  {
    title: "Use content to choose breakpoints",
    text: "Add a breakpoint when the layout needs it, not because a device has a specific name.",
  },
];

function Responsive() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="pages">
      <h1 className="pages-tittle text-center">Responsive Design</h1>

      <p className="text-white/60 -mt-4 mb-4 text-center max-w-2xl px-4">
        Tailwind uses responsive prefixes to change styles as the viewport
        becomes wider. The system is mobile-first.
      </p>

      <div className="w-full flex flex-col items-center px-4 sm:px-8 pb-24">
        <Section id="breakpoints" title="Breakpoints">
          <Table
            headers={["Prefix", "Minimum width"]}
            rows={breakpoints}
          />

          <p>
            These are <b>min-width</b> breakpoints. Unprefixed classes apply
            everywhere, and a prefixed utility takes effect from its breakpoint
            upward.
          </p>

          <CodeBlock>{`<div class="text-base md:text-xl lg:text-3xl">
  Text grows at larger screen sizes
</div>`}</CodeBlock>
        </Section>

        <Section id="mobile-first" title="Mobile-First Styling">
          <p>
            Write the smallest-screen layout first. Add{" "}
            <code className="text-pink-300">sm:</code>,{" "}
            <code className="text-pink-300">md:</code>,{" "}
            <code className="text-pink-300">lg:</code>, and so on only when the
            design needs to change.
          </p>

          <CodeBlock>{`<div class="flex flex-col md:flex-row gap-4">
  <div class="w-full md:w-1/2">Left</div>
  <div class="w-full md:w-1/2">Right</div>
</div>`}</CodeBlock>

          <div className="w-full max-w-2xl flex flex-col md:flex-row gap-3">
            <div className="flex-1 rounded-lg bg-blue-500 p-6 text-center text-white">
              Column A
            </div>
            <div className="flex-1 rounded-lg bg-purple-500 p-6 text-center text-white">
              Column B
            </div>
          </div>
        </Section>

        <Section id="live-demo" title="Live Breakpoint Demo">
          <p className="text-white/70 text-center">
            Resize the browser and watch the box change color at each
            breakpoint.
          </p>

          <div className="w-full max-w-xl min-h-[16rem] p-6 bg-blue-500 sm:bg-red-500 md:bg-green-500 lg:bg-yellow-500 xl:bg-purple-500 2xl:bg-orange-500 flex flex-col items-center justify-center text-center transition-colors">
            <p className="pages-tittle !text-[1.5rem] sm:!text-[2rem]">
              Responsive Box
            </p>

            <span className="text-white">
              Current viewport: {size.width}px × {size.height}px
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-2 text-xs font-mono text-white/60">
            {breakpoints.map(([prefix, width]) => (
              <span key={prefix} className="px-2 py-1 rounded bg-white/10">
                {prefix} {width}+
              </span>
            ))}
          </div>
        </Section>

        <Section id="container-queries" title="Container Queries">
          <p>
            Responsive design does not have to depend on the viewport. With
            container queries, a component can react to the width of its own
            parent.
          </p>

          <CodeBlock>{`<div class="@container">
  <div class="@md:grid @md:grid-cols-2">
    Card content
  </div>
</div>`}</CodeBlock>

          <Note>
            Viewport breakpoints answer “How wide is the screen?” Container
            queries answer “How wide is this component's parent?”
          </Note>
        </Section>

        <Section id="good-practice" title="Good Responsive Habits">
          <ul className="list-disc list-inside flex flex-col gap-2">
            {responsiveRules.map((rule) => (
              <li key={rule.title}>
                <b>{rule.title}:</b> {rule.text}
              </li>
            ))}
          </ul>
        </Section>
      </div>
    </div>
  );
}

export default Responsive;