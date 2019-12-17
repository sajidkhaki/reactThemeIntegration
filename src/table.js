import React, { Component } from 'react'
const $ = require('jquery')
$.DataTable = require('datatables.net')

export default class table extends Component {

    componentDidMount() {
       // console.log(this.el)
        this.$el = $(this.el) // invoking Datatable library
        this.$el.DataTable(
            {
                data: this.props.data,
                columns: [
                    {title: "Name"},
                    {title: "Position"},
                    {title: "Office"},
                    {title: "Extn."},
                    {title: "Start date"},
                    {title: "Salary"}
                ]
            }
        )
    }

    componentWillUnmount() {
        this.$el.DataTable.destroy(true)
    }

    render() {
        return (
            <div>
                <table id="example" className="table table-bordered table-hover" width="100%" ref = {el=>this.el = el}>
                </table>
            </div>
        )
    }
}
