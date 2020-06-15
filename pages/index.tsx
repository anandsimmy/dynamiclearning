import Workbook from "../src/components/workbook";
import { Provider } from "react-redux";
import store from "../src/redux/stores";

const WorkbookPage = () => {
  return (
    <Provider store={store}>
      <Workbook />
    </Provider>
  );
};

export default WorkbookPage;
