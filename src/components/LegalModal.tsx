import { X } from "lucide-react";
import { ReactNode } from "react";

interface LegalModalProps {
  open: boolean;
  title: string;
  children: ReactNode;
  onClose: () => void;
}

const LegalModal = ({ open, title, children, onClose }: LegalModalProps) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-background max-w-2xl w-full mx-4 rounded-2xl shadow-xl p-6 relative animate-fade-up">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-2xl font-bold mb-4">{title}</h3>

        <div className="text-muted-foreground text-sm leading-relaxed space-y-4 max-h-[60vh] overflow-y-auto pr-2">
          {children}
        </div>
      </div>
    </div>
  );
};

export default LegalModal;
