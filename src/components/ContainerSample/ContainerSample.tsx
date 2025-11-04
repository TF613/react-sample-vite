type Props = {
  title: string;
  children: React.ReactElement
}

function Container({title,children}:Props){
  return(
    <div style={{background: 'red'}}>
      <span>{title}</span>
      <div>{children}</div>
    </div>
  )
}

export default function Parent(){
  return(
    <Container title="Hello">
      <p>ここの部分が背景色で囲まれます</p>
    </Container>
  )
}