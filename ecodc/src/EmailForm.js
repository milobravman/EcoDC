import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';


function EmailForm() {

    const handleSend = () => {
        var response = document.querySelector("#outlined-textarea").value;
        var value = {"value": response};
        console.log(response);
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(value)
        };
        fetch('http://localhost:3001/responses',requestOptions)
            .then(sentBack => sentBack.json())
            .then(data => console.log(data))
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