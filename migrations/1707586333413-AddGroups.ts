import { GroupSkill } from "src/entities/groupSkill.entity";
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class AddGroups1707586333413 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table ({
                name: "group_skill",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                    },
                    {
                        name: "backgroundColor",
                        type: "varchar",
                    },
                    {
                        name: "pic",
                        type: "varchar",
                    },
                    {
                        name: "handbookUrl",
                        type: "varchar",
                    },
                    {
                        name: "motto",
                        type: "varchar",
                    },
                    {
                        name: "parents",
                        type: "int",
                    }
                ]
            }),
            true,
        )
        //scout group
        // const groupOtter = new GroupSkill();
        // groupOtter.label = 'Otter Skills';
        // groupOtter.backgroundColor = '#ff1717';
        // groupOtter.pic = 'https://i0.wp.com/outdoorserviceguides.org/wp-content/uploads/2022/03/cropped-Otter-Icon.png?fit=300%2C300&ssl=1';
        // groupOtter.handbookUrl = 'https://docs.guides4guides.org/Otters/field_book_otters_v2_revised.pdf';
        // groupOtter.motto = 'Busy and bright!';

        await queryRunner.manager.save([
            // groupOtter
        ]);

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
