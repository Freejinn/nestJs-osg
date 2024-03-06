import dataSource from "src/data-source";
import { SkillBadge } from "src/entities/skillBadge.entity";
import { SkillPart } from "src/entities/skillPart.entity";
import { MigrationInterface, QueryRunner } from "typeorm";

export class LastOtterParts1709757073061 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        
        const otterService = await dataSource
        .createQueryBuilder()
        .select("parts")
        .from(SkillBadge, "parts")
        .getOne();
        
        const otterSwimming = await dataSource
        .createQueryBuilder()
        .select("parts")
        .from(SkillBadge, "parts")
        .getOne();

        const otterServeP1 = new SkillPart();
        otterServeP1.badge = otterService; 
        otterServeP1.label = 'Police';
        otterServeP1.descrip = 'Visit with the local police and find out some ways to help prevent crime and be safe.';
        otterServeP1.selected = false;
        
        const otterServeP2 = new SkillPart();
        otterServeP2.badge = otterService; 
        otterServeP2.label = 'Fire Department';
        otterServeP2.descrip = 'Visit the local fire department and find out the danger of fire and some ways of preventing it.';
        otterServeP2.selected = false;

        const otterServeP3 = new SkillPart();
        otterServeP3.badge = otterService; 
        otterServeP3.label = 'Ambulance';
        otterServeP3.descrip = 'Visit with an ambulance crew or Emergency Room staff and learn about what they do.';
        otterServeP3.selected = false;

        const otterServeP4 = new SkillPart();
        otterServeP4.badge = otterService; 
        otterServeP4.label = 'Citizenship';
        otterServeP4.descrip = 'Visit your mayor or other government official and learn what it means to be a good citizen.';
        otterServeP4.selected = false;

        const otterServeP5 = new SkillPart();
        otterServeP5.badge = otterService; 
        otterServeP5.label = 'Public Art';
        otterServeP5.descrip = 'Visit an exhibit or attend a performance to learn how art helps individuals and out community.';
        otterServeP5.selected = false;

        const otterServeP6 = new SkillPart();
        otterServeP6.badge = otterService; 
        otterServeP6.label = 'Recycling';
        otterServeP6.descrip = 'Visit a sanitation or recycling facility and find out about recycling and help your family reduce, reuse, and recycle.';
        otterServeP6.selected = false;

        //Swimming Up Parts        
        const otterSwimP1 = new SkillPart();
        otterSwimP1.badge = otterSwimming; 
        otterSwimP1.label = 'Mowgli';
        otterSwimP1.descrip = 'Learn the story of Mowgli.';
        otterSwimP1.selected = false;
        
        const otterSwimP2 = new SkillPart();
        otterSwimP2.badge = otterSwimming; 
        otterSwimP2.label = 'Scout History';
        otterSwimP2.descrip = 'Know a little more about the founders and history of scouting.';
        otterSwimP2.selected = false;
        
        const otterSwimP3 = new SkillPart();
        otterSwimP3.badge = otterSwimming; 
        otterSwimP3.label = 'Visit the Timberwolves';
        otterSwimP3.descrip = 'Visit the Timberwolf Pack and get to know your future Sixer and Akela.';
        otterSwimP3.selected = false;

        const otterSwimP4 = new SkillPart();
        otterSwimP4.badge = otterSwimming; 
        otterSwimP4.label = 'Timberwolf Motto';
        otterSwimP4.descrip = 'Be able to say the Timberwolf Motto.';
        otterSwimP4.selected = false;

        const otterSwimP5 = new SkillPart();
        otterSwimP5.badge = otterSwimming; 
        otterSwimP5.label = 'DYB and DOB';
        otterSwimP5.descrip = 'Explain the meaning of the code words DYB and DOB from the Grand Howl.';
        otterSwimP5.selected = false;

        const otterSwimP6 = new SkillPart();
        otterSwimP6.badge = otterSwimming; 
        otterSwimP6.label = 'Timberwolf Law';
        otterSwimP6.descrip = 'Say the Timberwolf Law.';
        otterSwimP6.selected = false;

        const otterSwimP7 = new SkillPart();
        otterSwimP7.badge = otterSwimming; 
        otterSwimP7.label = 'Timberwolf Salute';
        otterSwimP7.descrip = 'Show the Timberwolf Salute.';
        otterSwimP7.selected = false;

        const otterSwimP8 = new SkillPart();
        otterSwimP8.badge = otterSwimming; 
        otterSwimP8.label = 'Safety Badge';
        otterSwimP8.descrip = 'Earn the Safety Badge.';
        otterSwimP8.selected = false;

        const otterSwimP9 = new SkillPart();
        otterSwimP9.badge = otterSwimming; 
        otterSwimP9.label = 'Otter Paws';
        otterSwimP9.descrip = 'Earn all four Otter Paws.';
        otterSwimP9.selected = false;

        await queryRunner.manager.save([
            otterServeP1,
            otterServeP2,
            otterServeP3,
            otterServeP4,
            otterServeP5,
            otterServeP6,
            otterSwimP1,
            otterSwimP2,
            otterSwimP3,
            otterSwimP4,
            otterSwimP5,
            otterSwimP6,
            otterSwimP7,
            otterSwimP8,
            otterSwimP9
        ]);

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
