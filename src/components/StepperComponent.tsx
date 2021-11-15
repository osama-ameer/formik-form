import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { Name } from './Forms/Name';
import { Address } from './Forms/Address';
import { Confirm } from './Forms/Confirm';
import { Submitted } from './Forms/Submitted';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

function getSteps() {
    return ['Personal', 'Address', 'Confirm', 'Submitted'];
}

function getStepContent(stepIndex: number, setActiveStep: any, data: any, setData: any) {
    switch (stepIndex) {
        case 0:
            return <Name submit={setActiveStep} setData={setData} data={data} />
        case 1:
            return <Address submit={setActiveStep} setData={setData} data={data} />
        case 2:
            return <Confirm submit={setActiveStep} setData={setData} data={data} />
        case 3:
            return <Submitted submit={setActiveStep} />
        default:
            return 'Unknown stepIndex';
    }
}

export default function StepperComponent() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();
    const [data, setData] = useState({});



    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>

            <div>


                {getStepContent(activeStep, setActiveStep, data, setData)}


            </div>
        </div>
    );
}