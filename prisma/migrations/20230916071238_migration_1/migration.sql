-- CreateTable
CREATE TABLE `Employee` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `employeeId` VARCHAR(191) NOT NULL,
    `employeeName` VARCHAR(191) NOT NULL,
    `mobileNumber` BIGINT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `role` ENUM('ROLE_ADMIN', 'ROLE_VIEWER') NOT NULL DEFAULT 'ROLE_VIEWER',
    `profileImage` VARCHAR(191) NULL,
    `workingLocation` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Employee_email_key`(`email`),
    UNIQUE INDEX `Employee_employeeId_key`(`employeeId`),
    UNIQUE INDEX `Employee_mobileNumber_key`(`mobileNumber`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Product` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `category` VARCHAR(191) NOT NULL,
    `color` VARCHAR(191) NULL,
    `weight` DOUBLE NULL,
    `image` VARCHAR(191) NOT NULL,
    `employeeId` VARCHAR(191) NOT NULL,
    `status` ENUM('SOLD', 'IN_STOCK') NOT NULL DEFAULT 'IN_STOCK',
    `price` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_employeeId_fkey` FOREIGN KEY (`employeeId`) REFERENCES `Employee`(`employeeId`) ON DELETE RESTRICT ON UPDATE CASCADE;
