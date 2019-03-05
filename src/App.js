import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import DataUser from './Data';

const uuidv1 = require('uuid/v1');//tạo id tự động

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [], //DataUser
      searchText: "",
      EditShowForm: false,
      ObjectUserEdit: {}
    }
  }

componentWillMount = () => {
  //kiểm tra xem đã có localStorage, chưa có thì sẽ tạo mới, có rồi thì chỉ cập nhật lại
  if (localStorage.getItem('userData') === null) { //Nếu chưa có thì 
    localStorage.setItem('userData',JSON.stringify(DataUser));//tạo mới
  }
  else {
    var temp =  JSON.parse(localStorage.getItem('userData'));// có rồi thì convert từ json về mảng bình thường để duyệt bằng vòng lặp dc
    this.setState({//sét lại state
      data:temp
    });
  }
}


HideFormEditShow = () => {
  this.setState({
    EditShowForm: !this.state.EditShowForm
  });
  // console.log(user);
}

getTextSearch = (dl) => {
  //console.log(this.state.searchText);
  this.setState({
    searchText:dl
  });
}

getDataForm = (name,tel,Permission) => {
  var item = {}//Đóng gói đối tượng vào 1 khối để bắn vào cơ sở dữ liệu
      item.id = uuidv1();//tạo id tự động
      item.name = name;
      item.tel = tel;
      item.Permission = Permission;
      var items = this.state.data;//Đặt 1 biến để hứng dữ liệu từ cơ sở dữ liệu, sau đó dùng hàm push để bắn dữ liệu vào biến đó
          items.push(item);
      this.setState({
        data: items
      });
 // console.log(items);
 localStorage.setItem('userData',JSON.stringify(items));
}

ConnectTableData = (user) => {
  // console.log("Ket noi voi app ok");
  // console.log(user);
  this.setState({
    ObjectUserEdit: user
  })
 
}

GetUserEditforApp = (info) => {
  this.state.data.forEach((value,key) => {
  //  console.log("Thông tin cần sửa" + info.name);
      if (value.id === info.id) {
         value.name = info.name;
         value.tel = info.tel;
         value.Permission = info.Permission;
      }
  })
  localStorage.setItem('userData',JSON.stringify());
}

DeleteUserEX = (userId) => {
  var tempData = this.state.data; tempData = tempData.filter(item => item.id !== userId);
  this.setState({
    data:tempData
});
localStorage.setItem('userData',JSON.stringify(tempData));
  // this.state.data.forEach((value,key) => {
  //   if (value.id === userId) {

  //   }
  // })
}

  render() {
    var ketqua = [];
    this.state.data.forEach((item) => {
      if(item.name.indexOf(this.state.searchText) !== -1) {
        ketqua.push(item);
  //      console.log(ketqua);
      }
    })
    return (//File App.js là file chủ đạo trong toàn bộ hoạt động của ứng dụng, 
      //file này sẽ chứa tất cả các hàm gửi và nhận dữ liệu đến các component liên quan, 
      //với chức năng search đầu tiên sẽ kết nôi App.js với Search.js bằng từ khóa truyền biến mặc định props, componet Search.js truyền dữ liệu lại App.js 
      //thì phải thông qua  biến dữ liệu, cụ thể ở đây là dl
      //App nhận dc dl qua hàm getTextSearch và setState cho biến trung gian state, dùng để so sánh với các đối tượng trong mảng dữ liệu bằng hàm forEarch.
      //hàm forEarch sẽ in từng đối tượng trong mảng dữ liệu data ra qua biến item và so sánh với biến trung gian state đang lưu dữ liệu nhận được từ
      //componet Search.js. Nếu đúng (tức là != -1 thì đưa vào mảng kết quả, ko đúng thì bỏ qua và so sánh tiếp đến khi nào hàm forEarch chạy xong)
      <div>
        <Header/>
        <div className="searchForm">
            <div className="container">
              <div className="row">
                <Search 
                  TestConnect = {(dl) => this.getTextSearch(dl)} 
                  FormEditShow = {this.state.EditShowForm} 
                  FormEditHide = {() => this.HideFormEditShow()}
                  UserEditObject = {this.state.ObjectUserEdit}
                  GetUserEditforApp = {(info) => this.GetUserEditforApp(info)}/>
                <TableData Tabledtus = {ketqua} TableDataConnect = {(user) => this.ConnectTableData(user)} 
                  FormEditShow = {() => this.HideFormEditShow()}
                  DeleteUserEX = {(userId) => this.DeleteUserEX(userId)}/>
                <AddUser ProcessFormAddUser = {(name,tel,Permission) => this.getDataForm(name,tel,Permission)}/>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
