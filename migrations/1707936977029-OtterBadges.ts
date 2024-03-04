import dataSource from "src/data-source";
import { GroupSkill } from "src/entities/groupSkill.entity";
import { SkillParent } from "src/entities/parentSkill.entity";
import { MigrationInterface, QueryRunner } from "typeorm";

export class OtterBadges1707936977029 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        const groupOtter = await dataSource.createQueryBuilder()
        .select("group")
        .from(GroupSkill, "group")
        .getOne();

        
        const otterAllBadges = new SkillParent();
        otterAllBadges.group = groupOtter;
        otterAllBadges.label = 'Otter Badges';
        otterAllBadges.backgroundColor = '#ff1717';

        await queryRunner.manager.save([
            otterAllBadges
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
