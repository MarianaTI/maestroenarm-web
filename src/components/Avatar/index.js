import { AvatarWrapper, StyledAvatar } from "./index.style"

const Avatar = ({ size }) => {
    return (
        <AvatarWrapper size={size}>
            <StyledAvatar size={size}></StyledAvatar>
        </AvatarWrapper>
    )
}
export default Avatar;