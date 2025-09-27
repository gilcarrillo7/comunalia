import { ButtonVariant } from "./components/shared/Button";

export const COLORS = {
  primary: "#78040a",
  secondary: "#ff671a",
  tertiary: "#fdb713",
  dark: "#333333",
  complementary: "#e92300",
  light: "#fbeade",
};
export const BUTTON_TYPES = new Map<string, ButtonVariant>([
  [COLORS.light, "outline-primary"],
  [COLORS.primary, "outline"],
  [COLORS.secondary, "primary"],
  ["#ffffff", "primary"],
]);
export const ENDPOINT = "https://www.comunalia.org.mx/wp/graphql";
