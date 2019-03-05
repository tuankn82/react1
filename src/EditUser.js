import React, { Component } from 'react'

export default class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.EditObjectUser.id,
            name: this.props.EditObjectUser.name,
            tel: this.props.EditObjectUser.tel,
            Permission: this.props.EditObjectUser.Permission
        }
    }
    
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        // console.log(name);
        // console.log(value);
        //this.props.getUserEdit(info)
        this.setState({
            [name]: value
        })
    }

    saveButton = () => {
        var info = {};
        info.id = this.state.id;
        info.name = this.state.name;
        info.tel = this.state.tel;
        info.Permission = this.state.Permission;
        //console.log(this.props.getUserEdit(info));
        this.props.GetUserEdit(info);
        this.props.FormEditShowHide(); //ẩn form edit
    }


  render() {
    return (
  <div className="col-12">
        <div className=" btn-success mb-3 mt-2">
            <div className="card-header text-center">Sửa user trong hệ thống</div>
            <div className="card-body btn-warning">
                <div className="form-group">
                    <input onChange = {(event) => this.isChange(event)} defaultValue = {this.props.EditObjectUser.name} type="text" name="name" className="form-control"  placeholder="Tên User" />
                </div>
                <div className="form-group">
                    <input onChange = {(event) => this.isChange(event)} defaultValue = {this.props.EditObjectUser.tel} type="text" name="tel" className="form-control"  placeholder="Điện thoại" />
                </div>    
                <div className="form-group">
                    <select onChange = {(event) => this.isChange(event)} defaultValue = {this.props.EditObjectUser.Permission} name="Permission" className="custom-select" required>
                        <option value>Chọn Quyền mặc định</option>
                        <option value={1}>Admin</option>
                        <option value={2}>Moderator</option>
                        <option value={3}>Normal</option>
                    </select>  
                </div>
                <div className="form-group">
                    <input type="button" className="btn btn-primary btn-block" value="Lưu" onClick={() => this.saveButton()}/>
                </div>
            </div>
        </div>
  </div>
    )
  }
}
