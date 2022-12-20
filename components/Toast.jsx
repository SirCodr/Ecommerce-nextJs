import { useState } from "react"
import Collapse from "@mui/material/Collapse"
import Alert from "@mui/material/Alert"

const Toast = () => {
  const [isOpen, setOpen] = useState(true)

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Collapse in={isOpen}>
      <Alert onClose={handleClose}>
        Error
      </Alert>
    </Collapse>
  )
}

export default Toast
