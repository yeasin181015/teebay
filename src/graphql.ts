
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

export interface User {
    id: number;
    email: string;
    password: string;
}

export interface IQuery {
    login(email: string, password: string): User | Promise<User>;
}

export interface IMutation {
    create(createUserData: CreateUserInput): User | Promise<User>;
}

type Nullable<T> = T | null;
