import dataSource from "src/data-source";
import { SkillParent } from "src/entities/parentSkill.entity";
import { SkillBadge } from "src/entities/skillBadge.entity";
import { MigrationInterface, QueryRunner } from "typeorm";

export class OtterBadges1708208680860 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        
        const otterAllBadges = await dataSource.createQueryBuilder()
        .select("skill")
        .from(SkillParent, "skill")
        .getOne();

        const otterInvestiture = new SkillBadge();
        otterInvestiture.skill = otterAllBadges;
        otterInvestiture.label = 'Investiture';
        otterInvestiture.imgPath = 'assets/images/otter-investiture.png';
        otterInvestiture.progressPercentage = 0;

        const otterSafety = new SkillBadge();
        otterSafety.skill = otterAllBadges;
        otterSafety.label = 'Safety';
        otterSafety.imgPath = 'assets/images/otter-safety.png';
        otterSafety.progressPercentage = 0;
        
        const otterHelping = new SkillBadge();
        otterHelping.skill = otterAllBadges;
        otterHelping.label = 'Helping';
        otterHelping.imgPath = 'assets/images/otter-help.png';
        otterHelping.progressPercentage = 0;

        const otterActivity = new SkillBadge();
        otterActivity.skill = otterAllBadges;
        otterActivity.label = 'Activity';
        otterActivity.imgPath = 'assets/images/otter-activity.png';
        otterActivity.progressPercentage = 0;

        const otterHandicraft = new SkillBadge();
        otterHandicraft.skill = otterAllBadges;
        otterHandicraft.label = 'Handicraft';
        otterHandicraft.imgPath = 'assets/images/otter-handicraft.png';
        otterHandicraft.progressPercentage = 0;

        const otterNature = new SkillBadge();
        otterNature.skill = otterAllBadges;
        otterNature.label = 'Nature';
        otterNature.imgPath = 'assets/images/otter-nature.png';
        otterNature.progressPercentage = 0;

        const otterService = new SkillBadge();
        otterService.skill = otterAllBadges;
        otterService.label = 'Service';
        otterService.imgPath = 'assets/images/otter-service.png';
        otterService.progressPercentage = 0;

        const otterCamping = new SkillBadge();
        otterCamping.skill = otterAllBadges;
        otterCamping.label = 'Camping';
        otterCamping.imgPath = 'assets/images/otter-camp.png';
        otterCamping.progressPercentage = 0;

        const otterSwimming = new SkillBadge();
       otterSwimming.skill = otterAllBadges;
       otterSwimming.label = 'Swimming';
       otterSwimming.imgPath = 'assets/images/otter-swim.png';
       otterSwimming.progressPercentage = 0;

       await queryRunner.manager.save([
        otterInvestiture,
        otterActivity,
        otterCamping,
        otterHandicraft,
        otterHelping,
        otterNature,
        otterSafety,
        otterService,
        otterSwimming
    ]);


    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
