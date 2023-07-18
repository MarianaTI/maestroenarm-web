import { CustomProfileField } from "./index.style";

export const ProfileField = ({ label, text }) => {
    return (
        <CustomProfileField>
            <strong> {label}: </strong> {text}
        </CustomProfileField>
    );
};