import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

import { prisma } from '../lib/prisma';

async function main() {
  console.log("Seeding database...");

  // 1. Create Role Admin
  let adminRole = await prisma.role.findUnique({
    where: { name: 'Admin' }
  });

  if (!adminRole) {
    adminRole = await prisma.role.create({
      data: { name: 'Admin' }
    });
    console.log("-> Admin role created");
  } else {
    console.log("-> Admin role already exists");
  }

  // 2. Create Role User
  let userRole = await prisma.role.findUnique({
    where: { name: 'User' }
  });

  if (!userRole) {
    userRole = await prisma.role.create({
      data: { name: 'User' }
    });
    console.log("-> User role created");
  }

  // 3. Create Admin User
  const adminEmail = 'admin@hpio.com';
  let adminUser = await prisma.user.findUnique({
    where: { email: adminEmail }
  });

  if (!adminUser) {
    const hashedPassword = await bcrypt.hash('admin123', 10);
    adminUser = await prisma.user.create({
      data: {
        email: adminEmail,
        password: hashedPassword,
        name: 'HPIO Admin',
        roleId: adminRole.id
      }
    });
    console.log(`-> Default admin created (Email: ${adminEmail}, Password: admin123)`);
  } else {
    console.log("-> Default admin already exists");
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
