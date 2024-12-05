import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddNewColumnToAll1733369357060 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'information',
      new TableColumn({
        name: 'createTime',
        type: 'Date',
        default: () => 'CURRENT_TIMESTAMP',
      }),
    );
    await queryRunner.addColumn(
      'information',
      new TableColumn({
        name: 'updateTime',
        type: 'Date',
        default: () => 'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP',
      }),
    );
    await queryRunner.addColumn(
      'user',
      new TableColumn({
        name: 'createTime',
        type: 'Date',
        default: () => 'CURRENT_TIMESTAMP',
      }),
    );
    await queryRunner.addColumn(
      'user',
      new TableColumn({
        name: 'updateTime',
        type: 'Date',
        default: () => 'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP',
      }),
    );
    await queryRunner.addColumn(
      'site',
      new TableColumn({
        name: 'createTime',
        type: 'Date',
        default: () => 'CURRENT_TIMESTAMP',
      }),
    );
    await queryRunner.addColumn(
      'site',
      new TableColumn({
        name: 'updateTime',
        type: 'Date',
        default: () => 'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('site', 'updateTime');
    await queryRunner.dropColumn('site', 'createTime');
    await queryRunner.dropColumn('information', 'updateTime');
    await queryRunner.dropColumn('information', 'createTime');
    await queryRunner.dropColumn('user', 'updateTime');
    await queryRunner.dropColumn('user', 'createTime');
  }
}
