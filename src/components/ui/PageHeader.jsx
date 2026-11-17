// Reusable page heading band (green) shown at the top of inner pages.
export default function PageHeader({ title, subtitle }) {
  return (
    <div className="bg-primary py-14 text-center text-white">
      <div className="container">
        <h1 className="text-3xl font-bold text-white md:text-4xl">{title}</h1>
        {subtitle && <p className="mx-auto mt-3 max-w-2xl text-white/80">{subtitle}</p>}
      </div>
    </div>
  );
}
