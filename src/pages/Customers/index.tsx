import React from 'react';
import { Card, CardContent, CardHeader } from '@material-ui/core';
import firebase from 'firebase/app';
import 'firebase/firestore';

import { Customer } from '../../types';
import CustomerList from './List';
import CustomerForm from './Form';
import { GridRowParams } from '@material-ui/data-grid';

export default function Customers() {

    const [customers, setCustomers] = React.useState<Customer[]>([]);
    const [selected, setSelected] = React.useState<Customer | undefined>();

    React.useEffect(() => {
        firebase.firestore().collection('customers').get().then(response => {
            setCustomers(
                response.docs.map(doc => (
                    { ...doc.data(), id: doc.id } as Customer
                ))
            );
        });
    }, []);

    function handleRowClick(param: GridRowParams) {
        setSelected({ ...param.row } as Customer);
    }

    async function handleNew(name: string, email: string, id?: string): Promise<boolean> {
        if (!name || name.trim() === '') {
            alert("Name is required!");
            return false;
        }
        
        if (!email || !email.includes('@')) {
            alert("Email format is invalid!");
            return false;
        }

        const newCustomer = { name, email } as Customer;

        if (id) {
            firebase.firestore().collection('customers').doc(id).set(newCustomer);
            const list = customers.filter(c => c.id !== id);
            setCustomers([ ...list, { ...newCustomer, id } ]);
        } else {
            const document = await firebase.firestore().collection('customers').add(newCustomer);
            setCustomers([ ...customers, { ...newCustomer, id: document.id } ]);
        }
        return true;
    }

    return (
        <Card className="page-container">
            <CardHeader title="Customers List" />

            <CustomerForm save={handleNew} param={selected} />

            <CardContent>
                <CustomerList customers={customers} clickOnRow={handleRowClick} />
            </CardContent>
        </Card>
    );
}