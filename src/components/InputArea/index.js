import {InputContainer, InputCurrentNumber, VisorValue} from './styles';

const InputArea = ({currentNumber, visorValue}) => {
  return (
    <InputContainer >
      <InputCurrentNumber value={currentNumber} disabled />
      <VisorValue>{visorValue}</VisorValue>
    </InputContainer>
  );
}

export default InputArea;
