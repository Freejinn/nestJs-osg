import dataSource from "src/data-source";
import { SkillBadge } from "src/entities/skillBadge.entity";
import { SkillPart } from "src/entities/skillPart.entity";
import { MigrationInterface, QueryRunner } from "typeorm";

export class TimberwolfCompParts11710282449846 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        
               
        const wolfInvestP1 = new SkillPart();
 
        wolfInvestP1.label = 'Entering the Pack';
        wolfInvestP1.descrip = 'Explain what it means to enter the Pack as a Timberwolf.';
        wolfInvestP1.selected = false;

        
        const wolfInvestP2 = new SkillPart();
 
        wolfInvestP2.label = 'Timberwolf Law';
        wolfInvestP2.descrip = 'Recite from memory the Timberwolf Law and explain its meaning in your own words.';
        wolfInvestP2.selected = false;

        const wolfInvestP3 = new SkillPart();
 
        wolfInvestP3.label = 'Timberwolf Promise';
        wolfInvestP3.descrip = 'Recite from memory the Timberwolf Promis and explain its meaning in your own words.';
        wolfInvestP3.selected = false;

        const wolfInvestP4 = new SkillPart();
 
        wolfInvestP4.label = 'Timberwolf Salute';
        wolfInvestP4.descrip = 'Demonstrate the Timberwolf Salute.';
        wolfInvestP4.selected = false;

        const wolfInvestP5 = new SkillPart();
 
        wolfInvestP5.label = 'Pack and Six';
        wolfInvestP5.descrip = 'Take part in a Pack and Six activity.';
        wolfInvestP5.selected = false;

        const wolfInvestP6 = new SkillPart();
 
        wolfInvestP6.label = 'Grand Howl';
        wolfInvestP6.descrip = 'Show that you know ho to do the Grand Howl.';
        wolfInvestP6.selected = false;

        const wolfInvestP7 = new SkillPart();
 
        wolfInvestP7.label = 'Timberwolf Motto';
        wolfInvestP7.descrip = 'Recite from memory the Timberwolf Motto and explain its meaning in your own words.';
        wolfInvestP7.selected = false;

        const wolfInvestP8 = new SkillPart();
 
        wolfInvestP8.label = 'Know Your History';
        wolfInvestP8.descrip = 'Talk with your Pack about The Baden-Powell Family or the history of scouting.';
        wolfInvestP8.selected = false;


        const wolfStarP1 = new SkillPart();
 
        wolfStarP1.label = 'Flags and Symbols';
        wolfStarP1.descrip = 'Kow about the national flag, how to fly it, about flags and symbols in your community, and how to show respect to flags and symbols.';
        wolfStarP1.selected = false;

        const wolfStarP2 = new SkillPart();
 
        wolfStarP2.label = 'National Anthem';
        wolfStarP2.descrip = 'Know about the National Anthem.';
        wolfStarP2.selected = false;

        const wolfStarP3 = new SkillPart();
 
        wolfStarP3.label = 'Knots';
        wolfStarP3.descrip = 'Be able to tie a Reef (Square) Knot and a Sheet Bend, and know their uses.';
        wolfStarP3.selected = false;

        const wolfStarP4 = new SkillPart();
 
        wolfStarP4.label = 'Physical Skills';
        wolfStarP4.descrip = 'Be able to do 4 or more: 1)summersault or sholder roll, 2)leapfrog, 3)hop, 4)throw a ball, 5)catch a ball, 6)jumprope 30 times, 7)head balancing, 8)other determined by pack.';
        wolfStarP4.selected = false;

        const wolfStarP5 = new SkillPart();
 
        wolfStarP5.label = 'Hygiene and Health';
        wolfStarP5.descrip = 'Know how to keep your body clean and healthy. Carry this out in practice.';
        wolfStarP5.selected = false;

        const wolfStarP6 = new SkillPart();
 
        wolfStarP6.label = 'Analog Time';
        wolfStarP6.descrip = 'Be able to tell time on an analog clock.';
        wolfStarP6.selected = false;

        const wolfStarP7 = new SkillPart();
 
        wolfStarP7.label = 'Tidy';
        wolfStarP7.descrip = 'Show how to clean yoru shoes and fold your clothes neatly. Keep your room tidy.';
        wolfStarP7.selected = false;

        const wolfStarP8 = new SkillPart();
 
        wolfStarP8.label = 'Saftey';
        wolfStarP8.descrip = 'Show that you understand road safety rules for biking and walking.';
        wolfStarP8.selected = false;

        const wolfStarP9 = new SkillPart();
 
        wolfStarP9.label = 'Story';
        wolfStarP9.descrip = 'Tell a story to your family, Pack, or Six from the list of books that interest you.';
        wolfStarP9.selected = false;

        const wolfStarP10 = new SkillPart();
     
        wolfStarP10.label = '3 Months';
        wolfStarP10.descrip = 'Have three months satisfactory service as a Timberwolf.';
        wolfStarP10.selected = false;

        const wolfStarP11 = new SkillPart();
     
        wolfStarP11.label = 'Repass Tenderpad';
        wolfStarP11.descrip = 'Repass the Tenderpad test.';
        wolfStarP11.selected = false;

        await queryRunner.manager.save([
            wolfInvestP1,
            wolfInvestP2,
            wolfInvestP3,
            wolfInvestP4,
            wolfInvestP5,
            wolfInvestP6,
            wolfInvestP7,
            wolfInvestP8,
            wolfStarP1,
            wolfStarP10,
            wolfStarP11,
            wolfStarP2,
            wolfStarP3,
            wolfStarP4,
            wolfStarP5,
            wolfStarP6,
            wolfStarP7,
            wolfStarP8,
            wolfStarP9
        ]);

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
