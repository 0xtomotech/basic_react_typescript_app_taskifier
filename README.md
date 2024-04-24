# Basic React Typescript App: Taskifier

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![React: 17.0.2](https://img.shields.io/badge/React-17.0.2-blue.svg)
![TypeScript: 4.1.2](https://img.shields.io/badge/TypeScript-4.1.2-blue.svg)

This repository contains a React-based Todo App developed using TypeScript. The application allows users to add, delete, and toggle the completion status of todo items.

## Table of Contents
1. [Overview](#overview)
2. [Features](#features)
3. [Project Structure](#project-structure)
4. [Installation](#installation)

## Overview

This application offers a straightforward user interface for managing daily tasks. It is built with efficiency and simplicity in mind, allowing for quick interactions.

## Features

- **Add Todos:** Input field to enter new tasks.
- **Delete Todos:** Option to remove tasks from the list.
- **Toggle Completion:** Click on a task to mark it as complete or incomplete.

## Project Structure

| File                  | Description                                      |
|-----------------------|--------------------------------------------------|
| `App.tsx`             | Main component including routing and state management |
| `InputField.tsx`      | Component to input new todo tasks                |
| `SingleTodo.tsx`      | Represents a single todo item                    |
| `TodoList.tsx`        | Displays the list of todo tasks                  |
| `model.ts`            | TypeScript models and interfaces                 |
| `styles.css`          | Global styles                                    |
| `App.css`, `index.css`| Additional CSS files for specific styling needs  |

## Installation

To set up the project locally, follow these steps:

```bash
git clone <https://github.com/0xtomotech/basic_react_typescript_app_taskifier.git>
cd <basic_react_typescript_app_taskifier>
npm install
npm start

