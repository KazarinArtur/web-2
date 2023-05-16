import {Box} from "@mui/material";
import ActiveChat from "@/components/active-chat/ActiveChat";
import ChatsList from "@/components/chats-list/ChatsList";
import ChatsListContainer from "@/components/chats-list-container/ChatsListContainer";
import NewChat from "@/components/new-chat/NewChat";

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
            <Box sx={{
                display: "flex",
                flexDirection: "column"
            }}>

                <ChatsListContainer />
                <ChatsList />
                <NewChat />

            </Box>

            <ActiveChat />

        </Box>
    </Box>
}
