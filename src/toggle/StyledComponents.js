import {
  Paper,
  Typography,
  AppBar,
  Card,
  Grid,
  Container,
  List,
  ListItemIcon,
  Divider,
  CardHeader,
  Button,
} from "@material-ui/core";
//   import { Link } from "react-router-dom";
import styled from "styled-components";
import style from "styled-theming";

const getBackground = style("mode", {
  light: "#fff",
  dark: "#000",
});
const getForeground = style("mode", {
  light: "#000",
  dark: "#fff",
});
export const StyledCrossButton = styled.button`
  background: ${getBackground};
`;
export const Styleddiv = styled.div`
  background-color: ${getBackground};
  color: ${getForeground};
`;
export const StyledAppDiv = styled.div`
  background-color: ${getBackground};
  color: ${getForeground};
`;
export const StyledGrid = styled(Grid)`
  background-color: ${getBackground};
  color: ${getForeground};
`;
export const StyledInput = styled.input`
  background-color: ${getBackground};
  color: ${getForeground};
`;
export const StyledNav = styled.div`
  background-color: ${getBackground};
  color: ${getForeground};
`;

const getTypographyForeground = style("mode", {
  light: "#000",
  dark: "#EEE",
});
const getborder = style("mode", {
  light: "1px solid #000",
  dark: "1px solid #fff",
});
export const StyledTypography = styled(Typography)`
  color: ${getTypographyForeground};
`;
export const StyledButton = styled(Button)`
  color: ${getTypographyForeground};
`;
export const StyledStartedButton = styled(Button)`
  color: ${getTypographyForeground};
  border: ${getborder};
`;
