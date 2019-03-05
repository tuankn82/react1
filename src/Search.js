import React, { Component } from 'react'
import EditUser from './EditUser';

export default class Search extends Component {
   constructor(props) {
     super(props);
     this.state = ({
       tempValue:"",
       userObj: {} //đối tượng chứa thông tin user truyền về từ edituser.js
     })
    
   }
   
  isChange = (event) => {
   // console.log(event.target.value);
    this.setState({
      tempValue:event.target.value//nhận dc giá trị khi người dùng nhập vào ô tìm kiếm
    });
    this.props.TestConnect(this.state.tempValue);//Khi nhập ký tự thì truyền biến về App luôn để xử lý tìm kiếm, ko cần phải click Tìm
  }

  GetUserEdit  = (info) => {
    // console.log(info);
    this.setState({
      userObj: info
    });
    this.props.GetUserEditforApp(info);
   // console.log(info);
  }

  FormEditChange = () => {
    if (this.props.FormEditShow === true){
      return <EditUser FormEditShowHide = {() => this.props.FormEditHide()} EditObjectUser = {this.props.UserEditObject} 
              GetUserEdit = {(info) => this.GetUserEdit(info)}/>
    }
  }


  render() {
   // console.log(this.state.tempValue);
    return (
    <div className="col-12">
        <div className="form-group">
          <div className="btn btn-group">
            <input type="text" className="form-control" placeholder="Nhập từ khóa" onChange = {(event) => this.isChange(event)} />
            <div className="btn btn-info" onClick={(dl) => this.props.TestConnect(this.state.tempValue)}>Tìm</div>
          </div> 
        </div>  
        <hr/>
        {this.FormEditChange()}
    </div>
    )
  }
}
