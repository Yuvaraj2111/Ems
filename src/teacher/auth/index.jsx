import { useState } from "react";
import Login from "./login";
import { BaseContainer, MidContainer } from "./styled";
const StaffAuth = () => {
    const [show, setShow] = useState(true)
    return (
        <BaseContainer >
            <MidContainer>
                <Login toggle={setShow} />
            </MidContainer>
        </BaseContainer>
    )
}
export default StaffAuth;
