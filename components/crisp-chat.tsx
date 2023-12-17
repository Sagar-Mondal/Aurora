"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("dfb6f630-7aeb-465b-be62-2a9fdd2db698");
  }, []);

  return null;
};
