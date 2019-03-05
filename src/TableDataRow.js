import React, { Component } from 'react'

export default class TableDataRow extends Component {
    hienThiQuyen = () => {
        if(this.props.quyen === 1){
            return "Admin";
        }
        else if(this.props.quyen === 2){
            return "Moderator";
        }
        else{return "Normal";}
    }

    EditUserEx = () => {
        return (
            this.props.ShowEditForm(), 
            this.props.ConnectTableDataRow()
        )   
    }

  render() {
  //    console.log(this.props.ShowEditForm)
    return (
        <tr>
            <td>{this.props.stt + 1}</td>
            <td>{this.props.ten}</td>
            <td>{this.props.dt}</td>
            <td>{this.hienThiQuyen()}</td>
            <td>
            <div className="btn btn-group">
                <div className="btn btn-warning sua" onClick = {() => this.EditUserEx()}><i className="fa fa-edit">Sửa</i></div>
                <div className="btn btn-danger xoa" onClick = {(userId) => this.props.UserDelete(this.props.id)}><i className="fa fa-delete">Xóa</i></div>
            </div>
            </td>
        </tr>
    )
  }
}
