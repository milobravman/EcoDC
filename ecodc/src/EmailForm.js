import TextField from '@mui/material/TextField';

function EmailForm() {
    return(
        <div id= "textField">
            <TextField
          fullWidth
          id="outlined-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
            />
        </div>
    
    )
}
export default EmailForm;