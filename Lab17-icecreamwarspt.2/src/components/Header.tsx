import "../css/Header.css";

export interface HeaderProps {
  user: string;
}

export default function Header(props: HeaderProps) {
  return (
    <header>
      <h2>Ice Cream Wars</h2>
      <p>Welcome {props.user}</p>
    </header>
  );
}
