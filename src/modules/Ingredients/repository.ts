import { prisma } from "../../../prisma/prismaClient";

class IngredientsRepository {
  aggregate = prisma["ingredients"].aggregate;
  count = prisma["ingredients"].count;
  create = prisma["ingredients"].create;
  createMany = prisma["ingredients"].createMany;
  delete = prisma["ingredients"].delete;
  deleteMany = prisma["ingredients"].deleteMany;
  findFirst = prisma["ingredients"].findFirst;
  findMany = prisma["ingredients"].findMany;
  findUnique = prisma["ingredients"].findUnique;
  groupBy = prisma["ingredients"].groupBy;
  update = prisma["ingredients"].update;
  updateMany = prisma["ingredients"].updateMany;
  upsert = prisma["ingredients"].upsert;
}

export { IngredientsRepository };
