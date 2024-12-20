import { logo, logoText, logoTextWhite } from "@/assets/logo";
import { useTheme } from "../app/theme-provider";
import { ClassValue } from "clsx";
import useWindowSize from "@/hooks/useWindowSize";

export const CustomLogo = ({
  className = "",
  logoScreenSize = "none",
}: {
  className?: ClassValue;
  logoScreenSize?: "xl" | "md" | "lg" | "sm" | "none" | "all";
}) => {
  const { theme } = useTheme();
  const { width } = useWindowSize();

  const xlWidth = width && width < 1280;
  const lgWidth = width && width < 1024;
  const mdWidth = width && width < 768;
  const smWidth = width && width < 640;

  const switchingLogo = theme === "dark" ? logoTextWhite : logoText;

  const checkLogoType = () => {
    if (logoScreenSize || logoScreenSize !== "none") {
      if (logoScreenSize !== "all") {
        if (logoScreenSize === "sm" && smWidth) {
          return logo;
        } else if (logoScreenSize === "md" && mdWidth) {
          return logo;
        } else if (logoScreenSize === "lg" && lgWidth) {
          return logo;
        } else if (logoScreenSize === "xl" && xlWidth) {
          return logo;
        } else {
          return switchingLogo;
        }
      } else {
        return logo;
      }
    } else {
      return switchingLogo;
    }
  };
  return <img className={className as string} src={checkLogoType()} alt="" />;
};
