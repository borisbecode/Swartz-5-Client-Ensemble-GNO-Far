import * as React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'

import Box from '@mui/material/Box'

import Typography from '@mui/material/Typography'

import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepButton from '@mui/material/StepButton'
import Button from '@mui/material/Button'

function Don_etape() {
  const matches = useMediaQuery('(min-width:900px)')
  const steps = [
    {
      label: 'Télécharger le PDF',
      description: `Télécharger le PDF en bas de page.`,
    },
    {
      label: "Nous l'envoyer",
      description:
        "Vous pouvez nous l'envoyer à l'adresse email : ensemblegnofar@gmail.com",
    },
    {
      label: 'Merci ! ',
      description: `Merci ! Nous revenons vers vous.`,
    },
  ]
  const [activeStep, setActiveStep] = React.useState(0)
  const [completed, setCompleted] = React.useState({})

  const totalSteps = () => {
    return steps.length
  }

  const completedSteps = () => {
    return Object.keys(completed).length
  }

  const isLastStep = () => {
    return activeStep === totalSteps() - 1
  }

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps()
  }

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1
    setActiveStep(newActiveStep)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleStep = (step) => () => {
    setActiveStep(step)
  }

  const handleComplete = () => {
    const newCompleted = completed
    newCompleted[activeStep] = true
    setCompleted(newCompleted)
    handleNext()
  }

  const handleReset = () => {
    setActiveStep(0)
    setCompleted({})
  }

  return (
    <Box sx={{ width: '100%', mt: 5, pt: 5 }}>
      <Stepper
        nonLinear
        activeStep={activeStep}
        orientation={matches ? '' : 'vertical'}
      >
        {steps.map((step, index) => (
          <Step key={step.label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {step.label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        <React.Fragment>
          <Typography sx={{ mt: 4, mb: 1 }}>
            {' '}
            {steps[activeStep].description}
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 5 }}>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Précédent
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleNext} sx={{ mr: 1 }}>
              Suivant
            </Button>
          </Box>
        </React.Fragment>
      </div>
    </Box>
  )
}

export default Don_etape
