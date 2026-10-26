import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialSchema1793007676864 implements MigrationInterface {
    name = 'InitialSchema1793007676864'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "bookings" ("id" SERIAL NOT NULL, "exchangeRequestId" integer NOT NULL, "sessionDate" character varying NOT NULL, "sessionMode" character varying NOT NULL, "status" character varying NOT NULL DEFAULT 'confirmed', CONSTRAINT "PK_bee6805982cc1e248e94ce94957" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "exchange_requests" ("id" SERIAL NOT NULL, "requesterName" character varying NOT NULL, "skillOffered" character varying NOT NULL, "skillWanted" character varying NOT NULL, "message" text NOT NULL, "status" character varying NOT NULL DEFAULT 'pending', CONSTRAINT "PK_c511ce18339628b950f5b068d69" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "skills" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "category" character varying NOT NULL, "description" text NOT NULL, "level" character varying NOT NULL, CONSTRAINT "PK_0d3212120f4ecedf90864d7e298" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "skills"`);
        await queryRunner.query(`DROP TABLE "exchange_requests"`);
        await queryRunner.query(`DROP TABLE "bookings"`);
    }

}
