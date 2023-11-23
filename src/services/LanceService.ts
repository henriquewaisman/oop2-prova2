import { Leilao, PrismaClient, Usuario } from "@prisma/client";

const prisma = new PrismaClient();

const createLance = async (comprador: Usuario, leilao: Leilao, valor: number) => {
    return await prisma.lance.create({data: { valor: valor,
                                              comprador: {connect: { id: comprador.id }},
                                              leilao: {connect: { id: leilao.id }}}});
}

const listLance = async () => {
    return await prisma.lance.findMany({include: {comprador: true, leilao: true}});
}

export { createLance, listLance };