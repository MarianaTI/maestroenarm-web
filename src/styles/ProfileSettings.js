import styled from "@emotion/styled";

export const AvatarContainer = styled.div({
    margin: '24px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
});

export const Button = styled.button(
    {
        border: 'none',
        borderRadius: '16px',
        width: 276,
        height: 56,

        ":hover": {
            opacity: '.9'
        }

    },
    props => ({
        backgroundColor: props.bg,
        color: props.color,
    })
);

export const ButtonGroup = styled.div({
    margin: '24px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '24px'
});

export const ProfileSettingsForm = styled.form({
    margin: '24px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '24px'
});

export const ProfileField = styled.div({
    width: 625,
    height: 56,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 12,
    border: '0.5px solid #888',
    borderRadius: 10,
    padding: 24,
    boxShadow: '2px 3px 2px 2px rgba(0, 0, 0, 0.25)'
});