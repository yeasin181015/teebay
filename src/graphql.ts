
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateUserInput {
    email: string;
    password: string;
}

export interface CreateProductInput {
    description: string;
    name: string;
    userId: number;
    categories: CategoryInputFields[];
}

export interface CategoryInputFields {
    id: number;
    name: string;
}

export interface UpdateProductInput {
    id: number;
    description: string;
    name: string;
    categories: CategoryInputFields[];
}

export interface User {
    id: number;
    email: string;
    password: string;
}

export interface Category {
    id: number;
    name: string;
}

export interface Product {
    id: number;
    name: string;
    description: string;
    userId: number;
    categories: Category[];
}

export interface IQuery {
    login(email: string, password: string): User | Promise<User>;
}

export interface IMutation {
    createUser(createUserData: CreateUserInput): User | Promise<User>;
    createProduct(createProductData: CreateProductInput): Product | Promise<Product>;
    editProduct(updateProductData: UpdateProductInput): Product | Promise<Product>;
    deleteProduct(deleteId: number): string | Promise<string>;
    buyProduct(productId: number, userId: number, type: string): string | Promise<string>;
}

type Nullable<T> = T | null;
