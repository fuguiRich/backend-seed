import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AddRoles1733733383806 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'role',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false,
            default: '"customer"',
          },
          {
            name: 'description',
            type: 'varchar',
            isNullable: false,
            default: '"a role"',
          },
          { name: 'createTime', type: 'timestamp', default: 'now()' },
          { name: 'updateTime', type: 'timestamp', default: 'now()' },
        ],
      }),
    );
    await queryRunner.addColumn(
      'user',
      new TableColumn({
        name: 'roleId',
        type: 'varchar',
      }),
    );

    await queryRunner.createForeignKey(
      'user',
      new TableForeignKey({
        columnNames: ['roleId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'role',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // const table = await queryRunner.getTable('user');
    // const foreignKey = table.foreignKeys.find(
    //   (fk) => fk.columnNames.indexOf('roleId') !== -1,
    // );
    // await queryRunner.dropForeignKey('user', foreignKey);
    // await queryRunner.dropColumn('user', 'roleId');
    // await queryRunner.dropTable('role');
  }
}
