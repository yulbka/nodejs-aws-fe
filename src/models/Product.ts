import * as Yup from 'yup';

export type Product = {
  id: string,
  image: string;
  title: string,
  description: string,
  price: number,
};

export const ProductSchema = Yup.object().shape({
  productName: Yup.string().required(),
  image: Yup.string().required(),
  description: Yup.string(),
  price: Yup.number().required(),
});
