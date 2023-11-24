import styles from "../utilities.css";

export default function Href({ link, text, className }) {
  return (
    <a href={link} className={className}>
      {text}
    </a>
  );
}
