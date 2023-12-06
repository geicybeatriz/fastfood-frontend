import { ButtonHTMLAttributes, LiHTMLAttributes } from "react";

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

export interface Additional {
  id: number;
  name: string;
  description: string;
  picture: string;
  price: number;
}

export interface ItemDetail{
  id:number;
  productId:number;
  orderId:number;
  observations: string;
  quantity:number;
  product: Product;
  itemAdditional: ItemAdditional[]
}

export interface ItemAdditional{
  id:number;
  additionalId:number;
  orderItemId:number;
  additional:Additional
}

export interface OrderByGetAllOrders {
  id: number;
  name: string;
  payment:string;
  status:string;
  createdAt:string;
  updatedAt:string;
  amount:number;
  itemDetails: ItemDetail[]
}