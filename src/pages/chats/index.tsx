import {Box} from "@mui/material";
import ActiveChat from "@/components/active-chat/ActiveChat";
import ChatsListContainer from "@/components/chats-list-container/ChatsListContainer";

export default function Chats() {
    return <Box sx={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "5vh"
    }}>
        <Box sx={{
            display: "flex",
            flexDirection: "row",
            width: "75vw",
            height: "100vh",
            border: 3,
            borderColor: "primary.main",
            borderRadius: "16px"
        }}>
            <ChatsListContainer />
            <ActiveChat />
        </Box>
    </Box>
}
