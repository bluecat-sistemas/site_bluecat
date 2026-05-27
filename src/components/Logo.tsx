import { cn } from "@/lib/utils";
import logoBluecat from "@/assets/logo-bluecat.png";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

const Logo = ({ className, iconOnly = false }: LogoProps) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <img 
        src={logoBluecat} 
        alt="Bluecat Logo" 
        className={cn(iconOnly ? "h-11 w-11 object-contain object-left" : "h-14 w-auto sm:h-16")}
      />
    </div>
  );
};

export default Logo;
