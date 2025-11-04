type Props = {
  content: string;
  number: number;
}

function Text({content, number}:Props){
  return (
    <div>
      <p className="text">{content}</p>
      <p className="text">{number}</p>  
    </div>
  )
}

export default function Message(){
  const content1 = 'テスト1';
  const content2 = 'テスト2';

  return (
    <div>
      <Text content={content1} number={1}/>
      <Text content={content2} number={2}/>
    </div>
  )
}