import React from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import TourList from './components/TourList';
/*Trong folder TourList, thay vì tên TourList.js thì phải chỉ đường dẫn tuyệt đối
giống Navbar thì chỉ cần sửa tên thành index.js, khi đó thì chỉ cần đường dẫn tương đối
đến folder TourList, mặc định index.js sẽ là file quan trọng nhất để render.
1 cách nữa, vẫn giữ tên là TourList.js, lúc này sẽ thêm 1 file là package.json, trong đó
sẽ ghi "main": "TourList", lúc đó TourList.js sẽ hoạt động tương tự như index.js
*/
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <TourList />
    </React.Fragment>
  );
}

export default App;
