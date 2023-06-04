import { Announcement_Message } from "../constants"
import { AnnouncementContainer } from "../styles/Container"

const Announcement=()=>{

    return(
        <AnnouncementContainer>
            <p>{Announcement_Message}</p>
        </AnnouncementContainer>
    )
}
export default Announcement