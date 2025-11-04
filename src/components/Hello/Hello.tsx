export default function Hello() {
  const onClick = () => {
    alert('Hello');
  };

  return <div onClick={onClick}>Hello</div>;
}
