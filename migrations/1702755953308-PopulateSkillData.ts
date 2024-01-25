import { SkillParent } from "../src/entities/parentSkill.entity";
import { SkillBadge } from "../src/entities/skillBadge.entity";
import { SkillPart } from "../src/entities/skillPart.entity";
import { MigrationInterface, QueryRunner } from "typeorm"

export class PopulateSkillData1702755953308 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // created this migration with `npm run migration:generate -- migrations/PopulateSkillData`.
        // once the code is written then you can apply it with `npm run migration:run

        // the following should create one SkillParent,
        // which has two associated badges,
        // each of which has two associated parts.
        // all the entities get created in code and saved at the end.

        // create skill parent
        const skillParentOne = new SkillParent();
        skillParentOne.label = 'Skill Parent One';
        skillParentOne.backgroundColor = '#aabbcc';

        // create skill badges
        const badgeOne = new SkillBadge();
        badgeOne.skill = skillParentOne; // relates it to the parent
        badgeOne.label = 'badge one';
        badgeOne.imgPth = 'path';
        badgeOne.progressPercentage = 30;

        const badgeTwo = new SkillBadge();
        badgeTwo.skill = skillParentOne;
        badgeTwo.label = 'badge two';
        badgeTwo.imgPth = 'path';
        badgeTwo.progressPercentage = 50;

        // create skill parts
        const partOne = new SkillPart();
        partOne.badge = badgeOne; // relates it to the parent
        partOne.label = 'part one';
        partOne.descrip = 'description one';
        partOne.selected = false;

        const partTwo = new SkillPart();
        partTwo.badge = badgeOne;
        partTwo.label = 'part two';
        partTwo.descrip = 'description two';
        partTwo.selected = false;

        const partThree = new SkillPart();
        partThree.badge = badgeTwo;
        partThree.label = 'part three';
        partThree.descrip = 'description three';
        partThree.selected = false;

        const partFour = new SkillPart();
        partFour.badge = badgeTwo;
        partFour.label = 'part four';
        partFour.descrip = 'description four';
        partFour.selected = false;

        // save all the entities to the DB
        await queryRunner.manager.save([
            skillParentOne,
            badgeOne,
            badgeTwo,
            partOne,
            partTwo,
            partThree,
            partFour
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // here you would optionally write code to reverse the migration, like to delete all these entities from the database
    }

}
