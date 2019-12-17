import React, { Component } from 'react'
const $ = require('jquery')
$.DataTable = require('datatables.net')

export default class table extends Component {

    componentDidMount(props) {
        console.log(this.el)
        console.log(this.props)
        this.$el = $(this.el)  // invoking Datatable library
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
            <div className="card-body">
                <div className="row">
                    <div className="col-md-12">
                        <table id="example1" className="table table-striped table-bordered table-hover" ref = {el=>this.el = el}>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
