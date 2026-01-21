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
        className="h-12 w-auto"
      />
    </div>
  );
};

export default Logo;
