import React, { Component } from 'react'

export default class AddUser extends Component {
    constructor(props){
        super(props);
            this.state = {
                trangThaiChinhSua : false
                // id: "",
                // name: "",
                // tel: "",
                // Permission: ""
            }
    }

    thayDoiTrangThai = () => {
        this.setState(
            {
                trangThaiChinhSua : !this.state.trangThaiChinhSua
            }
        );
    }

    hienThiNut = () => {
        if(this.state.trangThaiChinhSua === true){//bắt buộc phải viết hàm arrow function khi thực thi () => this.thayDoiTrangThai(), nếu chỉ viết onClick = this.thayDoiTrangThai() thì hàm sẽ tự động chạy ko chờ click sẽ gây ra lỗi.
            return (<div className="btn btn-block btn-outline-secondary" onClick = {() => this.thayDoiTrangThai()}> Đóng lại</div>);
        }
        else {
            return (<div className="btn btn-block btn-outline-info" onClick = {() => this.thayDoiTrangThai()}> Thêm mới</div>);
        }
       
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        // console.log(name);
        // console.log(value);
        this.setState({
            [name]:value
        });

    }

    hienThiForm = () => {
            if(this.state.trangThaiChinhSua === true){//bắt buộc phải viết hàm arrow function khi thực thi () => this.thayDoiTrangThai(), nếu chỉ viết onClick = this.thayDoiTrangThai() thì hàm sẽ tự động chạy ko chờ click sẽ gây ra lỗi.
                return (
                <div className="col-12">
                    <form>
                    <div className="card border-primary mb-3 mt-2">
                        <div className="card-header">Thêm mới user vào hệ thống</div>
                        <div className="card-body">
                            <div className="form-group">
                                <input type="text" name="name" className="form-control"  placeholder="Tên User" onChange = {(event) => {this.isChange(event)}}/>
                            </div>
                            <div className="form-group">
                                <input type="text" name="tel" className="form-control"  placeholder="Điện thoại" onChange = {(event) => {this.isChange(event)}}/>
                            </div>    
                            <div className="form-group">
                                <select name="Permission" onChange = {(event) => {this.isChange(event)}} className="custom-select" required>
                                <option value>Chọn Quyền mặc định</option>
                                <option value={1}>Admin</option>
                                <option value={2}>Moderator</option>
                                <option value={3}>Normal</option>
                                </select>  
                            </div>
                            <div className="form-group">
                                <input type="reset" className="btn btn-primary btn-block" onClick = {(name,tel,Permission) => {this.props.ProcessFormAddUser(this.state.name, this.state.tel, this.state.Permission)}} value="Thêm mớie"/>

                            </div>
                        </div>
                    </div>
                    </form>
              </div>);
            }
        }
  render() {
    return (
        
        <div>
            {this.hienThiNut()}
            {this.hienThiForm()}
        </div>
      
    )
  }
}
