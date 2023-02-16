import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
    await prisma.candidate.create({
        data :{
            name: 'New candidata',
            email: 'funny@domain.host',
            meeting:{
                create: {
                    time: new Date(),
                }
            }
        }
    })

  const allCandidates = await prisma.candidate.findMany()
  console.log(allCandidates);
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })