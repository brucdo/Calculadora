import { useState } from 'react';
import Button from './components/Button';
import InputArea from './components/InputArea';
import {Container, Content, Row} from './styles';


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');
  const [visorValue, setVisorValue] = useState('');


  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`);
  }

  const handleCancelEntry = () => {
    setCurrentNumber(currentNumber.slice(0,currentNumber.length-1));
  }

  const handleClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
    setVisorValue('');
  }

  const handleSimpleClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  }

  const handleEquals = () => {
    if(firstNumber !== '0' && operation !== '' && currentNumber !== ''){
      switch(operation){
        case '+':
          setVisorValue(prev => `${prev}${currentNumber}`);
          handleSumNumbers();
          break;
        case '-':
          setVisorValue(prev => `${prev}${currentNumber}`);
          handleMinusNumbers();
          break;
        case '/':
          setVisorValue(prev => `${prev}${currentNumber}`);
          handleDivisionNumbers();
          break;
        case '*':
          setVisorValue(prev => `${prev}${currentNumber}`);
          handleMultNumbers();
          break;
        default:
          break;
      }
    }
  }

  const handleSumNumbers = () => {
    if(firstNumber==='0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+');
      setVisorValue(`${currentNumber}+`);
    }else{
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setVisorValue(prev => `${prev}=${sum}`);
      handleSimpleClear();
    }
  }

  const handleMinusNumbers = () => {
    if(firstNumber==='0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-');
      setVisorValue(`${currentNumber}-`);
    }else{
      const minus = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(minus));
      setVisorValue(prev => `${prev}=${minus}`);
      setOperation('');
    }
  }

  const handleMultNumbers = () => {
    if(firstNumber==='0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('*');
      setVisorValue(`${currentNumber}*`);
    }else{
      const mult = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(mult));
      setVisorValue(prev => `${prev}=${mult}`);
      setOperation('');
    }
  }

  const handleDivisionNumbers = () => {
    if(firstNumber==='0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/');
      setVisorValue(`${currentNumber}/`);
    }else{
      const division = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(division));
      setVisorValue(prev => `${prev}=${division}`);
      setOperation('');
    }
  }

  //TODO: Criar tbm o modo que exibi o operador escolhido na tela, acredito que agora exibe o '0'

  return (
    <Container >
      <Content>
        <InputArea currentNumber={currentNumber} visorValue={visorValue} />
        <Row>
          <Button label="*" onClick={handleMultNumbers} />
          <Button label="/" onClick={handleDivisionNumbers} />
          <Button label="CE" onClick={handleCancelEntry} />
          <Button label="C" onClick={handleClear} />
        </Row>
        <Row>
          <Button label="7" onClick={()=> handleAddNumber('7')} />
          <Button label="8" onClick={()=> handleAddNumber('8')} />
          <Button label="9" onClick={()=> handleAddNumber('9')} />
          <Button label="-" onClick={handleMinusNumbers} />
        </Row>
        <Row>
          <Button label="4" onClick={()=> handleAddNumber('4')} />
          <Button label="5" onClick={()=> handleAddNumber('5')} />
          <Button label="6" onClick={()=> handleAddNumber('6')} />
          <Button label="+" onClick={handleSumNumbers} />
        </Row>
        <Row>
          <Button label="1" onClick={()=> handleAddNumber('1')} />
          <Button label="2" onClick={()=> handleAddNumber('2')} />
          <Button label="3" onClick={()=> handleAddNumber('3')} />
          <Button label="=" onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
