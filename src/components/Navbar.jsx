export default function Hero() {
  return (
    <section id="hero" className="relative">
      <div className="relative w-full max-w-6xl mx-auto bg-[var(--ivory)] border border-[var(--wine)]">
        <CornerOrnaments />
      </div>
    </section>
  );
}

/* ========= ORNAMENTS ========= */

function CornerOrnaments() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute top-6 inset-x-6 flex justify-between">
        <Corner type="tl" />
        <Corner type="tr" />
      </div>
      <div className="absolute bottom-6 inset-x-6 flex justify-between">
        <Corner type="bl" />
        <Corner type="br" />
      </div>
    </div>
  );
}

function Corner({ type }) {
  const map = {
    tl: "border-t border-l",
    tr: "border-t border-r",
    bl: "border-b border-l",
    br: "border-b border-r",
  };

  return (
    <div
      className={`h-10 w-10 sm:h-12 sm:w-12 ${map[type]} border-[var(--wine)]`}
    />
  );
}
