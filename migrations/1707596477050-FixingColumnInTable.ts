import { GroupSkill } from "src/entities/groupSkill.entity";
import { SkillParent } from "src/entities/parentSkill.entity";
import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class FixingColumnInTable1707596477050 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
           

        const groupOtter = new GroupSkill();
        groupOtter.label = 'Otter Skills';
        groupOtter.backgroundColor = '#ff1717';
        groupOtter.pic = 'https://i0.wp.com/outdoorserviceguides.org/wp-content/uploads/2022/03/cropped-Otter-Icon.png?fit=300%2C300&ssl=1';
        groupOtter.handbookUrl = 'https://docs.guides4guides.org/Otters/field_book_otters_v2_revised.pdf';
        groupOtter.motto = 'Busy and bright!';


        await queryRunner.manager.save([
            groupOtter,
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
