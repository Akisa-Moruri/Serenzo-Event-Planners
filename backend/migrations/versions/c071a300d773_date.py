"""date

Revision ID: c071a300d773
Revises: a037ed8b8ca3
Create Date: 2024-07-08 08:47:58.651626

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'c071a300d773'
down_revision = 'a037ed8b8ca3'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('events', schema=None) as batch_op:
        batch_op.alter_column('event_date',
               existing_type=sa.DATETIME(),
               type_=sa.String(),
               existing_nullable=False)

    with op.batch_alter_table('registrations', schema=None) as batch_op:
        batch_op.alter_column('registration_date',
               existing_type=sa.DATETIME(),
               type_=sa.String(),
               existing_nullable=True)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('registrations', schema=None) as batch_op:
        batch_op.alter_column('registration_date',
               existing_type=sa.String(),
               type_=sa.DATETIME(),
               existing_nullable=True)

    with op.batch_alter_table('events', schema=None) as batch_op:
        batch_op.alter_column('event_date',
               existing_type=sa.String(),
               type_=sa.DATETIME(),
               existing_nullable=False)

    # ### end Alembic commands ###
