import PropTypes from "prop-types";
Footer.propTypes = {
  children: PropTypes.node,
};
export default function Footer({ children }) {
  return <div className="flex items-center justify-between">{children}</div>;
}
