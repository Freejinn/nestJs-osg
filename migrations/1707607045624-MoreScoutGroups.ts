import { GroupSkill } from "src/entities/groupSkill.entity";
import { MigrationInterface, QueryRunner } from "typeorm";

export class MoreScoutGroups1707607045624 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
       
        const groupTimberwolf = new GroupSkill();
        groupTimberwolf.label = 'Timberwolf Skills';
        groupTimberwolf.backgroundColor = '#a6a6a6';
        groupTimberwolf.pic = 'https://i0.wp.com/outdoorserviceguides.org/wp-content/uploads/2022/03/TW-Icon.png?fit=300%2C300&ssl=1';
        groupTimberwolf.handbookUrl = 'https://docs.guides4guides.org/Timberwolves/Handbook_TWv7_WEB.pdf';
        groupTimberwolf.motto = 'Do your best!';

        const groupPathfinder = new GroupSkill();
        groupPathfinder.label = 'Pathfinder Skills';
        groupPathfinder.backgroundColor = '#5296c5';
        groupPathfinder.pic = 'https://i0.wp.com/outdoorserviceguides.org/wp-content/uploads/2022/03/PF-Icon.png?fit=300%2C300&ssl=1';
        groupPathfinder.handbookUrl = 'https://docs.guides4guides.org/Pathfinders/OSG+Pathfinder+Handbook.pdf';
        groupPathfinder.motto = 'Be prepared!';

        const groupRover = new GroupSkill();
        groupRover.label = 'Rover Skills';
        groupRover.backgroundColor = '#76a36c';
        groupRover.pic = 'https://i0.wp.com/outdoorserviceguides.org/wp-content/uploads/2022/03/Rover-icon.png?fit=300%2C300&ssl=1';
        groupRover.handbookUrl = 'https://outdoorserviceguides.org/pdf/BPSA-US_Rover_Handbook.pdf';
        groupRover.motto = 'Service!';

        await queryRunner.manager.save([
            groupTimberwolf,
            groupPathfinder,
            groupRover
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
