import {InputContainer, InputCurrentNumber, VisorValue} from './styles';

const InputArea = ({currentNumber, visorValue}) => {
  return (
    <InputContainer >
      <InputCurrentNumber id='currentNumber' value={currentNumber} disabled />
      {/* <InputVisorValue id='visorValue' value={visorValue} disabled /> */}
      <VisorValue>{visorValue}</VisorValue>
    </InputContainer>
  );
}

export default InputArea;
