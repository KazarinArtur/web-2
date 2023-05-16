import {Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";
import {useState} from "react";

export default function NewChat() {
    const [open, setOpen] = useState(false);

    return <>
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            height: "85vh",
            width: "15vw",
            justifyContent: "flex-end",
            alignItems: "flex-end"
        }}>
            <Button variant={"contained"} onClick={()=> { setOpen(true) }}>ADD NEW CHAT</Button>
        </Box>
        <Dialog open={open}
                onClose={() => setOpen(false)}
                aria-labelledby={"dialog-title"}
                aria-describedby={"dialog-content"}
                fullWidth>
            <DialogTitle id={"dialog-title"}>
                <Box sx={{
                    display: "flex",
                    justifyContent: "center"
                }}>
                    Create new chat
                </Box>
            </DialogTitle>
            <DialogContent id={"dialog-content"}>
                <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "1vh"
                }}>
                    <TextField label={"Chat name"} fullWidth></TextField>
                </Box>
            </DialogContent>
            <DialogActions>
                <Box sx={{
                    display: "flex",
                    width: "100vw",
                    justifyContent: "center"
                }}>
                    <Button variant={"contained"} onClick={() => setOpen(false)}>Confirm</Button>
                </Box>
            </DialogActions>
        </Dialog>
    </>
}
