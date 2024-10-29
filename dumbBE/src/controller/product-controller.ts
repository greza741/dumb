import { Request, Response } from "express";
import * as productService from "../services/product-service";
import { ProductDTO } from "../dto/product-dto";

export const create = async (req: Request, res: Response) => {
  try {
    const { name, price, description, image, categoryId, stock, userId } =
      req.body;

    const parsedPrice = parseInt(price, 10);
    const parsedCategoryId = parseInt(categoryId, 10);
    const parsedStock = parseInt(stock, 10);
    const parsedUserId = parseInt(userId, 10);

    if (
      isNaN(parsedPrice) ||
      isNaN(parsedCategoryId) ||
      isNaN(parsedStock) ||
      isNaN(parsedUserId)
    ) {
      return res
        .status(400)
        .json({ error: "Some fields must be valid integers." });
    }

    const newProduct: ProductDTO = {
      name,
      price: parsedPrice,
      description,
      image,
      categoryId: parsedCategoryId,
      stock: parsedStock,
      userId: parsedUserId,
    };
    const productData = newProduct as ProductDTO;
    const file = req.file as Express.Multer.File;

    const product = await productService.createProduct(productData, file);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: "Failed to create product" });
  }
};

export const getAll = async (req: Request, res: Response) => {
  try {
    const products = await productService.getAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const product = await productService.getProductById(Number(req.params.id));
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch product" });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const product = await productService.updateProduct(
      Number(req.params.id),
      req.body
    );
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Failed to update product" });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    await productService.deleteProduct(Number(req.params.id));
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Failed to delete product" });
  }
};
