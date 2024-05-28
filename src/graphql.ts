
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
    categories: string[];
}

export interface User {
    id: number;
    email: string;
    password: string;
}

export interface Product {
    id: number;
    name: string;
    description: string;
    userId: number;
    categories: string[];
}

export interface IQuery {
    login(email: string, password: string): User | Promise<User>;
}

export interface IMutation {
    createUser(createUserData: CreateUserInput): User | Promise<User>;
    createProduct(createProductData: CreateProductInput): Product | Promise<Product>;
}

type Nullable<T> = T | null;
