import { Button, Layout, Typography } from "antd";

const { Content } = Layout;
const { Text } = Typography;

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const App = () => {
  const step = 1;
  return (
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
        <Button className="buttons">Previous</Button>
        <Button className="buttons">Next</Button>
      </Content>
    </Content>
  );
};

export default App;
// ctrl d for slection
