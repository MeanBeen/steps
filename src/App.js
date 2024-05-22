import { useState } from "react";
import { Button, Layout, Typography } from "antd";

const { Content } = Layout;
const { Text } = Typography;

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const App = () => {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handlePrevious = () => {
    if (step > 1) setStep((s) => s - 1);
  };
  const handleNext = () => {
    if (step < 3) setStep((s) => s + 1);
  };

  return (
    <>
      <Button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </Button>
      {isOpen && (
        <Content className="steps">
          <Content className="numbers">
            <Content className={`${step >= 1 ? "active" : ""}`}>1</Content>
            <Content className={`${step >= 2 ? "active" : ""}`}>2</Content>
            <Content className={`${step >= 3 ? "active" : ""}`}>3</Content>
          </Content>
          <Text className="message">
            Step {step}: {messages[step - 1]}
          </Text>
          <Content className="buttons">
            <Button className="buttons" onClick={handlePrevious}>
              Previous
            </Button>
            <Button className="buttons" onClick={handleNext}>
              Next
            </Button>
          </Content>
        </Content>
      )}
    </>
  );
};

export default App;
// ctrl d for slection
