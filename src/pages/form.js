/* Admin FORM  UI*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { Form, Input, Row, Col, Select, Button, Table, Tabs,  } from 'antd';

const FormItem = Form.Item;
const { TabPane } = Tabs;

const styles = {
    customerTitleColumns: {
        fontSize: '1rem',
        fontWeight: '700'
    }
}

class AdminForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customersData: [],
            loading: false,
            customerInfo: [],
            addressInfo:[],
            visible: false,
            isDrawerVisible: false
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.addressInfo !== undefined) {
            this.setState({ addressInfo: nextProps.addressInfo.data, loading: nextProps.loading });
        }else{
           this.setState({ addressInfo: [], loading: nextProps.loading, visible: false })
        }
        if (nextProps.customerInfo !== undefined) {
            this.setState({ customerInfo: nextProps.customerInfo, loading: nextProps.loading })
        }
        if (nextProps.customerInfo === undefined) {
            this.setState({ customerInfo: [], loading: nextProps.loading, visible: false })
        }
    }

    componentDidMount() {
        // const { dispatch } = this.props;
        // dispatch({
        //     type: 'form/actionList',
        //     payload: {},
        // });
    }


    handleSubmit = (e) => {
        const { dispatch } = this.props;
        e.preventDefault();
        this.props.form.validateFields((errors, values) => {
            if (errors) {
                console.log('error');
            }
            if (!errors) {

                console.log('Received values of form: ', values);

                if (values.identityID != null) {
                    const customerObj = this.getById(values.identityID);
                    console.log('customerObj',customerObj);
                    this.getAddressById(values.identityID);

                    // dispatch({
                    //     type: 'form/Edit',
                    //     payload: obj,
                    // });
                  //  this.props.form.resetFields();

                }


            }
        });

    }

    deleteConfirm = (item) => {
        console.log(item.user_id);
        const { dispatch } = this.props;
        dispatch({
            type: 'form/remove',
            payload: item.user_id,
        });
    }

    getById = (item) => {
        debugger;
        console.log(item);
        const { dispatch } = this.props;
        this.setState({ visible: true, customerInfo: [] })
        dispatch({
            type: 'form/byId',
            payload: item,
        });
        dispatch({
            type: 'form/addressById',
            payload: item,
        });
    }
    getAddressById = (id)=> {
        debugger;
        const { dispatch } = this.props;
        this.setState({ visible: true, addressInfo: [] })
        dispatch({
            type: 'form/addressById',
            payload: id,
        });
    }
    showDrawer = () => {
        this.setState({
            isDrawerVisible: true,
        });
    };

    onClose = () => {
        this.setState({
            isDrawerVisible: false,
        });
    };

    render() {
const checkData= [
    {
        "created": "2020-01-22T14:46:52+00:00",
        "cardType": "AMEX",
        "id": "ae536569-d4f4-4d2a-9af3-2b87996e36e0",
        "lastModified": "2020-01-22T14:52:34+00:00",
        "legacyCCId": 2066,
        "cardToken": "371441WTQKW0443",
        "cardExpiryDate": "12/2030",
        "paymentType": "Credit Card",
        "primary": true
    },
    {
        "customerType": "DIY",
        "identityId": "30142db1-345b-4477-9fb3-d2a0952a7e64",
        "created": "2020-01-20T16:35:58+00:00",
        "cardType": "Master Card",
        "id": "fbe1fee4-adac-4dcf-93eb-c62c005db208",
        "lastModified": "2020-01-20T16:35:58+00:00",
        "cardExpiryDate": "12/2022",
        "cardToken": "545454GQGNIE5454",
        "paymentType": "Credit Card",
        "primary": false
    }];
        const { getFieldDecorator } = this.props.form;
        const { classes } = this.props;
        const customerInfo = this.state.customerInfo;
        const tableColumnsOfAddress = [
            {
                title: 'First Name',
                dataIndex: 'firstName',
                width: 200,
            },
            {
                title: 'Last Name',
                dataIndex: 'lastName',
                width: 200,
            },
            {
                title: 'country',
                width: 200,
                dataIndex: 'country',
            },
            {
                title: 'City',
                width: 200,
                dataIndex: 'city',
            },
            {
                title: 'State',
                width: 200,
                dataIndex: 'state',
            },
            {
                title: 'Address Type',
                dataIndex: 'addressType',
                width: 200,
            },
            {
                title: 'Phone Extension',
                dataIndex: 'phoneExtension',
                width: 200,
            },
            {
                title: 'Postal Code',
                width: 200,
                dataIndex: 'postalCode',
            },
            {
                title: 'Company Name',
                width: 200,
                dataIndex: 'companyName',
            },
            {
                title: 'Phone Number',
                dataIndex: 'phoneNumber',
                width: 200,
            },
            {
                title: 'Legacy Address Id',
                dataIndex: 'legacyAddressId',
                width: 200,
            },
        ];
        const tableColumnsOfCards = [
            {
                title: 'Customer Type',
                dataIndex: 'customerType',
                width: 200,
            },
             {
                title: 'Card Type',
                dataIndex: 'cardType',
                width: 200,
            },
            {
                title: 'Legacy CCId',
                dataIndex: 'legacyCCId',
                width: 200,
            },
            {
                title: 'Card Token',
                dataIndex: 'cardToken',
                width: 200,
            },
            {
                title: 'Card Expiry Date',
                dataIndex: 'cardExpiryDate',
                width: 200,
            },
            {
                title: 'Payment Type',
                dataIndex: 'paymentType',
                width: 200,
            },
            {
                title: 'Primary',
                //dataIndex: 'primary',
                width: 200,
                render: item => (<span>{item.primary?"Yes":"No"}</span>),
            },
           
        ]
        return (
            <Form onSubmit={this.handleSubmit} id="AdminForm" >
                <Row>
                    <Col span={6} offset={1}>
                        <FormItem>
                            {getFieldDecorator('filterType', {
                                initialValue: customerInfo.role,

                                enableReinitialize: true,
                                rules: [{
                                    required: true, message: 'Please Select a Type!',
                                }],

                            })(

                                <Select placeholder="Please Select Type" >
                                    <Select.Option value="LegacyID">LegacyID</Select.Option>
                                    <Select.Option value="identityID">UUID</Select.Option>
                                </Select>
                            )}
                        </FormItem>
                    </Col>
                    <Col span={6} offset={1}>
                        <FormItem>
                            {getFieldDecorator('identityID', {
                                initialValue: customerInfo.identityID,
                                rules: [{
                                    required: true, message: 'Please Enter Input Value!',
                                }],
                            })(
                                <Input placeholder="Enter Value" type="text" name="identityID" />
                            )}
                        </FormItem>
                    </Col>

                    <Col span={4}>
                        {/* <Button size="large" onClick = {this.handleSubmit} type="primary">Submit</Button>   */}
                        <Button type="primary" style={{
                            marginLeft: "10%",
                            marginTop: "2%"
                        }} onClick={this.handleSubmit} icon="search">Search</Button>
                    </Col>


                </Row>
                {/* 
                <Row>
                    {(!this.state.visible) && <Col span={1} offset={11}>
                            <Button size="large" onClick = {this.handleSubmit} type="primary">Submit</Button>  
                        </Col>}
                        {(this.state.visible) && <Col span={1} offset={11}>
                            <Button size="large" onClick = {this.handleSubmit} type="primary">Update</Button>  
                        </Col>}
                  
                       
                </Row>*/}
                <div style={{ background: '#fff' }}>
                
                    <Tabs defaultActiveKey="1">
                    <TabPane tab="Customer Info" key="1">
                    {customerInfo&&Object.keys(customerInfo).length > 0 ? (
                        <div> <Row type="flex" justify="start">
                                <Col span={5}>Customer Type</Col>
                                <Col span={5}>{customerInfo.custTyp}</Col>

                            </Row>
                            <Row type="flex" justify="start">
                                <Col span={5}>Legacy ID</Col>
                                <Col span={5}>{customerInfo.legacyId}</Col>
                            </Row>
                            <Row type="flex" justify="start">
                                <Col span={5}>First Name</Col>
                                <Col span={5}>{customerInfo.firstName}</Col>
                            </Row>
                            <Row type="flex" justify="start">
                                <Col span={5}>Last Name</Col>
                                <Col span={5}>{customerInfo.lastName}</Col>
                            </Row>
                            <Row type="flex" justify="start">
                                <Col span={5}>Preferred Store Id</Col>
                                <Col span={5}>{customerInfo.preferredStoreId}</Col>
                            </Row>
                            <Row type="flex" justify="start">
                                <Col span={5}>Email</Col>
                                <Col span={5}>{customerInfo.emailAddress}</Col>
                            </Row></div>):"No Data Found"}
                        </TabPane>
                        <TabPane tab="Address" key="2">
                        <Table
                        bordered
                        loading={this.state.loading}
                        columns={tableColumnsOfAddress}
                        dataSource={this.state.addressInfo}
                        size="small"
                        rowKey="id"
                    />
                        </TabPane>
                        <TabPane tab="Cards" key="3">
                        <Table
                        bordered
                        loading={this.state.loading}
                        columns={tableColumnsOfCards}
                        dataSource={checkData}
                        size="small"
                        rowKey="id"
                    />
                        </TabPane>
                    </Tabs>
                </div>
                <div>
                    {/* {customerInfo&&Object.keys(customerInfo).length > 0 ? ( <Drawer
                        title="Customer Details"
                        width={720}
                        onClose={this.onClose}
                        visible={this.state.isDrawerVisible}
                        bodyStyle={{ paddingBottom: 80 }}
                    >
                        <Form layout="vertical" hideRequiredMark>
                            <table>

                                <tbody>
                                    <tr>
                                        <th>Customer Type</th>
                                        <td>{customerInfo.custTyp}</td>
                                    </tr>
                                    <tr>
                                        <th>Legacy ID</th>
                                        <td>{customerInfo.legacyId}</td>

                                    </tr>
                                    <tr>
                                        <th>First Name</th>
                                        <td>{customerInfo.firstName}</td>
                                    </tr>
                                    <tr>
                                        <th>Last Name</th>
                                        <td>{customerInfo.lastName}</td>
                                    </tr>
                                    <tr>
                                        <th>Preferred Store Id</th>
                                        <td>{customerInfo.preferredStoreId}</td>
                                    </tr>
                                    <tr>
                                        <th>Email</th>
                                        <td>{customerInfo.emailAddress}</td>
                                    </tr>
                                </tbody>
                            </table>



                        </Form>
                        <div
                            style={{
                                position: 'absolute',
                                right: 0,
                                bottom: 0,
                                width: '100%',
                                borderTop: '1px solid #e9e9e9',
                                padding: '10px 16px',
                                background: '#fff',
                                textAlign: 'right',
                            }}
                        >
                            <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                                Cancel
            </Button>
                    
                        </div>
                    </Drawer>):""} */}
                </div>
            </Form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.form.reducerList,
        loading: state.loading.models.form,
        customerInfo: state.form.reducerbyId,
        addressInfo:state.form.reducerAddressById
    }
}
/*
export default Form.create()(
    connect(({ form }) => ({
      data: form.reducerList,                   // another way to export
   
    }))(AdminForm),
  );
*/
export default Form.create()(
    connect(mapStateToProps)(AdminForm),
);