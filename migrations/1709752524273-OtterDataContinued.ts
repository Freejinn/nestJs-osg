import dataSource from "src/data-source";
import { SkillBadge } from "src/entities/skillBadge.entity";
import { SkillPart } from "src/entities/skillPart.entity";
import { MigrationInterface, QueryRunner } from "typeorm";

export class OtterDataContinued1709752524273 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        
        const otterCamping = await dataSource
        .createQueryBuilder()
        .select("parts")
        .from(SkillBadge, "parts")
        .getOne();

        const otterCampP1 = new SkillPart();
         otterCampP1.badge = otterCamping; 
         otterCampP1.label = 'Camp 5 Nights with your family or raft.';
         otterCampP1.descrip = 'Camping night 1.';
         otterCampP1.selected = false;

         const otterCampP2 = new SkillPart();
         otterCampP2.badge = otterCamping; 
         otterCampP2.label = 'Camp 5 Nights with your family or raft.';
         otterCampP2.descrip = 'Camping night 2.';
         otterCampP2.selected = false;

         const otterCampP3 = new SkillPart();
         otterCampP3.badge = otterCamping; 
         otterCampP3.label = 'Camp 5 Nights with your family or raft.';
         otterCampP3.descrip = 'Capming night 3.';
         otterCampP3.selected = false;

         const otterCampP4 = new SkillPart();
         otterCampP4.badge = otterCamping; 
         otterCampP4.label = 'Camp 5 Nights with your family or raft.';
         otterCampP4.descrip = 'Camping night 4.';
         otterCampP4.selected = false;

         const otterCampP5 = new SkillPart();
         otterCampP5.badge = otterCamping; 
         otterCampP5.label = 'Camp 5 Nights with your family or raft.';
         otterCampP5.descrip = 'Camping night 5.';
         otterCampP5.selected = false;

         await queryRunner.manager.save([
            otterCampP1,
            otterCampP2,
            otterCampP3,
            otterCampP4,
            otterCampP5
         ]);
         
    }   

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
