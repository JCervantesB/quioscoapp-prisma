import { categorias } from './data/categorias';
import { productos } from './data/productos';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seedCategorias() {
  await prisma.categoria.createMany({
    data: categorias,
  });
}

async function seedProductos() {
  await prisma.producto.createMany({
    data: productos,
  });
}

async function main(): Promise<void> {
  try {
    await seedCategorias();
    await seedProductos();
  } catch (error) {
    console.log(error);
  }
}

main();
