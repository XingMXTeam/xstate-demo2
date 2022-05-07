import "./styles.css";
import Tab from "./Tab";
import Toggle from "./Toggle";
import TableCard from "./TableCard";
import PageContainer from "./PageContainer";

export default function App() {
  return (
    <div className="App">
      <h1>新建广告计划</h1>
      <PageContainer>
        <h2>选择推广模式</h2>
        <Tab />
      </PageContainer>

      {/* <Toggle /> */}
      <TableCard />
    </div>
  );
}
