import { FC } from "react";
import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";

const ClearAllItemsButton = styled(Button)<ButtonProps>(() => ({
  color: "#fff",
  backgroundColor: "hsl(12, 96%, 40%)",
  "&:hover": {
    backgroundColor: "hsl(12, 96%, 50%)",
  },
}));

interface ClearCartButtonProps {
  onButtonClick: () => void;
}

const ClearCartButton: FC<ClearCartButtonProps> = ({
  children,
  onButtonClick,
}) => {
  return (
    <ClearAllItemsButton variant="contained" onClick={onButtonClick}>
      {children}
    </ClearAllItemsButton>
  );
};

export default ClearCartButton;
