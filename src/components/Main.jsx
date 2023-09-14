import PropTypes from "prop-types";
Main.propTypes = {
  children: PropTypes.node,
};
export default function Main({ children }) {
  return (
    <main className="bg-slate-600 min-h-screen flex flex-col justify-center items-center gap-[40px]">
      <div className="max-w-7xl">{children}</div>
    </main>
  );
}
