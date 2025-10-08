import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface ProductModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  ctaText: string;
}

export function ProductModal({
  open,
  onOpenChange,
  icon: Icon,
  title,
  description,
  features,
  ctaText,
}: ProductModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]" data-testid="dialog-product">
        <DialogHeader>
          <div className="flex items-center gap-4 mb-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary">
              <Icon className="h-6 w-6 text-primary-foreground" />
            </div>
            <DialogTitle className="text-2xl font-heading">{title}</DialogTitle>
          </div>
          <DialogDescription className="text-base leading-relaxed pt-2">
            {description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 pt-4">
          <div>
            <h4 className="font-semibold mb-3">Key Features:</h4>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-3 pt-4">
            <Button className="flex-1" data-testid="button-get-started-modal">
              Get Started
            </Button>
            <Button variant="outline" className="flex-1" data-testid="button-learn-more-modal">
              {ctaText}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
