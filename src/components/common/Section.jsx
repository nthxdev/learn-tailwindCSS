function Section({ id, title, children }) {
  return (
    <section id={id} className="w-full max-w-4xl mt-16 first:mt-0">
      <h2 className="text-2xl sm:text-3xl font-bold text-white border-b border-white/20 pb-3 mb-6">
        {title}
      </h2>

      <div className="flex flex-col gap-4 text-white/90 leading-relaxed">
        {children}
      </div>
    </section>
  );
}

export default Section;