import { Button } from '@material-ui/core';
import React from 'react';

export const Submitted: React.FC<any> = ({ submit }) => {
    return (
        <div style={{ justifyContent: "center", textAlign: "center" }}>
            <h2>Information Submitted</h2>
            <h1>Thanks</h1>
            <Button type="submit" onClick={() => { submit(0) }} color="secondary" variant="outlined">Finish</Button>
        </div>
    );
};