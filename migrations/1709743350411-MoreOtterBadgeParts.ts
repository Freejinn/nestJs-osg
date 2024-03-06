import dataSource from "src/data-source";
import { SkillBadge } from "src/entities/skillBadge.entity";
import { SkillPart } from "src/entities/skillPart.entity";
import { MigrationInterface, QueryRunner } from "typeorm";

export class MoreOtterBadgeParts1709743350411 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        
        const otterSafety = await dataSource.createQueryBuilder()
        .select("parts")
        .from(SkillBadge, "parts")
        .getOne();

        const otterHelping = await dataSource.createQueryBuilder()
        .select("parts")
        .from(SkillBadge, "parts")
        .getOne(); 

        const otterHandicraft = await dataSource.createQueryBuilder()
        .select("parts")
        .from(SkillBadge, "parts")
        .getOne();

        const otterNature = await dataSource.createQueryBuilder()
        .select("parts")
        .from(SkillBadge, "parts")
        .getOne();

         // Safety skill parts
         const otterSafeP1 = new SkillPart();
         otterSafeP1.badge = otterSafety; // relates it to the parent
         otterSafeP1.label = 'Name and Address';
         otterSafeP1.descrip = 'Know your full name and your address.';
         otterSafeP1.selected = false;
         
         const otterSafeP2 = new SkillPart();
         otterSafeP2.badge = otterSafety; 
         otterSafeP2.label = 'Phone Number';
         otterSafeP2.descrip = "Know you caregiver's phone number.";
         otterSafeP2.selected = false;
         
         const otterSafeP3 = new SkillPart();
         otterSafeP3.badge = otterSafety; 
         otterSafeP3.label = 'Identification Kit';
         otterSafeP3.descrip = 'Make a child identification kit for yourself.';
         otterSafeP3.selected = false;

         const otterSafeP4 = new SkillPart();
         otterSafeP4.badge = otterSafety; 
         otterSafeP4.label = 'Parents and Guardians';
         otterSafeP4.descrip = 'Learn the full names of our parents(s) or guardian(s).';
         otterSafeP4.selected = false;

         const otterSafeP5 = new SkillPart();
         otterSafeP5.badge = otterSafety; 
         otterSafeP5.label = 'Strangers';
         otterSafeP5.descrip = 'Learn about safety with strangers.';
         otterSafeP5.selected = false;

         const otterSafeP6 = new SkillPart();
         otterSafeP6.badge = otterSafety; 
         otterSafeP6.label = 'Emergencies';
         otterSafeP6.descrip = 'Show how you would get help in an emergency.';
         otterSafeP6.selected = false;

         const otterSafeP7 = new SkillPart();
         otterSafeP7.badge = otterSafety; 
         otterSafeP7.label = 'Home Safety';
         otterSafeP7.descrip = 'Learn about safety around the home.';
         otterSafeP7.selected = false;

         const otterSafeP8 = new SkillPart();
         otterSafeP8.badge = otterSafety; 
         otterSafeP8.label = 'Camp Safety';
         otterSafeP8.descrip = 'Learn about safety around the camp and wile hiking.';
         otterSafeP8.selected = false;

         const otterSafeP9 = new SkillPart();
         otterSafeP9.badge = otterSafety; 
         otterSafeP9.label = 'Road Safety';
         otterSafeP9.descrip = 'Know how to cross the road safely.';
         otterSafeP9.selected = false;

         const otterSafeP10 = new SkillPart();
         otterSafeP10.badge = otterSafety; 
         otterSafeP10.label = 'Accidents';
         otterSafeP10.descrip = 'Discuss how to prevent accidents on the road, around stoves/fires, near the pool, and at the playground.';
         otterSafeP10.selected = false;

         const otterSafeP11 = new SkillPart();
         otterSafeP11.badge = otterSafety; 
         otterSafeP11.label = 'Health and Hygiene';
         otterSafeP11.descrip = 'Learn the basic rules of health and hygiene.';
         otterSafeP11.selected = false;

         const otterSafeP12 = new SkillPart();
         otterSafeP12.badge = otterSafety; 
         otterSafeP12.label = 'Cuts';
         otterSafeP12.descrip = 'Know how to clean and cover a cut or a scratch.';
         otterSafeP12.selected = false;

         const otterSafeP13 = new SkillPart();
         otterSafeP13.badge = otterSafety; 
         otterSafeP13.label = 'Shoes';
         otterSafeP13.descrip = 'Be able to tie your shoelaces.';
         otterSafeP13.selected = false;

         //Helping Skill Parts
         const otterHelpP1 = new SkillPart();
         otterHelpP1.badge = otterHelping; 
         otterHelpP1.label = 'Kindness';
         otterHelpP1.descrip = 'Show how to be nice and help others feel happy.';
         otterHelpP1.selected = false;
         
         const otterHelpP2 = new SkillPart();
         otterHelpP2.badge = otterHelping; 
         otterHelpP2.label = 'Belongings';
         otterHelpP2.descrip = 'Learn about caring for your clothes and your belongings.';
         otterHelpP2.selected = false;

         const otterHelpP3 = new SkillPart();
         otterHelpP3.badge = otterHelping; 
         otterHelpP3.label = 'Helping at Home';
         otterHelpP3.descrip = 'Find three ways to help in your home.';
         otterHelpP3.selected = false;

         const otterHelpP4 = new SkillPart();
         otterHelpP4.badge = otterHelping; 
         otterHelpP4.label = 'Helping at Camp';
         otterHelpP4.descrip = 'Find three ways to help at camp.';
         otterHelpP4.selected = false;

         const otterHelpP5 = new SkillPart();
         otterHelpP5.badge = otterHelping; 
         otterHelpP5.label = 'Be Helpful';
         otterHelpP5.descrip = 'Be helpful around your home and at camp.';
         otterHelpP5.selected = false;

         const otterHelpP6 = new SkillPart();
         otterHelpP6.badge = otterHelping; 
         otterHelpP6.label = 'Scout Meeting';
         otterHelpP6.descrip = 'Help set up or clean up a Scout Meeting.';
         otterHelpP6.selected = false;

         const otterHelpP7 = new SkillPart();
         otterHelpP7.badge = otterHelping; 
         otterHelpP7.label = "Kim's Game";
         otterHelpP7.descrip = "Play Kim's game.";
         otterHelpP7.selected = false;

         const otterHelpP8 = new SkillPart();
         otterHelpP8.badge = otterHelping; 
         otterHelpP8.label = 'Message Game';
         otterHelpP8.descrip = 'Play the message game.';
         otterHelpP8.selected = false;

         const otterHelpP9 = new SkillPart();
         otterHelpP9.badge = otterHelping; 
         otterHelpP9.label = 'A Good Turn';
         otterHelpP9.descrip = 'Do a good turn for a friend, relative, or a neighbor.';
         otterHelpP9.selected = false;

         const otterHelpP10 = new SkillPart();
         otterHelpP10.badge = otterHelping; 
         otterHelpP10.label = 'Another Good Turn';
         otterHelpP10.descrip = 'Take part in a Raft good turn.';
         otterHelpP10.selected = false;

        //Handicraft Skill Parts
        const otterCraftP1 = new SkillPart();
         otterCraftP1.badge = otterHandicraft; 
         otterCraftP1.label = 'Scene or Event';
         otterCraftP1.descrip = 'Make art showing a scene or event.';
         otterCraftP1.selected = false;

        const otterCraftP2 = new SkillPart();
         otterCraftP2.badge = otterHandicraft; 
         otterCraftP2.label = 'Home';
         otterCraftP2.descrip = 'Create a picture of your home.';
         otterCraftP2.selected = false;

        const otterCraftP3 = new SkillPart();
         otterCraftP3.badge = otterHandicraft; 
         otterCraftP3.label = 'Thank You Card';
         otterCraftP3.descrip = 'Make a thank you card and deliver it.';
         otterCraftP3.selected = false;

        const otterCraftP4 = new SkillPart();
         otterCraftP4.badge = otterHandicraft; 
         otterCraftP4.label = 'Map or Diagram';
         otterCraftP4.descrip = 'Make a map or a diagram.';
         otterCraftP4.selected = false;

        const otterCraftP5 = new SkillPart();
         otterCraftP5.badge = otterHandicraft; 
         otterCraftP5.label = 'Trail Signs';
         otterCraftP5.descrip = 'Create trail signs using rocks or sticks.';
         otterCraftP5.selected = false;

        const otterCraftP6 = new SkillPart();
         otterCraftP6.badge = otterHandicraft; 
         otterCraftP6.label = 'A Model';
         otterCraftP6.descrip = 'Make a model.';
         otterCraftP6.selected = false;

        const otterCraftP7 = new SkillPart();
         otterCraftP7.badge = otterHandicraft; 
         otterCraftP7.label = 'Crafts';
         otterCraftP7.descrip = 'Make two craft items.';
         otterCraftP7.selected = false;

        const otterCraftP8 = new SkillPart();
         otterCraftP8.badge = otterHandicraft; 
         otterCraftP8.label = 'Bird Feeder';
         otterCraftP8.descrip = 'Make a bird feeder from reused items.';
         otterCraftP8.selected = false;

        const otterCraftP9 = new SkillPart();
         otterCraftP9.badge = otterHandicraft; 
         otterCraftP9.label = 'Knots';
         otterCraftP9.descrip = 'Tie two different knots.';
         otterCraftP9.selected = false;

        const otterCraftP10 = new SkillPart();
         otterCraftP10.badge = otterHandicraft; 
         otterCraftP10.label = 'A Collection';
         otterCraftP10.descrip = 'Display a collection of at least 25 things.';
         otterCraftP10.selected = false;

        const otterCraftP11 = new SkillPart();
         otterCraftP11.badge = otterHandicraft; 
         otterCraftP11.label = 'Service Project';
         otterCraftP11.descrip = 'Participate in a service project making or collecting things to donate.';
         otterCraftP11.selected = false;

        //Nature Skill Parts
        const otterNatureP1 = new SkillPart();
         otterNatureP1.badge = otterNature; 
         otterNatureP1.label = 'The Environment';
         otterNatureP1.descrip = 'Learn about caring for the environment and the rules of "Leave no Trace".';
         otterNatureP1.selected = false;
         
        const otterNatureP2 = new SkillPart();
         otterNatureP2.badge = otterNature; 
         otterNatureP2.label = 'Pets';
         otterNatureP2.descrip = 'Learn about caring for pets.';
         otterNatureP2.selected = false;

        const otterNatureP3 = new SkillPart();
         otterNatureP3.badge = otterNature; 
         otterNatureP3.label = 'Scrapbook';
         otterNatureP3.descrip = 'Make a scrapbook about an animal you like.';
         otterNatureP3.selected = false;

        const otterNatureP4 = new SkillPart();
         otterNatureP4.badge = otterNature; 
         otterNatureP4.label = 'Nature Items';
         otterNatureP4.descrip = 'Collect and show 10 nature items that are different types of the same thing.';
         otterNatureP4.selected = false;

        const otterNatureP5 = new SkillPart();
         otterNatureP5.badge = otterNature; 
         otterNatureP5.label = 'Nature Walk';
         otterNatureP5.descrip = 'Take a nature walk.';
         otterNatureP5.selected = false;

        const otterNatureP6 = new SkillPart();
         otterNatureP6.badge = otterNature; 
         otterNatureP6.label = 'Seed';
         otterNatureP6.descrip = 'Grow a seed in water or a soaked paper towel.';
         otterNatureP6.selected = false;

        const otterNatureP7 = new SkillPart();
         otterNatureP7.badge = otterNature; 
         otterNatureP7.label = 'Regrowing';
         otterNatureP7.descrip = 'Regrow a carrot top or other plant in water.';
         otterNatureP7.selected = false;

        const otterNatureP8 = new SkillPart();
         otterNatureP8.badge = otterNature; 
         otterNatureP8.label = 'Gardening';
         otterNatureP8.descrip = 'Plant and take care of a tree, flower, or food in a garden.';
         otterNatureP8.selected = false;

        const otterNatureP9 = new SkillPart();
         otterNatureP9.badge = otterNature; 
         otterNatureP9.label = 'Zoo or Wildlife Rescue';
         otterNatureP9.descrip = 'Visit a zoo or wildlife rescue to observe different types of animals.';
         otterNatureP9.selected = false;

        const otterNatureP10 = new SkillPart();
         otterNatureP10.badge = otterNature; 
         otterNatureP10.label = 'Clean Up Service';
         otterNatureP10.descrip = 'Take part in a trail or park clean up.';
         otterNatureP10.selected = false;

         await queryRunner.manager.save([
            otterSafeP1,
            otterSafeP2,    
            otterSafeP3,
            otterSafeP4,
            otterSafeP5,
            otterSafeP6,
            otterSafeP7,
            otterSafeP8,
            otterSafeP9,
            otterSafeP10,
            otterSafeP11,
            otterSafeP12,
            otterSafeP13,
            otterCraftP1,
            otterCraftP2,
            otterCraftP3,
            otterCraftP4,
            otterCraftP5,
            otterCraftP6,
            otterCraftP7,
            otterCraftP8,
            otterCraftP9,
            otterCraftP10,
            otterCraftP11,
            otterHelpP1,
            otterHelpP2,
            otterHelpP3,
            otterHelpP4,
            otterHelpP5,
            otterHelpP6,
            otterHelpP7,
            otterHelpP8,
            otterHelpP9,
            otterHelpP10,
            otterNatureP1,
            otterNatureP2,
            otterNatureP3,
            otterNatureP4,
            otterNatureP5,
            otterNatureP6,
            otterNatureP7,
            otterNatureP8,
            otterNatureP9,
            otterNatureP10,
         ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
