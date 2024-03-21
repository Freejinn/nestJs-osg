import { SkillBadge } from "src/entities/skillBadge.entity";
import { MigrationInterface, QueryRunner } from "typeorm";

export class TimberWolfCharacter1710985194213 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        
        const wolfCollector = new SkillBadge();
        wolfCollector.label = 'Collector';
        wolfCollector.imgPath = 'wolf-collect.jpg';
        wolfCollector.progressPercentage = 0;
        
        const wolfObserver = new SkillBadge();
        wolfObserver.label = 'Observer';
        wolfObserver.imgPath = 'wolf-observe.jpg';
        wolfObserver.progressPercentage = 0;

        const wolfGardener = new SkillBadge();
        wolfGardener.label = 'Gardener';
        wolfGardener.imgPath = 'wolf-garden.jpg';
        wolfGardener.progressPercentage = 0;

        const wolfSignaler = new SkillBadge();
        wolfSignaler.label = 'Signaler';
        wolfSignaler.imgPath = 'wolf-signal.jpg';
        wolfSignaler.progressPercentage = 0;

        await queryRunner.manager.save([
            wolfCollector,
            wolfGardener,
            wolfObserver,
            wolfSignaler
        ])
        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
