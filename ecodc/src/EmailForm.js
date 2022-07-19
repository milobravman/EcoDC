import TextField from '@mui/material/TextField';

function EmailForm() {
    return(
        <div id= "textField">
            <TextField
          fullWidth
          id="outlined-textarea"
          label="Contacts us"
          placeholder="Placeholder"
          multiline
          //color='white'
            />
        </div>
    
    )
}
export default EmailForm;