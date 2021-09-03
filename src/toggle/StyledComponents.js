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
} from "@material-ui/core";
//   import { Link } from "react-router-dom";
import styled from "styled-components";
import style from "styled-theming";

const getBackground = style("mode", {
  light: "#eaeaea",
  dark: "#202020",
});
const getForeground = style("mode", {
  light: "#000",
  dark: "#EEE",
});
export const Styleddiv = styled.div`
  background-color: ${getBackground};
  color: ${getForeground};
`;
export const StyledSkillsMainGrid = styled(Grid)`
  background-color: ${getBackground};
  color: ${getForeground};
`;
