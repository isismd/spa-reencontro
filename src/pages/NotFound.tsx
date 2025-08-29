import React from "react";
import NotFoundImg from "@/assets/404.png";

const NotFound: React.FC = () => {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">
      <img
        src={NotFoundImg}
        alt="Página não encontrada"
        className="mb-6 max-w-sm"
      />
      <h1 className="text-2xl font-bold">404 - Página não encontrada</h1>
      <p className="text-muted-foreground mt-2">
        A página que você está procurando não existe.
      </p>
    </div>
  );
};

export default NotFound;
