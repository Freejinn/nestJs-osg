import dataSource from "src/data-source";
import { SkillBadge } from "src/entities/skillBadge.entity";
import { SkillPart } from "src/entities/skillPart.entity";
import { MigrationInterface, QueryRunner } from "typeorm";

export class OtterDetails1709578429078 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        const otterInvestiture = await dataSource.createQueryBuilder()
        .select("badge")
        .from(SkillBadge, "badge")
        .getOne();

        const otterActivity = await dataSource.createQueryBuilder()
        .select("badge")
        .from(SkillBadge, "badge")
        .getOne();

        // create skill parts
        const ottInvestP1 = new SkillPart();
        ottInvestP1.badge = otterInvestiture; // relates it to the parent
        ottInvestP1.label = 'About Otters';
        ottInvestP1.descrip = 'Learn a little about otters.';
        ottInvestP1.selected = false;

        const ottInvestP2 = new SkillPart();
        ottInvestP2.badge = otterInvestiture; // relates it to the parent
        ottInvestP2.label = 'Jones Family';
        ottInvestP2.descrip = 'Learn a little about the Jones family from the Friends of the Forest.';
        ottInvestP2.selected = false;

        const ottInvestP3 = new SkillPart();
        ottInvestP3.badge = otterInvestiture; // relates it to the parent
        ottInvestP3.label = 'Motto';
        ottInvestP3.descrip = 'Be able to say the Otter Motto.';
        ottInvestP3.selected = false;

        const ottInvestP4 = new SkillPart();
        ottInvestP4.badge = otterInvestiture; // relates it to the parent
        ottInvestP4.label = 'Law';
        ottInvestP4.descrip = 'Be able to say the Otter Law.';
        ottInvestP4.selected = false;

        const ottInvestP5 = new SkillPart();
        ottInvestP5.badge = otterInvestiture; // relates it to the parent
        ottInvestP5.label = 'Salute and Sign';
        ottInvestP5.descrip = 'Be able to show the Otter Salute and Sign.';
        ottInvestP5.selected = false;

        const ottInvestP6 = new SkillPart();
        ottInvestP6.badge = otterInvestiture; // relates it to the parent
        ottInvestP6.label = 'Promise';
        ottInvestP6.descrip = 'Be able to say the Otter Promise.';
        ottInvestP6.selected = false;

        const ottInvestP7 = new SkillPart();
        ottInvestP7.badge = otterInvestiture;
        ottInvestP7.label = 'Ceremony';
        ottInvestP7.descrip = 'Participate in an opening and closing ceremony.';
        ottInvestP7.selected = false;

        //Activity Badge
        const ottActP1 = new SkillPart();
        ottActP1.badge = otterActivity;
        ottActP1.label = 'Right Attitude';
        ottActP1.descrip = 'Practice being a good winner and a good loser.';
        ottActP1.selected = false;

        const ottActP2 = new SkillPart();
        ottActP2.badge = otterActivity;
        ottActP2.label = 'Other Otters';
        ottActP2.descrip = 'Learn the name of every Otter in your Den.';
        ottActP2.selected = false;

        const ottActP3 = new SkillPart();
        ottActP3.badge = otterActivity;
        ottActP3.label = 'Sports';
        ottActP3.descrip = 'Participate in sports games.';
        ottActP3.selected = false;

        const ottActP4 = new SkillPart();
        ottActP4.badge = otterActivity;
        ottActP4.label = 'Fitness';
        ottActP4.descrip = 'Participate in physical fitness.';
        ottActP4.selected = false;

        const ottActP5 = new SkillPart();
        ottActP5.badge = otterActivity;
        ottActP5.label = 'Games';
        ottActP5.descrip = 'Participate in playing board and card games.';
        ottActP5.selected = false;

        const ottActP6 = new SkillPart();
        ottActP6.badge = otterActivity;
        ottActP6.label = 'Obstacles';
        ottActP6.descrip = 'Participate in an obstacle course.';
        ottActP6.selected = false;

        const ottActP7 = new SkillPart();
        ottActP7.badge = otterActivity;
        ottActP7.label = 'Day Hikes';
        ottActP7.descrip = 'Go on TWO day hikes.';
        ottActP7.selected = false;

        const ottActP8 = new SkillPart();
        ottActP8.badge = otterActivity;
        ottActP8.label = 'Night Hike';
        ottActP8.descrip = 'Go on a night hike.';
        ottActP8.selected = false;

        const ottActP9 = new SkillPart();
        ottActP9.badge = otterActivity;
        ottActP9.label = 'Songs';
        ottActP9.descrip = 'Sing three songs.';
        ottActP9.selected = false;

        const ottActP10 = new SkillPart();
        ottActP10.badge = otterActivity;
        ottActP10.label = 'Pen Pal';
        ottActP10.descrip = 'Connect with another Otter Raft and make a pen pal.';
        ottActP10.selected = false;

        const ottActP11 = new SkillPart();
        ottActP11.badge = otterActivity;
        ottActP11.label = 'Inclusion';
        ottActP11.descrip = 'Discuss ways to welcome everyone into your Otter games.';
        ottActP11.selected = false;

        const ottActP12 = new SkillPart();
        ottActP12.badge = otterActivity;
        ottActP12.label = 'Elders';
        ottActP12.descrip = 'Visit a senior center and do some fun activities or crafts with them.';
        ottActP12.selected = false;

        await queryRunner.manager.save([
           ottInvestP1,
           ottInvestP2,
           ottInvestP3,
           ottInvestP4,
           ottInvestP5,
           ottInvestP6,
           ottInvestP7,
           ottActP1,
           ottActP10,
           ottActP11,
           ottActP12,
           ottActP2,
           ottActP3,
           ottActP4,
           ottActP5,
           ottActP6,
           ottActP7,
           ottActP8,
           ottActP9
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
