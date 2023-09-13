import PropTypes from "prop-types";
Main.propTypes = {
  children: PropTypes.node,
};
export default function Main({ children }) {
  return (
    <main className="bg-slate-600 min-h-screen flex flex-col justify-center items-center">{children}</main>
  );
}
