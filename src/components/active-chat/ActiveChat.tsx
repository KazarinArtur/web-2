import {Box, TextField, Button} from "@mui/material";
import MessageItem from "@/components/message-item/MessageItem";

export default function ActiveChat() {
    return <Box sx={{
        display: "flex",
        flexDirection: "column"
    }}>
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            height: "5vh",
            width: "40vw",
            alignItems: "flex-end",
            justifyContent: "flex-end",
            fontSize: 30
        }}>
            Chat name: Test
        </Box>
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            height: "10vh",
            width: "20vw",
            alignItems: "flex-end",
            justifyContent: "flex-end",
            fontSize: 20
        }}>
            Participants:
        </Box>
        <Box sx={{
            display: "flex",
            flexDirection: "row",
            height: "80vh",
            width: "50vw",
            alignItems: "flex-end",
            justifyContent: "flex-end"
        }}>
            <TextField label={"Enter your message"} variant={"standard"} sx={{width: "20vw"}}></TextField>
            <Button variant={"contained"}>SEND MESSAGE</Button>
        </Box>
    </Box>
}
