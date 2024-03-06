import dataSource from "src/data-source";
import { SkillBadge } from "src/entities/skillBadge.entity";
import { SkillPart } from "src/entities/skillPart.entity";
import { MigrationInterface, QueryRunner } from "typeorm";

export class OtterCraft1709748236386 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        const otterHandicraft = await dataSource.createQueryBuilder()
        .select('otterHandicraft')
        .from(SkillBadge, 'otterHandicraft')
        .getOne();

        const otterCraftP10 = new SkillPart();
         otterCraftP10.badge = otterHandicraft; 
         otterCraftP10.label = 'A Collection';
         otterCraftP10.descrip = 'Display a collection of at least 25 things.';
         otterCraftP10.selected = false;

        const otterCraftP11 = new SkillPart();
         otterCraftP11.badge = otterHandicraft; 
         otterCraftP11.label = 'Service Project';
         otterCraftP11.descrip = 'Participate in a service project making or collecting things to donate.';
         otterCraftP11.selected = false;


         await queryRunner.manager.save([
            otterCraftP10,
            otterCraftP11
         ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
