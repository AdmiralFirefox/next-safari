import { FC } from "react";
import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";

const ButtonAccount = styled(Button)<ButtonProps>(() => ({
  color: "#000",
  width: "100%",
  fontWeight: 700,
  backgroundColor: "hsl(50, 100%, 54%)",
  padding: "0.7em",
  "&:hover": {
    backgroundColor: "hsl(50, 100%, 45%)",
  },
}));

interface AccountButtonProps {
  onButtonClick: () => Promise<void>;
}

const AccountButton: FC<AccountButtonProps> = ({ children, onButtonClick }) => {
  return (
    <ButtonAccount variant="contained" onClick={onButtonClick}>
      {children}
    </ButtonAccount>
  );
};

export default AccountButton;
