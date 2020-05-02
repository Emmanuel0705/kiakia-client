import React from 'react';
import { Card, CardBody, Table } from 'reactstrap';

const Orders = () => {
    return (
        <Card>
            <CardBody className="pb-0">
               <h5 className="card-title mt-0 mb-0 header-title">Recent Transactions</h5>

                <Table hover responsive className="mt-4">
                    <thead>
                        <tr>    
                            <th scope="col">S/N</th>
                            <th scope="col">Transaction Type</th>
                            <th scope="col">Transation ID</th>
                            <th scope="col">Transaction Amount</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Airtime Purchase</td>
                            <td>Tr4939999</td>
                            <td>$79.49</td>
                            <td><span className="badge badge-soft-warning py-1">Pending</span></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Airtime Purchase</td>
                            <td>Tr4939999</td>
                            <td>$125.49</td>
                            <td><span className="badge badge-soft-success py-1">Delivered</span>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Airtime Purchase</td>
                            <td>Tr4939999</td>
                            <td>$35.49</td>
                            <td><span className="badge badge-soft-danger py-1">Declined</span>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Airtime Purchase</td>
                            <td>Tr4939999</td>
                            <td>$49.49</td>
                            <td><span className="badge badge-soft-success py-1">Delivered</span>
                            </td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Airtime Purchase</td>
                            <td>Tr4939999</td>
                            <td>$69.49</td>
                            <td><span className="badge badge-soft-danger py-1">Declined</span>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </CardBody>
        </Card>
    );
};

export default Orders;
