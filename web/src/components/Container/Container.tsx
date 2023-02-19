import { ReactElement } from "react";

import { default as MUIContainer } from "@mui/material/Container";

export const Container = ({ children, className }: { children: ReactElement; className?: string }) => (
  <MUIContainer className={className}>{children}</MUIContainer>
);
