import React, { Component } from 'react'

export default class table extends Component {

    componentDidMount() {

        let script = document.createElement('script')
        script.src = `js/table`
        script.async = true
        document.body.appendChild(script)
    }
    render() {
        return (
            <div>
                <div className="content-wrapper">
                    {/* Content Header (Page header) */}
                    <section className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1>DataTables</h1>
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item"><a href="fake_url">Home</a></li>
                                        <li className="breadcrumb-item active">DataTables</li>
                                    </ol>
                                </div>
                            </div>
                        </div>{/* /.container-fluid */}
                    </section>
                    {/* Main content */}
                    <section className="content">
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">DataTable with minimal features &amp; hover style</h3>
                                    </div>
                                    {/* /.card-header */}
                                    <div className="card-body">
                                        <table id="example2" className="table table-bordered table-hover">
                                            <thead>
                                                <tr>
                                                    <th>Rendering engine</th>
                                                    <th>Browser</th>
                                                    <th>Platform(s)</th>
                                                    <th>Engine version</th>
                                                    <th>CSS grade</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Trident</td>
                                                    <td>Internet
                                                      Explorer 4.0
                                                    </td>
                                                    <td>Win 95+</td>
                                                    <td> 4</td>
                                                    <td>X</td>
                                                </tr>
                                                <tr>
                                                    <td>Trident</td>
                                                    <td>Internet
                                                      Explorer 5.0
                  </td>
                                                    <td>Win 95+</td>
                                                    <td>5</td>
                                                    <td>C</td>
                                                </tr>
                                                <tr>
                                                    <td>Trident</td>
                                                    <td>Internet
                                                      Explorer 5.5
                  </td>
                                                    <td>Win 95+</td>
                                                    <td>5.5</td>
                                                    <td>A</td>
                                                </tr>
                                                <tr>
                                                    <td>Trident</td>
                                                    <td>Internet
                                                      Explorer 6
                  </td>
                                                    <td>Win 98+</td>
                                                    <td>6</td>
                                                    <td>A</td>
                                                </tr>
                                                <tr>
                                                    <td>Trident</td>
                                                    <td>Internet Explorer 7</td>
                                                    <td>Win XP SP2+</td>
                                                    <td>7</td>
                                                    <td>A</td>
                                                </tr>
                                                <tr>
                                                    <td>Trident</td>
                                                    <td>AOL browser (AOL desktop)</td>
                                                    <td>Win XP</td>
                                                    <td>6</td>
                                                    <td>A</td>
                                                </tr>
                                                <tr>
                                                    <td>Gecko</td>
                                                    <td>Firefox 1.0</td>
                                                    <td>Win 98+ / OSX.2+</td>
                                                    <td>1.7</td>
                                                    <td>A</td>
                                                </tr>
                                                <tr>
                                                    <td>Gecko</td>
                                                    <td>Firefox 1.5</td>
                                                    <td>Win 98+ / OSX.2+</td>
                                                    <td>1.8</td>
                                                    <td>A</td>
                                                </tr>
                                                <tr>
                                                    <td>Gecko</td>
                                                    <td>Firefox 2.0</td>
                                                    <td>Win 98+ / OSX.2+</td>
                                                    <td>1.8</td>
                                                    <td>A</td>
                                                </tr>
                                                <tr>
                                                    <td>Gecko</td>
                                                    <td>Netscape Browser 8</td>
                                                    <td>Win 98SE+</td>
                                                    <td>1.7</td>
                                                    <td>A</td>
                                                </tr>
                                                <tr>
                                                    <td>Gecko</td>
                                                    <td>Netscape Navigator 9</td>
                                                    <td>Win 98+ / OSX.2+</td>
                                                    <td>1.8</td>
                                                    <td>A</td>
                                                </tr>
                                                <tr>
                                                    <td>Gecko</td>
                                                    <td>Mozilla 1.0</td>
                                                    <td>Win 95+ / OSX.1+</td>
                                                    <td>1</td>
                                                    <td>A</td>
                                                </tr>
                                                <tr>
                                                    <td>Gecko</td>
                                                    <td>Mozilla 1.1</td>
                                                    <td>Win 95+ / OSX.1+</td>
                                                    <td>1.1</td>
                                                    <td>A</td>
                                                </tr>
                                                <tr>
                                                    <td>Gecko</td>
                                                    <td>Mozilla 1.2</td>
                                                    <td>Win 95+ / OSX.1+</td>
                                                    <td>1.2</td>
                                                    <td>A</td>
                                                </tr>
                                                <tr>
                                                    <td>Gecko</td>
                                                    <td>Mozilla 1.3</td>
                                                    <td>Win 95+ / OSX.1+</td>
                                                    <td>1.3</td>
                                                    <td>A</td>
                                                </tr>
                                                <tr>
                                                    <td>Gecko</td>
                                                    <td>Mozilla 1.4</td>
                                                    <td>Win 95+ / OSX.1+</td>
                                                    <td>1.4</td>
                                                    <td>A</td>
                                                </tr>
                                                <tr>
                                                    <td>Gecko</td>
                                                    <td>Mozilla 1.5</td>
                                                    <td>Win 95+ / OSX.1+</td>
                                                    <td>1.5</td>
                                                    <td>A</td>
                                                </tr>
                                                <tr>
                                                    <td>Gecko</td>
                                                    <td>Mozilla 1.6</td>
                                                    <td>Win 95+ / OSX.1+</td>
                                                    <td>1.6</td>
                                                    <td>A</td>
                                                </tr>
                                                <tr>
                                                    <td>Gecko</td>
                                                    <td>Mozilla 1.7</td>
                                                    <td>Win 98+ / OSX.1+</td>
                                                    <td>1.7</td>
                                                    <td>A</td>
                                                </tr>
                                                <tr>
                                                    <td>Gecko</td>
                                                    <td>Mozilla 1.8</td>
                                                    <td>Win 98+ / OSX.1+</td>
                                                    <td>1.8</td>
                                                    <td>A</td>
                                                </tr>
                                                <tr>
                                                    <td>Gecko</td>
                                                    <td>Seamonkey 1.1</td>
                                                    <td>Win 98+ / OSX.2+</td>
                                                    <td>1.8</td>
                                                    <td>A</td>
                                                </tr>
                                                <tr>
                                                    <td>Gecko</td>
                                                    <td>Epiphany 2.20</td>
                                                    <td>Gnome</td>
                                                    <td>1.8</td>
                                                    <td>A</td>
                                                </tr>
                                                <tr>
                                                    <td>Webkit</td>
                                                    <td>Safari 1.2</td>
                                                    <td>OSX.3</td>
                                                    <td>125.5</td>
                                                    <td>A</td>
                                                </tr>
                                                <tr>
                                                    <td>Webkit</td>
                                                    <td>Safari 1.3</td>
                                                    <td>OSX.3</td>
                                                    <td>312.8</td>
                                                    <td>A</td>
                                                </tr>
                                                <tr>
                                                    <td>Webkit</td>
                                                    <td>Safari 2.0</td>
                                                    <td>OSX.4+</td>
                                                    <td>419.3</td>
                                                    <td>A</td>
                                                </tr>
                                                <tr>
                                                    <td>Webkit</td>
                                                    <td>Safari 3.0</td>
                                                    <td>OSX.4+</td>
                                                    <td>522.1</td>
                                                    <td>A</td>
                                                </tr>
                                                <tr>
                                                    <td>Webkit</td>
                                                    <td>OmniWeb 5.5</td>
                                                    <td>OSX.4+</td>
                                                    <td>420</td>
                                                    <td>A</td>
                                                </tr>
                                                <tr>
                                                    <td>Webkit</td>
                                                    <td>iPod Touch / iPhone</td>
                                                    <td>iPod</td>
                                                    <td>420.1</td>
                                                    <td>A</td>
                                                </tr>
                                                <tr>
                                                    <td>Webkit</td>
                                                    <td>S60</td>
                                                    <td>S60</td>
                                                    <td>413</td>
                                                    <td>A</td>
                                                </tr>
                                                <tr>
                                                    <td>Presto</td>
                                                    <td>Opera 7.0</td>
                                                    <td>Win 95+ / OSX.1+</td>
                                                    <td>-</td>
                                                    <td>A</td>
                                                </tr>
                                                <tr>
                                                    <td>Presto</td>
                                                    <td>Opera 7.5</td>
                                                    <td>Win 95+ / OSX.2+</td>
                                                    <td>-</td>
                                                    <td>A</td>
                                                </tr>
                                                <tr>
                                                    <td>Presto</td>
                                                    <td>Opera 8.0</td>
                                                    <td>Win 95+ / OSX.2+</td>
                                                    <td>-</td>
                                                    <td>A</td>
                                                </tr>
                                                <tr>
                                                    <td>Presto</td>
                                                    <td>Opera 8.5</td>
                                                    <td>Win 95+ / OSX.2+</td>
                                                    <td>-</td>
                                                    <td>A</td>
                                                </tr>
                                                <tr>
                                                    <td>Presto</td>
                                                    <td>Opera 9.0</td>
                                                    <td>Win 95+ / OSX.3+</td>
                                                    <td>-</td>
                                                    <td>A</td>
                                                </tr>
                                                <tr>
                                                    <td>Presto</td>
                                                    <td>Opera 9.2</td>
                                                    <td>Win 88+ / OSX.3+</td>
                                                    <td>-</td>
                                                    <td>A</td>
                                                </tr>
                                                <tr>
                                                    <td>Presto</td>
                                                    <td>Opera 9.5</td>
                                                    <td>Win 88+ / OSX.3+</td>
                                                    <td>-</td>
                                                    <td>A</td>
                                                </tr>
                                                <tr>
                                                    <td>Presto</td>
                                                    <td>Opera for Wii</td>
                                                    <td>Wii</td>
                                                    <td>-</td>
                                                    <td>A</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    {/* /.card-body */}
                                </div>
                            </div>
                            {/* /.col */}
                        </div>
                        {/* /.row */}
                    </section>
                    {/* /.content */}
                </div>
            </div>

        )
    }
}
