import {Box, TextField} from "@mui/material";

export default function ChatsListContainer() {
    return <Box sx={{
        display: "flex",
        height: "10vh",
        width: "16vw",
        justifyContent: "flex-end",
        alignItems: "flex-end"
    }}>
        <TextField label={"Search chat by name"} variant={"standard"}></TextField>
    </Box>
}
