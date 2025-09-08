import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

type BackLinkButtonProps = {
  to: string;
  children?: React.ReactNode;
  className?: string;
};

export default function BackLinkButton({
  to,
  children = "Voltar",
  className,
}: BackLinkButtonProps) {
  return (
    <Button asChild variant="link" className={["pt-2", className].join(" ")}>
      <Link to={to}>
        <ArrowLeft className="mr-2 size-4" />
        {children}
      </Link>
    </Button>
  );
}
