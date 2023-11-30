import { ButtonHTMLAttributes } from "react";

export interface MenuButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isSelected: boolean;
  
}

export interface Product{
  id: number;
  name: string;
  picture: string;
  price: number;
  description: string;
  category: string;
}