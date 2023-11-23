import { PrismaClient, Usuario } from "@prisma/client";

const prisma = new PrismaClient();

const createLeilao = async (dono: Usuario, produto: string, preco: number, datalimite: Date) => {
    return await prisma.leilao.create({data: { produto: produto, preco: preco, datalimite: datalimite, dono: { connect: { id: dono.id } } }});
}

const listLeilao = async () => {
    return await prisma.leilao.findMany({include: {dono: true, lances: true}});
}

const findLeilao = async (id: number) => {
    return await prisma.leilao.findUnique({where: {id: id}})
}

export { createLeilao, listLeilao, findLeilao };