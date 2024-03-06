import { SkillParent } from "src/entities/parentSkill.entity";
import { SkillBadge } from "src/entities/skillBadge.entity";
import { MigrationInterface, QueryRunner } from "typeorm";

export class TimberwolfSkills1709760213306 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        
        //Timberwolf Skill Parents
        const wolfComprehensive = new SkillParent();
        wolfComprehensive.label = 'Comprehensive Skills';
        wolfComprehensive.backgroundColor = 'rgb(35, 58, 42)';

        const wolfOutdoor = new SkillParent();
        wolfOutdoor.label = 'Outdoor Skills';
        wolfOutdoor.backgroundColor = '#4eac31';

        const wolfService = new SkillParent();
        wolfService.label = 'Service Skills';
        wolfService.backgroundColor = '#c73930';

        const wolfCraft = new SkillParent();
        wolfCraft.label = 'Handicraft Skills';
        wolfCraft.backgroundColor = 'goldenrod';

        const wolfCharacter = new SkillParent();
        wolfCharacter.label = 'Character Skills';
        wolfCharacter.backgroundColor = '#416aed';

        const wolfPhysical = new SkillParent();
        wolfPhysical.label = 'Physical Skills';
        wolfPhysical.backgroundColor = '#6294C0';


        //Timberwolf Comprehensive Skills
        const tenderpad = new SkillBadge();
        tenderpad.skill = wolfComprehensive;
        tenderpad.label = 'Tenderpad';
        tenderpad.imgPath = 'assets/images/wolfpad.jpg';
        tenderpad.progressPercentage = 0;
        
        const wolfStar1 = new SkillBadge();
        wolfStar1.skill = wolfComprehensive;
        wolfStar1.label = 'First Star';
        wolfStar1.imgPath = 'assets/images/wolf-star.jpg';
        wolfStar1.progressPercentage = 0;

        const wolfStar2 = new SkillBadge();
        wolfStar2.skill = wolfComprehensive;
        wolfStar2.label = 'Second Star';
        wolfStar2.imgPath = 'assets/images/wolf-star.jpg';
        wolfStar2.progressPercentage = 0;

        const silverLeap = new SkillBadge();
        silverLeap.skill = wolfComprehensive;
        silverLeap.label = 'Silver Leaping Wolf';
        silverLeap.imgPath = 'assets/images/wolfSilver.jpg';
        silverLeap.progressPercentage = 0;

        const goldLeap = new SkillBadge();
        goldLeap.skill = wolfComprehensive;
        goldLeap.label = 'Gold Leaping Wolf';
        goldLeap.imgPath = 'assets/images/wolfGold.jpg';
        goldLeap.progressPercentage = 0;

        await queryRunner.manager.save([
            wolfCharacter,
            wolfComprehensive,
            wolfCraft,
            wolfOutdoor,
            wolfPhysical,
            wolfService,
            wolfStar1,
            wolfStar2,
            tenderpad,
            goldLeap,
            silverLeap
        ])




    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
