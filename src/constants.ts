import { ButtonVariant } from "./components/shared/Button";

export const COLORS = {
  primary: "#78040A",
  secondary: "#FF671A",
  tertiary: "#FDB713",
  dark: "#333333",
  complementary: "#E92300",
  light: "#FBEADE",
};
export const BUTTON_TYPES = new Map<string, ButtonVariant>([
  [COLORS.light, "outline-primary"],
  [COLORS.primary, "outline"],
  [COLORS.secondary, "primary"],
  ["white", "primary"],
]);
