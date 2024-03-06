import { SkillParent } from "../src/entities/parentSkill.entity";
import { SkillBadge } from "../src/entities/skillBadge.entity";
import { SkillPart } from "../src/entities/skillPart.entity";
import { MigrationInterface, QueryRunner } from "typeorm"

export class PopulateSkillData1702755953308 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // once the code is written then you can apply it with `npm run migration:run


        //New Migration: npx typeorm migration:create migrations/NameOfMigration

        // skill parents
        const parentComprehensive = new SkillParent();
        parentComprehensive.label = 'Comprehensive Skills';
        parentComprehensive.backgroundColor = 'rgb(35, 58, 42)';

        const parentOutdoor = new SkillParent();
        parentOutdoor.label = 'Outdoor Skills';
        parentOutdoor.backgroundColor = '#4eac31';

        const parentCivics = new SkillParent();
        parentCivics.label = 'Civics and Community Skills';
        parentCivics.backgroundColor = '#c73930';

        const parentCreative = new SkillParent();
        parentCreative.label = 'Creative Skills';
        parentCreative.backgroundColor = 'goldenrod';

        const parentLifeSkill = new SkillParent();
        parentLifeSkill.label = 'Life Skills';
        parentLifeSkill.backgroundColor = '#416aed';



        // create skill badges

        //parentComprehensive Badges
        const tenderfootBadge = new SkillBadge();
        tenderfootBadge.skill = parentComprehensive; // relates it to the parent
        tenderfootBadge.label = 'Tenderfoot';
        tenderfootBadge.imgPath = 'assets/images/tenderfoot-badge.jpg';
        tenderfootBadge.progressPercentage = 0;

        const secondClassBadge = new SkillBadge();
        secondClassBadge.skill = parentComprehensive;
        secondClassBadge.label = 'Second Class';
        secondClassBadge.imgPath = 'assets/images/secondclass-badge.jpg';
        secondClassBadge.progressPercentage = 0;

        const firstClassBadge = new SkillBadge();
        firstClassBadge.skill = parentComprehensive;
        firstClassBadge.label = 'First Class';
        firstClassBadge.imgPath = 'assets/images/firstclass-badge.png';
        firstClassBadge.progressPercentage = 0;

        const torchbearerBadge = new SkillBadge();
        torchbearerBadge.skill = parentComprehensive;
        torchbearerBadge.label = 'Torchbearer';
        torchbearerBadge.imgPath = 'assets/images/torchbearer-badge.jpg';
        torchbearerBadge.progressPercentage = 0;

        const trailblazerBadge = new SkillBadge();
        trailblazerBadge.skill = parentComprehensive;
        trailblazerBadge.label = 'Trailblazer';
        trailblazerBadge.imgPath = 'assets/images/trailblazer-badges.jpg';
        trailblazerBadge.progressPercentage = 0;

        const voyageBadge = new SkillBadge();
        voyageBadge.skill = parentComprehensive;
        voyageBadge.label = 'Voyager';
        voyageBadge.imgPath = 'assets/images/voyager-badge.jpg';
        voyageBadge.progressPercentage = 0;

        const polarisBadge = new SkillBadge();
        polarisBadge.skill = parentComprehensive;
        polarisBadge.label = 'Polaris Award';
        polarisBadge.imgPath = 'assets/images/polaris.png';
        polarisBadge.progressPercentage = 0;

        const goldRoseBadge = new SkillBadge();
        goldRoseBadge.skill = parentComprehensive;
        goldRoseBadge.label = 'Gold Compass Rose';
        goldRoseBadge.imgPath = 'assets/images/goldcompass-award.png';
        goldRoseBadge.progressPercentage = 0;

        //Outdoor Skill Badges

        const anglerBadge = new SkillBadge();
        anglerBadge.skill = parentOutdoor;
        anglerBadge.label = 'Angler';
        anglerBadge.imgPath = 'assets/images/angler-badge.jpg';
        anglerBadge.progressPercentage = 0;

        const astronomerBadge = new SkillBadge();
        astronomerBadge.skill = parentOutdoor;
        astronomerBadge.label = 'Astronomer';
        astronomerBadge.imgPath = 'assets/images/astronomer-badge.jpg';
        astronomerBadge.progressPercentage = 0;

        const backpackerBadge = new SkillBadge();
        backpackerBadge.skill = parentOutdoor;
        backpackerBadge.label = 'Backpacker';
        backpackerBadge.imgPath = 'assets/images/backpacker-badge.png';
        backpackerBadge.progressPercentage = 0;

        const bikeCamperBadge = new SkillBadge();
        bikeCamperBadge.skill = parentOutdoor;
        bikeCamperBadge.label = 'Bicycle Camper';
        bikeCamperBadge.imgPath = 'assets/images/bicycle-camp-badge.jpg';
        bikeCamperBadge.progressPercentage = 0;

        const birderBadge = new SkillBadge();
        birderBadge.skill = parentOutdoor;
        birderBadge.label = 'Birder';
        birderBadge.imgPath = 'assets/images/goldcompass-award.png';
        birderBadge.progressPercentage = 0;

        const campEngineerBadge = new SkillBadge();
        campEngineerBadge.skill = parentOutdoor;
        campEngineerBadge.label = 'Camp Engineer';
        campEngineerBadge.imgPath = 'assets/images/engineer-badge.png';
        campEngineerBadge.progressPercentage = 0;

        const camperBadge = new SkillBadge();
        camperBadge.skill = parentOutdoor;
        camperBadge.label = 'Camper';
        camperBadge.imgPath = 'assets/images/camp-badge.png';
        camperBadge.progressPercentage = 0;

        const canoeistBadge = new SkillBadge();
        canoeistBadge.skill = parentOutdoor;
        canoeistBadge.label = 'Canoeist';
        canoeistBadge.imgPath = 'assets/images/canoeist-badge.png';
        canoeistBadge.progressPercentage = 0;

        const cookBadge = new SkillBadge();
        cookBadge.skill = parentOutdoor;
        cookBadge.label = 'Cook';
        cookBadge.imgPath = 'assets/images/cooking-badge.jpg';
        cookBadge.progressPercentage = 0;

        const cyclistBadge = new SkillBadge();
        cyclistBadge.skill = parentOutdoor;
        cyclistBadge.label = 'Cyclist';
        cyclistBadge.imgPath = 'assets/images/cyclist-badge.png';
        cyclistBadge.progressPercentage = 0;

        const flowerBadge = new SkillBadge();
        flowerBadge.skill = parentOutdoor;
        flowerBadge.label = 'Flower Finder';
        flowerBadge.imgPath = 'assets/images/flower-badge.png';
        flowerBadge.progressPercentage = 0;

        const hikerBadge = new SkillBadge();
        hikerBadge.skill = parentOutdoor;
        hikerBadge.label = 'Hiker';
        hikerBadge.imgPath = 'assets/images/hiker-badge.png';
        hikerBadge.progressPercentage = 0;

        const kayakerBadge = new SkillBadge();
        kayakerBadge.skill = parentOutdoor;
        kayakerBadge.label = 'Kayaker';
        kayakerBadge.imgPath = 'assets/images/kayaker-badge.png';
        kayakerBadge.progressPercentage = 0;

        const marinerBadge = new SkillBadge();
        marinerBadge.skill = parentOutdoor;
        marinerBadge.label = 'Mariner';
        marinerBadge.imgPath = 'assets/images/mariner-badge.png';
        marinerBadge.progressPercentage = 0;

        const naturalistBadge = new SkillBadge();
        naturalistBadge.skill = parentOutdoor;
        naturalistBadge.label = 'Naturalist';
        naturalistBadge.imgPath = 'assets/images/naturalist-badge.png';
        naturalistBadge.progressPercentage = 0;

        const nauticalBadge = new SkillBadge();
        nauticalBadge.skill = parentOutdoor;
        nauticalBadge.label = 'Nautical Camper';
        nauticalBadge.imgPath = 'assets/images/nautical-camp-badge.png';
        nauticalBadge.progressPercentage = 0;

        const observerBadge = new SkillBadge();
        observerBadge.skill = parentOutdoor;
        observerBadge.label = 'Observer';
        observerBadge.imgPath = 'assets/images/observer-badge.png';
        observerBadge.progressPercentage = 0;

        const orienteerBadge = new SkillBadge();
        orienteerBadge.skill = parentOutdoor;
        orienteerBadge.label = 'Orienteer';
        orienteerBadge.imgPath = 'assets/images/orienteer-badge.png';
        orienteerBadge.progressPercentage = 0;

        const rangerBadge = new SkillBadge();
        rangerBadge.skill = parentOutdoor;
        rangerBadge.label = 'Ranger';
        rangerBadge.imgPath = 'assets/images/ranger-badge.png';
        rangerBadge.progressPercentage = 0;

        const rockclimberBadge = new SkillBadge();
        rockclimberBadge.skill = parentOutdoor;
        rockclimberBadge.label = 'Rock Climber';
        rockclimberBadge.imgPath = 'assets/images/rockclimber-badge.png';
        rockclimberBadge.progressPercentage = 0;

        //Civics and Community Badges

        const advocateBadge = new SkillBadge();
        advocateBadge.skill = parentCivics;
        advocateBadge.label = 'Advocate';
        advocateBadge.imgPath = 'assets/images/advocate-badge.png';
        advocateBadge.progressPercentage = 0;
       

        // create skill parts
        const tenderfootP1 = new SkillPart();
        tenderfootP1.badge = tenderfootBadge; // relates it to the parent
        tenderfootP1.label = 'Scout Law, Promise and Motto';
        tenderfootP1.descrip = 'Know the Scout Law, Promise, and Motto, and understand their meanings.';
        tenderfootP1.selected = false;

        
        const tenderfootP2 = new SkillPart();
        tenderfootP2.badge = tenderfootBadge; // relates it to the parent
        tenderfootP2.label = 'Scout Sign, Salute, and Handshake';
        tenderfootP2.descrip = 'Know the Scout sign, salute, handshake, and their importance.';
        tenderfootP2.selected = false;

        
        const tenderfootP3 = new SkillPart();
        tenderfootP3.badge = tenderfootBadge; // relates it to the parent
        tenderfootP3.label = 'Trail Signs';
        tenderfootP3.descrip = 'Be able to make and know the meaning of basic trail signs.';
        tenderfootP3.selected = false;

        
        const tenderfootP4 = new SkillPart();
        tenderfootP4.badge = tenderfootBadge; // relates it to the parent
        tenderfootP4.label = 'American Flag';
        tenderfootP4.descrip = 'Know composition, history, and how procedures for flying and lowering.';
        tenderfootP4.selected = false;

        
        const tenderfootP5 = new SkillPart();
        tenderfootP5.badge = tenderfootBadge; // relates it to the parent
        tenderfootP5.label = 'Scout Staff';
        tenderfootP5.descrip = 'Know several uses of the scout staff.';
        tenderfootP5.selected = false;

        
        const tenderfootP6 = new SkillPart();
        tenderfootP6.badge = tenderfootBadge; // relates it to the parent
        tenderfootP6.label = 'Knots';
        tenderfootP6.descrip = 'Know Square, Sheet bend, Clove hitch, Round turn and two half hitches, Bowline, Figure 8 knots and when to use them.';
        tenderfootP6.selected = false;

        
        const tenderfootP7 = new SkillPart();
        tenderfootP7.badge = tenderfootBadge; // relates it to the parent
        tenderfootP7.label = 'Rope Whip';
        tenderfootP7.descrip = 'Demonstrate how to whip the end of a rope.';
        tenderfootP7.selected = false;

        
        const tenderfootP8 = new SkillPart();
        tenderfootP8.badge = tenderfootBadge; // relates it to the parent
        tenderfootP8.label = 'Scouting Movement';
        tenderfootP8.descrip = 'Know two scouting history figures, full name of WIS, and why scouting is a "peace movement", and the meaning behind the name, number, and necker colors.';
        tenderfootP8.selected = false;

        

        // save all the entities to the DB
        await queryRunner.manager.save([
            advocateBadge
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // here you would optionally write code to reverse the migration, like to delete all these entities from the database
    }

}
