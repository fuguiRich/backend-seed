import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUrlcontrol1733473098124 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'urlcontrol',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'website',
            type: 'varchar',
            isNullable: false,
            default: '"www"',
          },
          {
            name: 'url',
            type: 'varchar',
            isNullable: false,
            default: '"/api"',
          },
          {
            name: 'methods',
            type: 'varchar',
            isNullable: false,
            default: '"POST"',
          },
          {
            name: 'createTime',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updateTime',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('urlcontrol');
  }
}
