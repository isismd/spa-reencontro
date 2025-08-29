import React from "react";
import NotFoundImg from "@/assets/404.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">
      <img
        src={NotFoundImg}
        alt="Página não encontrada"
        className="mb-6 max-w-sm"
      />
      <p className="text-muted-foreground mt-2">
        A página que você está procurando não existe.
      </p>
      <Button variant="outline" className="mt-4">
        <Link to="/">Voltar para Página Inicial</Link>
      </Button>
    </div>
  );
};

export default NotFound;
