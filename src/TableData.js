import React, { Component } from 'react'
import TableDataRow from './TableDataRow';
//props.TableDataConnect
export default class TableData extends Component {
    mappingDTUS = () => this.props.Tabledtus.map((value,key) => {
            return (<TableDataRow 
                    key={key} 
                    stt={key} 
                    ten={value.name} 
                    dt={value.tel} 
                    quyen={value.Permission} 
                    id={value.id}
                    ConnectTableDataRow={(user) => this.props.TableDataConnect(value)} 
                    ShowEditForm = {() => this.props.FormEditShow()} UserDelete = {(userId) => this.props.DeleteUserEX(userId)}/>)
        })
    
  render() {
      //console.log(this.props.Tabledtus); 
      //console.log(ShowEditForm);
    return (
        <div className="col">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên</th>
              <th>Điện thoại</th>
              <th>Quyền</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {this.mappingDTUS()}
          </tbody>
        </table>
      </div>
      
    )
  }
}
