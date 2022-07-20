import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

function EmailForm() {

    const handleSend = (event) => {
        console.log("hello")
    }

    return(
        <div id= "textField">
          <Button 
            variant="contained" 
            endIcon={<SendIcon />} 
            onClick={handleSend} 
            sx={{
                marginBottom: '1%'
            }}
            >
            Send
          </Button>
          <TextField
          fullWidth
          id="outlined-textarea"
          label="Contacts us"
          placeholder="Placeholder"
          multiline
          sx={{
              backgroundColor: "white"
          }}
          />
        </div>
    
    )
}
export default EmailForm;