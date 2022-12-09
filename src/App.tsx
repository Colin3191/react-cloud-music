import { IconStyle } from "./assets/iconfont/iconfont";
import { GlobalStyle } from "./style";
import route from './routes'
import {RouterProvider} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      <IconStyle></IconStyle>
      <RouterProvider router={route}/>
    </div>
  );
}

export default App;
