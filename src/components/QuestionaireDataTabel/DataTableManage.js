import DataTable, { createTheme } from 'react-data-table-component';
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getQuestionData } from "../../actions/index";

createTheme('solarized', {
  text: {
    primary: '#FFFFFF',
    secondary: '#FFFFFF',
  },
  background: {
    default: '#002b36',
  },
  context: {
    background: '#cb4b16',
    text: '#FFFFFF',
  },
  divider: {
    default: '#073642',
  },
  action: {
    button: 'rgba(0,0,0,.54)',
    hover: 'rgba(0,0,0,.08)',
    disabled: 'rgba(0,0,0,.12)',
  },
});

const customStyles = {
  rows: {
    style: {
      minHeight: '72px', // override the row height
    }
  },
  headCells: {
    style: {
      paddingLeft: '8px', // override the cell padding for head cells
      paddingRight: '8px',
    },
  },
  cells: {
    style: {
      paddingLeft: '8px', // override the cell padding for data cells
      paddingRight: '8px',
    },
  },
};
const columns = [
  {
    name: '#',
    selector: 'id',
    sortable: true,
  },
  {
    name: 'Question',
    selector: 'question',
    sortable: true,
    cell: row => <div type="button" style={{width: '100%'}}>{row.question}</div>,
  },
  {
    name: 'Category',
    selector: 'category',
    sortable: true,
  },
  {
    name: 'State',
    selector: 'state',
    sortable: true,
  },
  {
    name: 'Question Group',
    selector: 'questionGroup',
    sortable: true,
  },
  {
    name: 'License',
    selector: 'license',
    sortable: true,
  },
  {
    name: 'Status',
    selector: 'status',
    sortable: true
  },
  {
    name: 'Display',
    selector: 'display',
    sortable: true,
    cell: row => <button type="button" style={{color: '#4CAF50'}}>{row.display}</button>,  
  },
  {
    name: 'Action',
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
    cell: row => <div style={{color: 'grey'}}><strong>...</strong></div> 
  },
];

const tableData = {
  columns:columns,
  data:[]
};

export class DataTableManage extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount() {
    this.props.getQuestionData();
  }
  render() {
    tableData.data = this.props.questionData && this.props.questionData;
    let questionData = this.props.questionData && this.props.questionData;
    return (
      <DataTableExtensions {...tableData}>
        <DataTable
        title="Overview"
        selectableRows
        columns={columns}
        data={questionData}
        theme="dark"
        customStyles={customStyles}
        pagination
        highlightOnHover
     />
      </DataTableExtensions>
    );
  }
}

function mapStateToProps(state) {
  return {
    questionData: state.questionData
  };
}
export default connect(
  mapStateToProps,
  { getQuestionData }
)(DataTableManage);
