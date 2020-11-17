import React, { useEffect } from "react";
import { useRouter } from "next/router";

const Index: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/slides/1");
  });

  return <div />;
};

export default Index;
