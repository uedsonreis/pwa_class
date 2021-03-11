import React from 'react';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

type Props = { save: (name: string, email: string, id?: string) => {}, param?: { name: string, email: string, id: string } };

export default function Form({ save, param }: Props) {

    const [id, setId] = React.useState<string | undefined>(undefined);
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');

    React.useEffect(() => {
        if (param) {
            setId(param.id);
            setName(param.name);
            setEmail(param.email);
        }
    }, [param]);

    async function handleClick() {
        if (await save(name, email, id)) {
            setName('');
            setEmail('');
            setId(undefined);
        }
    }

    return (
        <form className="create-form" autoComplete="off" noValidate>
            <TextField
                id="standard-basic" label="Name" className="form-input"
                value={name} onChange={ e => setName(e.target.value)}
            />
            <TextField
                id="standard-basic" label="Email" className="form-input"
                value={email} onChange={ e => setEmail(e.target.value)}
            />

            <Button color="primary" variant="text" onClick={handleClick}>
                { id ? ("Save") : ("Add") }
            </Button>
        </form>
    );
}